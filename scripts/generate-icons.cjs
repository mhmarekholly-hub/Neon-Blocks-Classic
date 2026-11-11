// One geometry source for Android launcher resources and the editable SVG master.
const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..');
const write=(file,content)=>{const target=path.join(root,file);fs.mkdirSync(path.dirname(target),{recursive:true});fs.writeFileSync(target,content+'\n')};
const groups=[
 {color:'#27D7F5',edge:'#9DF5FF',tiles:[[29,28],[42,28],[55,28],[42,41]]},
 {color:'#F16DCE',edge:'#FFBAED',tiles:[[68,41],[68,54],[55,54]]},
 {color:'#F7C950',edge:'#FFEBA8',tiles:[[29,54],[42,54],[29,67],[42,67]]},
 {color:'#9673FF',edge:'#CFBFFF',tiles:[[55,67],[68,67]]}
];
function tile(x,y){const s=11,r=1.6;return `M${x+r},${y}H${x+s-r}Q${x+s},${y} ${x+s},${y+r}V${y+s-r}Q${x+s},${y+s} ${x+s-r},${y+s}H${x+r}Q${x},${y+s} ${x},${y+s-r}V${y+r}Q${x},${y} ${x+r},${y}Z`}
const shapes=groups.map(g=>({...g,d:g.tiles.map(([x,y])=>tile(x,y)).join(' ')}));
const xmlHead='<?xml version="1.0" encoding="utf-8"?>';
const vector=body=>`${xmlHead}\n<vector xmlns:android="http://schemas.android.com/apk/res/android" android:width="108dp" android:height="108dp" android:viewportWidth="108" android:viewportHeight="108">\n${body}\n</vector>`;
const background='<path android:fillColor="#10182D" android:pathData="M0,0H108V108H0Z"/>\n<path android:fillColor="#182843" android:pathData="M0,0H108V32L0,76Z"/>';
const foreground=shapes.map(g=>`<path android:fillColor="#00000000" android:strokeColor="${g.color}" android:strokeAlpha="0.18" android:strokeWidth="3.2" android:pathData="${g.d}"/>\n<path android:fillColor="${g.color}" android:strokeColor="${g.edge}" android:strokeWidth="0.7" android:pathData="${g.d}"/>`+
 g.tiles.map(([x,y])=>`\n<path android:fillColor="#FFFFFF" android:fillAlpha="0.38" android:pathData="M${x+2},${y+1.5}h7v1.1h-7Z"/>`).join('')).join('\n');
const mono=`<path android:fillColor="#FFFFFF" android:pathData="${shapes.map(g=>g.d).join(' ')}"/>`;
write('app/src/main/res/drawable/ic_launcher_background.xml',vector(background));
write('app/src/main/res/drawable/ic_launcher_foreground.xml',vector(foreground));
write('app/src/main/res/drawable/ic_launcher_monochrome.xml',vector(mono));
// API 24/25 fallback; adaptive resources override these on API 26+.
write('app/src/main/res/mipmap-anydpi/ic_launcher.xml',vector(background+ '\n<group android:pivotX="54" android:pivotY="54" android:scaleX="1.3" android:scaleY="1.3">\n'+foreground+'\n</group>'));
write('app/src/main/res/mipmap-anydpi/ic_launcher_round.xml',vector('<path android:fillColor="#10182D" android:pathData="M54,0A54,54 0,1 1,54,108A54,54 0,1 1,54,0Z"/>\n<group android:pivotX="54" android:pivotY="54" android:scaleX="1.3" android:scaleY="1.3">\n'+foreground+'\n</group>'));
for(const api of [26,33])for(const name of ['ic_launcher','ic_launcher_round'])write(`app/src/main/res/mipmap-anydpi-v${api}/${name}.xml`,`${xmlHead}\n<adaptive-icon xmlns:android="http://schemas.android.com/apk/res/android">\n<background android:drawable="@drawable/ic_launcher_background"/>\n<foreground android:drawable="@drawable/ic_launcher_foreground"/>${api===33?'\n<monochrome android:drawable="@drawable/ic_launcher_monochrome"/>':''}\n</adaptive-icon>`);
const svgShapes=shapes.map(g=>`<path d="${g.d}" fill="none" stroke="${g.color}" stroke-opacity=".18" stroke-width="3.2"/><path d="${g.d}" fill="${g.color}" stroke="${g.edge}" stroke-width=".7"/>`+g.tiles.map(([x,y])=>`<path d="M${x+2},${y+1.5}h7v1.1h-7Z" fill="white" fill-opacity=".38"/>`).join('')).join('\n');
const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="18 18 72 72"><title>Neon Blocks Classic</title><path fill="#10182D" d="M0 0H108V108H0Z"/><path fill="#182843" d="M0 0H108V32L0 76Z"/>${svgShapes}</svg>`;
write('branding/neon-blocks-icon.svg',svg);
write('branding/README.md','# Neon Blocks Classic – ikona\n\nPôvodný vektorový motív neónových blokov bez textu. `neon-blocks-icon.svg` je farebný podklad pre náhľad a ďalšie exporty; nejde o hotový PNG súbor pre Google Play.\n\nAndroid používa samostatné pozadie, farebné popredie a jednofarebnú vrstvu pre tematické ikony. API 24/25 má vektorovú záložnú ikonu. Tvary maskuje launcher zariadenia. Zdroje sa obnovia cez `node scripts/generate-icons.cjs`; ručne upravené generované súbory sa tým prepíšu.\n\nMotív: azúrový padajúci blok, ružové L, žltý štvorec a fialový spodný rad. Hlavný symbol je v strede plochy 108 × 108 dp.\n');
console.log('Generated launcher resources and SVG master.');
