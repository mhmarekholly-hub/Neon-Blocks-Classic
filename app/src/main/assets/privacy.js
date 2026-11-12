/* Age groups stay on the device. Selecting an age is not advertising consent. */
(()=>{'use strict';
const $=id=>document.getElementById(id),key='neonAgeGroupV1';
const labels={
en:['Your age group','Choose your age group. We do not ask for your date of birth.','Under 6','6–12','13–17','18 or older','Prefer not to say','Privacy','Advertising choices','Choose your age group. We do not ask for your date of birth.','Privacy choices could not be loaded. You can keep playing without ads.','Close'],
sk:['Veková skupina','Vyber svoju vekovú skupinu. Dátum narodenia nepýtame.','Menej ako 6','6–12','13–17','18 a viac','Nechcem uviesť','Súkromie','Nastavenia reklám','Vyber svoju vekovú skupinu. Dátum narodenia nepýtame.','Voľby súkromia sa nepodarilo načítať. Hrať môžeš ďalej bez reklám.','Zavrieť'],
cs:['Věková skupina','Vyber svou věkovou skupinu. Datum narození nepožadujeme.','Méně než 6','6–12','13–17','18 a více','Nechci uvést','Soukromí','Nastavení reklam','Vyber svou věkovou skupinu. Datum narození nepožadujeme.','Volby soukromí se nepodařilo načíst. Můžeš hrát dál bez reklam.','Zavřít'],
de:['Altersgruppe','Wähle deine Altersgruppe. Wir fragen nicht nach deinem Geburtsdatum.','Unter 6','6–12','13–17','Ab 18','Keine Angabe','Datenschutz','Werbeeinstellungen','Wähle deine Altersgruppe. Wir fragen nicht nach deinem Geburtsdatum.','Datenschutzeinstellungen konnten nicht geladen werden. Du kannst ohne Werbung weiterspielen.','Schließen'],
fr:['Tranche d’âge','Choisis ta tranche d’âge. Nous ne demandons pas ta date de naissance.','Moins de 6 ans','6–12 ans','13–17 ans','18 ans ou plus','Ne pas préciser','Confidentialité','Choix publicitaires','Choisis ta tranche d’âge. Nous ne demandons pas ta date de naissance.','Impossible de charger les choix de confidentialité. Tu peux jouer sans publicité.','Fermer'],
es:['Grupo de edad','Elige tu grupo de edad. No pedimos tu fecha de nacimiento.','Menos de 6','6–12','13–17','18 o más','Prefiero no decirlo','Privacidad','Opciones de anuncios','Elige tu grupo de edad. No pedimos tu fecha de nacimiento.','No se pudieron cargar las opciones de privacidad. Puedes seguir jugando sin anuncios.','Cerrar'],
it:['Fascia d’età','Scegli la tua fascia d’età. Non chiediamo la data di nascita.','Meno di 6','6–12','13–17','18 o più','Preferisco non dirlo','Privacy','Scelte pubblicitarie','Scegli la tua fascia d’età. Non chiediamo la data di nascita.','Impossibile caricare le scelte sulla privacy. Puoi continuare senza pubblicità.','Chiudi'],
pt:['Faixa etária','Escolhe a tua faixa etária. Não pedimos a data de nascimento.','Menos de 6','6–12','13–17','18 ou mais','Prefiro não dizer','Privacidade','Opções de anúncios','Escolhe a tua faixa etária. Não pedimos a data de nascimento.','Não foi possível carregar as opções de privacidade. Podes jogar sem anúncios.','Fechar'],
pl:['Grupa wiekowa','Wybierz grupę wiekową. Nie pytamy o datę urodzenia.','Poniżej 6','6–12','13–17','18 lub więcej','Wolę nie podawać','Prywatność','Ustawienia reklam','Wybierz grupę wiekową. Nie pytamy o datę urodzenia.','Nie udało się wczytać ustawień prywatności. Możesz grać bez reklam.','Zamknij'],
uk:['Вікова група','Вибери свою вікову групу. Ми не запитуємо дату народження.','До 6','6–12','13–17','Від 18','Не хочу вказувати','Конфіденційність','Налаштування реклами','Вибери свою вікову групу. Ми не запитуємо дату народження.','Не вдалося завантажити налаштування конфіденційності. Можна грати без реклами.','Закрити'],
'zh-CN':['年龄段','请选择年龄段。我们不询问出生日期。','未满6岁','6–12岁','13–17岁','18岁及以上','不愿透露','隐私','广告选项','请选择年龄段。我们不询问出生日期。','无法加载隐私选项。你可以继续无广告游戏。','关闭'],
'zh-TW':['年齡層','請選擇年齡層。我們不詢問出生日期。','未滿6歲','6–12歲','13–17歲','18歲以上','不願透露','隱私','廣告選項','請選擇年齡層。我們不詢問出生日期。','無法載入隱私選項。你可以繼續無廣告遊戲。','關閉'],
ja:['年齢層','年齢層を選んでください。生年月日は尋ねません。','6歳未満','6–12歳','13–17歳','18歳以上','回答しない','プライバシー','広告の設定','年齢層を選んでください。生年月日は尋ねません。','プライバシー設定を読み込めませんでした。広告なしでプレイできます。','閉じる'],
ko:['연령대','연령대를 선택하세요. 생년월일은 묻지 않습니다.','6세 미만','6–12세','13–17세','18세 이상','응답하지 않음','개인정보','광고 설정','연령대를 선택하세요. 생년월일은 묻지 않습니다.','개인정보 설정을 불러오지 못했습니다. 광고 없이 계속 플레이할 수 있습니다.','닫기'],
hi:['आयु वर्ग','अपना आयु वर्ग चुनें। हम जन्मतिथि नहीं पूछते।','6 से कम','6–12','13–17','18 या अधिक','नहीं बताना चाहता','गोपनीयता','विज्ञापन विकल्प','अपना आयु वर्ग चुनें। हम जन्मतिथि नहीं पूछते।','गोपनीयता विकल्प लोड नहीं हुए। आप बिना विज्ञापन खेल सकते हैं।','बंद करें'],
ar:['الفئة العمرية','اختر فئتك العمرية. لا نطلب تاريخ ميلادك.','أقل من 6','6–12','13–17','18 أو أكثر','أفضل عدم الإفصاح','الخصوصية','خيارات الإعلانات','اختر فئتك العمرية. لا نطلب تاريخ ميلادك.','تعذر تحميل خيارات الخصوصية. يمكنك متابعة اللعب دون إعلانات.','إغلاق'],
ru:['Возрастная группа','Выбери свою возрастную группу. Мы не запрашиваем дату рождения.','Младше 6','6–12','13–17','18 и старше','Не хочу указывать','Конфиденциальность','Настройки рекламы','Выбери свою возрастную группу. Мы не запрашиваем дату рождения.','Не удалось загрузить настройки конфиденциальности. Можно играть без рекламы.','Закрыть'],
tr:['Yaş grubu','Yaş grubunu seç. Doğum tarihini sormuyoruz.','6 yaş altı','6–12','13–17','18 ve üzeri','Belirtmek istemiyorum','Gizlilik','Reklam seçenekleri','Yaş grubunu seç. Doğum tarihini sormuyoruz.','Gizlilik seçenekleri yüklenemedi. Reklamsız oynamaya devam edebilirsin.','Kapat'],
nl:['Leeftijdsgroep','Kies je leeftijdsgroep. We vragen niet naar je geboortedatum.','Jonger dan 6','6–12','13–17','18 of ouder','Zeg ik liever niet','Privacy','Advertentiekeuzes','Kies je leeftijdsgroep. We vragen niet naar je geboortedatum.','Privacykeuzes konden niet worden geladen. Je kunt zonder advertenties spelen.','Sluiten'],
sv:['Åldersgrupp','Välj din åldersgrupp. Vi frågar inte efter födelsedatum.','Under 6','6–12','13–17','18 eller äldre','Vill inte ange','Integritet','Annonsval','Välj din åldersgrupp. Vi frågar inte efter födelsedatum.','Integritetsval kunde inte läsas in. Du kan spela utan annonser.','Stäng'],
da:['Aldersgruppe','Vælg din aldersgruppe. Vi spørger ikke om fødselsdato.','Under 6','6–12','13–17','18 eller ældre','Ønsker ikke at oplyse','Privatliv','Annoncevalg','Vælg din aldersgruppe. Vi spørger ikke om fødselsdato.','Privatlivsvalg kunne ikke indlæses. Du kan spille uden annoncer.','Luk'],
fi:['Ikäryhmä','Valitse ikäryhmäsi. Emme kysy syntymäaikaa.','Alle 6','6–12','13–17','18 tai yli','En halua kertoa','Tietosuoja','Mainosvalinnat','Valitse ikäryhmäsi. Emme kysy syntymäaikaa.','Tietosuojavalintoja ei voitu ladata. Voit jatkaa ilman mainoksia.','Sulje'],
no:['Aldersgruppe','Velg aldersgruppen din. Vi spør ikke om fødselsdato.','Under 6','6–12','13–17','18 eller eldre','Vil ikke oppgi','Personvern','Annonsevalg','Velg aldersgruppen din. Vi spør ikke om fødselsdato.','Personvernvalg kunne ikke lastes. Du kan spille uten annonser.','Lukk'],
ro:['Grupă de vârstă','Alege grupa de vârstă. Nu cerem data nașterii.','Sub 6','6–12','13–17','18 sau peste','Prefer să nu spun','Confidențialitate','Opțiuni pentru reclame','Alege grupa de vârstă. Nu cerem data nașterii.','Opțiunile de confidențialitate nu s-au încărcat. Poți juca fără reclame.','Închide'],
hu:['Korcsoport','Válaszd ki a korcsoportodat. Nem kérünk születési dátumot.','6 év alatt','6–12','13–17','18 vagy idősebb','Nem adom meg','Adatvédelem','Hirdetési beállítások','Válaszd ki a korcsoportodat. Nem kérünk születési dátumot.','Az adatvédelmi beállítások nem töltődtek be. Hirdetések nélkül játszhatsz tovább.','Bezárás'],
el:['Ηλικιακή ομάδα','Διάλεξε την ηλικιακή σου ομάδα. Δεν ζητάμε ημερομηνία γέννησης.','Κάτω των 6','6–12','13–17','18 και άνω','Δεν επιθυμώ να πω','Απόρρητο','Επιλογές διαφημίσεων','Διάλεξε την ηλικιακή σου ομάδα. Δεν ζητάμε ημερομηνία γέννησης.','Οι επιλογές απορρήτου δεν φορτώθηκαν. Μπορείς να παίξεις χωρίς διαφημίσεις.','Κλείσιμο'],
id:['Kelompok usia','Pilih kelompok usiamu. Kami tidak meminta tanggal lahir.','Di bawah 6','6–12','13–17','18 ke atas','Tidak ingin menjawab','Privasi','Pilihan iklan','Pilih kelompok usiamu. Kami tidak meminta tanggal lahir.','Pilihan privasi tidak dapat dimuat. Kamu dapat bermain tanpa iklan.','Tutup'],
vi:['Nhóm tuổi','Chọn nhóm tuổi của bạn. Chúng tôi không hỏi ngày sinh.','Dưới 6','6–12','13–17','Từ 18 trở lên','Không muốn trả lời','Quyền riêng tư','Tùy chọn quảng cáo','Chọn nhóm tuổi của bạn. Chúng tôi không hỏi ngày sinh.','Không tải được tùy chọn quyền riêng tư. Bạn có thể chơi tiếp mà không có quảng cáo.','Đóng'],
th:['ช่วงอายุ','เลือกช่วงอายุของคุณ เราไม่ขอวันเกิด','ต่ำกว่า 6','6–12','13–17','18 ปีขึ้นไป','ไม่ต้องการระบุ','ความเป็นส่วนตัว','ตัวเลือกโฆษณา','เลือกช่วงอายุของคุณ เราไม่ขอวันเกิด','โหลดตัวเลือกความเป็นส่วนตัวไม่ได้ คุณเล่นต่อโดยไม่มีโฆษณาได้','ปิด'],
bn:['বয়সের বিভাগ','আপনার বয়সের বিভাগ বেছে নিন। আমরা জন্মতারিখ চাই না।','৬ বছরের কম','৬–১২','১৩–১৭','১৮ বা বেশি','জানাতে চাই না','গোপনীয়তা','বিজ্ঞাপনের পছন্দ','আপনার বয়সের বিভাগ বেছে নিন। আমরা জন্মতারিখ চাই না।','গোপনীয়তার বিকল্প লোড হয়নি। বিজ্ঞাপন ছাড়াই খেলতে পারবেন।','বন্ধ করুন']
};
const valid=['under6','6-12','13-17','adult','unknown'];let age=null,required=false,busy=false;
try{const saved=localStorage.getItem(key);if(valid.includes(saved))age=saved}catch(e){}
const t=i=>(labels[document.documentElement.lang]||labels.en)[i];
// Android's native select popup may temporarily take window focus. A resulting
// menu refresh must not replace its option nodes or reset its current selection.
$('ageLanguage').innerHTML=$('language').innerHTML;
function send(){busy=age==='adult'&&!!window.NeonAdsBridge;render();window.NeonAdsBridge?.postMessage('age:'+(age==='adult'?'adult':'restricted'))}
function render(){
 if($('ageLanguage').value!==$('language').value)$('ageLanguage').value=$('language').value;
 $('ageLanguageLabel').textContent='🌐 '+$('languageLabel').textContent;
 $('ageLanguage').setAttribute('aria-label',$('languageLabel').textContent);
 $('ageTitle').textContent=t(0);$('ageDescription').textContent=t(1);
 valid.forEach((v,i)=>$('age'+i).textContent=t(i+2));
 $('privacyOpen').textContent=t(7);$('privacyTitle').textContent=t(7);$('privacyOptions').textContent=t(8);$('privacyClose').textContent=t(11);
 $('privacyContact').textContent='Neon Blocks Studio · studioneonblocks@gmail.com';
 $('privacyOptions').hidden=!required||age!=='adult';
 $('leaderboardOpen').hidden=age===null;$('menuLeaderboard').hidden=age===null;
 $('privacyStatus').textContent=window.neonPrivacyError?t(10):'';
 $('ageScreen').hidden=age!==null;
 $('privacyWait').hidden=!busy;$('privacyLoading').textContent=window.neonLbText('loading');
 const blocked=age===null||busy||!$('privacyScreen').hidden;
 $('app').inert=blocked;$('leaderboardPanel').inert=blocked;
}
function choose(value){if(!valid.includes(value)||age!==null)return;age=value;try{localStorage.setItem(key,age)}catch(e){}render();send()}
valid.forEach((v,i)=>$('age'+i).onclick=()=>choose(v));
 $('ageLanguage').onchange=e=>{
  const language=$('language');language.value=e.target.value;
  language.onchange({target:language});
 };
window.neonPrivacy={labels,translate:render,canPlay:()=>age!==null&&!busy,canUseOnline:()=>age!==null,nativeReady:send,
 state:(needsOptions,error)=>{busy=false;required=needsOptions;window.neonPrivacyError=error;render()},
 restrictedMessage:()=>t(9)};
 $('privacyOpen').onclick=()=>{window.neonGameMenu?.();$('privacyScreen').hidden=false;render()};
 $('privacyClose').onclick=()=>{$('privacyScreen').hidden=true;render()};
 $('privacyOptions').onclick=()=>{if(required&&age==='adult')window.NeonAdsBridge?.postMessage('privacy')};
render();send();
})();
