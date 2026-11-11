const {test,before}=require('node:test'),assert=require('node:assert/strict');
const project='demo-neonblocks';
const host=process.env.FIRESTORE_EMULATOR_HOST,authHost=process.env.FIREBASE_AUTH_EMULATOR_HOST;
for(const value of [host,authHost])if(!/^(127\.0\.0\.1|localhost):\d+$/.test(value||''))throw Error('Tests require loopback Firebase emulators. Live projects are forbidden.');
const root=`http://${host}/v1/projects/${project}/databases/(default)/documents`;
let alice,bob;
async function user(){const r=await fetch(`http://${authHost}/identitytoolkit.googleapis.com/v1/accounts:signUp?key=fake-emulator-key`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({returnSecureToken:true})});assert.equal(r.status,200);return r.json()}
async function request(route,identity,method='GET',body){return fetch(root+route,{method,headers:{'Content-Type':'application/json',...(identity?{Authorization:'Bearer '+identity.idToken}:{})},...(body?{body:JSON.stringify(body)}:{})})}
const fields=(score=100)=>({nickname:{stringValue:'Player'},country:{stringValue:'SK'},score:{integerValue:String(score)}});
const denied=async response=>assert.ok([401,403].includes(response.status),'expected denied, got '+response.status);
before(async()=>{alice=await user();bob=await user()});
test('only the authenticated owner can delete own v2 and legacy score',async()=>{
 for(const collection of ['scores','scores_v2']){
  const own=`/${collection}/${alice.localId}`,other=`/${collection}/${bob.localId}`;
  assert.equal((await request(own,alice,'PATCH',{fields:fields()})).status,200);
  assert.equal((await request(other,bob,'PATCH',{fields:fields()})).status,200);
  await denied(await request(own,null,'DELETE'));await denied(await request(own,bob,'DELETE'));
  assert.equal((await request(own,alice)).status,200);
  assert.equal((await request(own,alice,'DELETE')).status,200);
  assert.equal((await request(own,alice)).status,404);
  assert.equal((await request(other,bob)).status,200);
 }
});
test('profile deletion batch removes only own documents and remains retryable',async()=>{
 const names=['scores','scores_v2'].map(c=>`projects/${project}/databases/(default)/documents/${c}/${alice.localId}`);
 for(const name of names)assert.equal((await request('/'+name.split('/documents/')[1],alice,'PATCH',{fields:fields()})).status,200);
 const writes=names.map(name=>({delete:name}));
 await denied(await request(':commit',bob,'POST',{writes}));
 assert.equal((await request(':commit',alice,'POST',{writes})).status,200);
 assert.equal((await request(':commit',alice,'POST',{writes})).status,200);
 for(const name of names)assert.equal((await request('/'+name.split('/documents/')[1],alice)).status,404);
});
test('score ownership and strict schema remain enforced on create and update',async()=>{
 const own='/scores_v2/'+alice.localId;
 await denied(await request(own,bob,'PATCH',{fields:fields()}));
 assert.equal((await request(own,alice,'PATCH',{fields:fields(300)})).status,200);
 for(const invalid of [fields(100),fields(-100),fields(101),{...fields(300),nickname:{stringValue:'x'.repeat(1000)}},{...fields(300),score:{stringValue:'300'}},{...fields(300),admin:{booleanValue:true}},{nickname:{stringValue:'Player'},score:{integerValue:'300'}}])await denied(await request(own,alice,'PATCH',{fields:invalid}));
 assert.equal((await request(own,alice,'PATCH',{fields:fields(500)})).status,200);
});
test('queries require authentication and a maximum limit of 20',async()=>{
 const query=limit=>({structuredQuery:{from:[{collectionId:'scores_v2'}],orderBy:[{field:{fieldPath:'score'},direction:'DESCENDING'}],...(limit?{limit}:{})}});
 await denied(await request(':runQuery',null,'POST',query(20)));
 await denied(await request(':runQuery',alice,'POST',query()));
 await denied(await request(':runQuery',alice,'POST',query(21)));
 assert.equal((await request(':runQuery',alice,'POST',query(20))).status,200);
 await denied(await request('/private/example',alice,'PATCH',{fields:fields()}));
 await denied(await request('/scores_v2/'+alice.localId+'/private/example',alice,'PATCH',{fields:fields()}));
});
