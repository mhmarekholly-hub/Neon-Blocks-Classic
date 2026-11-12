(()=>{'use strict';
// Delete actions require an explicit confirmation; this script never starts deletion on load.
const text={
en:['Delete online profile','Delete your online profile and scores permanently? Your local game stays saved.','Delete permanently','Cancel','Online profile deleted.','Deletion failed. Your identity is kept so you can retry.'],
sk:['Vymazať online profil','Natrvalo vymazať online profil a skóre? Rozhraná hra v zariadení zostane uložená.','Natrvalo vymazať','Zrušiť','Online profil bol vymazaný.','Vymazanie sa nepodarilo. Identita zostala uložená, aby sa dalo skúsiť znova.'],
cs:['Smazat online profil','Trvale smazat online profil a skóre? Rozehraná hra v zařízení zůstane uložená.','Trvale smazat','Zrušit','Online profil byl smazán.','Smazání se nezdařilo. Identita zůstala uložená pro další pokus.'],
de:['Online-Profil löschen','Online-Profil und Punktzahlen endgültig löschen? Dein lokaler Spielstand bleibt gespeichert.','Endgültig löschen','Abbrechen','Online-Profil gelöscht.','Löschen fehlgeschlagen. Deine Identität bleibt für einen erneuten Versuch gespeichert.'],
fr:['Supprimer le profil en ligne','Supprimer définitivement le profil et les scores en ligne ? La partie locale reste sauvegardée.','Supprimer définitivement','Annuler','Profil en ligne supprimé.','Échec de la suppression. Ton identité est conservée pour réessayer.'],
es:['Eliminar perfil en línea','¿Eliminar permanentemente el perfil y las puntuaciones en línea? La partida local seguirá guardada.','Eliminar permanentemente','Cancelar','Perfil en línea eliminado.','No se pudo eliminar. Se conserva tu identidad para volver a intentarlo.'],
it:['Elimina profilo online','Eliminare definitivamente profilo e punteggi online? La partita locale rimane salvata.','Elimina definitivamente','Annulla','Profilo online eliminato.','Eliminazione non riuscita. La tua identità viene conservata per riprovare.'],
pt:['Apagar perfil online','Apagar definitivamente o perfil e as pontuações online? O jogo local continuará guardado.','Apagar definitivamente','Cancelar','Perfil online apagado.','Não foi possível apagar. A tua identidade foi mantida para tentares novamente.'],
pl:['Usuń profil online','Trwale usunąć profil i wyniki online? Lokalna gra pozostanie zapisana.','Usuń trwale','Anuluj','Profil online został usunięty.','Usuwanie nie powiodło się. Tożsamość została zachowana, aby ponowić próbę.'],
uk:['Видалити онлайн-профіль','Назавжди видалити онлайн-профіль і результати? Локальна гра залишиться збереженою.','Видалити назавжди','Скасувати','Онлайн-профіль видалено.','Не вдалося видалити. Ідентифікатор збережено для повторної спроби.'],
'zh-CN':['删除在线资料','永久删除在线资料和分数？本地游戏进度将保留。','永久删除','取消','在线资料已删除。','删除失败。身份信息已保留，可重试。'],
'zh-TW':['刪除線上資料','永久刪除線上資料和分數？本機遊戲進度將保留。','永久刪除','取消','線上資料已刪除。','刪除失敗。身分資訊已保留，可重試。'],
ja:['オンラインプロフィールを削除','オンラインプロフィールとスコアを完全に削除しますか？端末のゲームは保存されます。','完全に削除','キャンセル','オンラインプロフィールを削除しました。','削除できませんでした。再試行できるよう識別情報を保持しています。'],
ko:['온라인 프로필 삭제','온라인 프로필과 점수를 영구 삭제할까요? 기기에 저장된 게임은 유지됩니다.','영구 삭제','취소','온라인 프로필이 삭제되었습니다.','삭제하지 못했습니다. 다시 시도할 수 있도록 식별 정보를 유지합니다.'],
hi:['ऑनलाइन प्रोफ़ाइल मिटाएँ','ऑनलाइन प्रोफ़ाइल और स्कोर हमेशा के लिए मिटाएँ? स्थानीय गेम सेव रहेगा।','हमेशा के लिए मिटाएँ','रद्द करें','ऑनलाइन प्रोफ़ाइल मिट गई।','मिटाना विफल रहा। दोबारा कोशिश के लिए पहचान सुरक्षित है।'],
ar:['حذف الملف عبر الإنترنت','هل تريد حذف الملف والنتائج عبر الإنترنت نهائيًا؟ ستبقى اللعبة المحلية محفوظة.','حذف نهائي','إلغاء','تم حذف الملف عبر الإنترنت.','تعذر الحذف. تم الاحتفاظ بالهوية لتتمكن من المحاولة مجددًا.'],
ru:['Удалить онлайн-профиль','Навсегда удалить онлайн-профиль и результаты? Локальная игра останется сохранённой.','Удалить навсегда','Отмена','Онлайн-профиль удалён.','Не удалось удалить. Идентификатор сохранён для повторной попытки.'],
tr:['Çevrimiçi profili sil','Çevrimiçi profil ve puanlar kalıcı olarak silinsin mi? Yerel oyun kaydı korunur.','Kalıcı olarak sil','İptal','Çevrimiçi profil silindi.','Silinemedi. Tekrar deneyebilmen için kimliğin saklandı.'],
nl:['Onlineprofiel verwijderen','Onlineprofiel en scores permanent verwijderen? Je lokale spel blijft opgeslagen.','Permanent verwijderen','Annuleren','Onlineprofiel verwijderd.','Verwijderen mislukt. Je identiteit blijft bewaard om opnieuw te proberen.'],
sv:['Radera onlineprofil','Radera onlineprofil och poäng permanent? Ditt lokala spel finns kvar.','Radera permanent','Avbryt','Onlineprofilen har raderats.','Raderingen misslyckades. Din identitet sparas så att du kan försöka igen.'],
da:['Slet onlineprofil','Slet onlineprofil og point permanent? Dit lokale spil forbliver gemt.','Slet permanent','Annuller','Onlineprofilen er slettet.','Sletning mislykkedes. Din identitet gemmes, så du kan prøve igen.'],
fi:['Poista verkkoprofiili','Poistetaanko verkkoprofiili ja pisteet pysyvästi? Paikallinen peli säilyy.','Poista pysyvästi','Peruuta','Verkkoprofiili poistettu.','Poisto epäonnistui. Tunniste säilytetään uutta yritystä varten.'],
no:['Slett nettprofil','Slett nettprofil og poeng permanent? Det lokale spillet forblir lagret.','Slett permanent','Avbryt','Nettprofilen er slettet.','Slettingen mislyktes. Identiteten beholdes slik at du kan prøve igjen.'],
ro:['Șterge profilul online','Ștergi definitiv profilul și scorurile online? Jocul local rămâne salvat.','Șterge definitiv','Anulează','Profilul online a fost șters.','Ștergerea a eșuat. Identitatea este păstrată pentru a reîncerca.'],
hu:['Online profil törlése','Végleg törlöd az online profilt és pontszámokat? A helyi játék mentése megmarad.','Végleges törlés','Mégse','Az online profil törölve.','A törlés sikertelen. Az azonosító megmarad az újrapróbáláshoz.'],
el:['Διαγραφή online προφίλ','Να διαγραφούν οριστικά το online προφίλ και οι βαθμολογίες; Το τοπικό παιχνίδι παραμένει αποθηκευμένο.','Οριστική διαγραφή','Ακύρωση','Το online προφίλ διαγράφηκε.','Η διαγραφή απέτυχε. Η ταυτότητα διατηρείται για νέα προσπάθεια.'],
id:['Hapus profil online','Hapus profil dan skor online secara permanen? Game lokal tetap tersimpan.','Hapus permanen','Batal','Profil online dihapus.','Penghapusan gagal. Identitas disimpan agar kamu dapat mencoba lagi.'],
vi:['Xóa hồ sơ trực tuyến','Xóa vĩnh viễn hồ sơ và điểm trực tuyến? Trò chơi trên thiết bị vẫn được lưu.','Xóa vĩnh viễn','Hủy','Đã xóa hồ sơ trực tuyến.','Xóa không thành công. Danh tính được giữ lại để thử lại.'],
th:['ลบโปรไฟล์ออนไลน์','ลบโปรไฟล์และคะแนนออนไลน์อย่างถาวรหรือไม่? เกมที่บันทึกในเครื่องจะยังอยู่','ลบถาวร','ยกเลิก','ลบโปรไฟล์ออนไลน์แล้ว','ลบไม่สำเร็จ เก็บข้อมูลระบุตัวตนไว้เพื่อให้ลองใหม่ได้'],
bn:['অনলাইন প্রোফাইল মুছুন','অনলাইন প্রোফাইল ও স্কোর স্থায়ীভাবে মুছবেন? ডিভাইসের গেম সেভ থাকবে।','স্থায়ীভাবে মুছুন','বাতিল','অনলাইন প্রোফাইল মুছে ফেলা হয়েছে।','মুছতে ব্যর্থ হয়েছে। আবার চেষ্টার জন্য পরিচয় রাখা হয়েছে।']
};
const $=id=>document.getElementById(id),t=i=>(text[document.documentElement.lang]||text.en)[i];let busy=false;
const policyLabels={en:'Privacy policy',sk:'Zásady ochrany súkromia',cs:'Zásady ochrany soukromí',de:'Datenschutzerklärung',fr:'Politique de confidentialité',es:'Política de privacidad',it:'Informativa sulla privacy',pt:'Política de privacidade',pl:'Polityka prywatności',uk:'Політика конфіденційності','zh-CN':'隐私政策','zh-TW':'隱私權政策',ja:'プライバシーポリシー',ko:'개인정보 처리방침',hi:'गोपनीयता नीति',ar:'سياسة الخصوصية',ru:'Политика конфиденциальности',tr:'Gizlilik politikası',nl:'Privacybeleid',sv:'Integritetspolicy',da:'Privatlivspolitik',fi:'Tietosuojakäytäntö',no:'Personvernerklæring',ro:'Politica de confidențialitate',hu:'Adatvédelmi szabályzat',el:'Πολιτική απορρήτου',id:'Kebijakan privasi',vi:'Chính sách quyền riêng tư',th:'นโยบายความเป็นส่วนตัว',bn:'গোপনীয়তা নীতি'};
function render(){
 const language=document.documentElement.lang;
 $('policyOpen').textContent=policyLabels[language]||policyLabels.en;
 $('policyClose').textContent=(window.neonPrivacy.labels[language]||window.neonPrivacy.labels.en)[11];
 $('deleteOpen').textContent=t(0);$('deleteDescription').textContent=t(1);$('deleteConfirm').textContent=t(2);$('deleteCancel').textContent=t(3);
 $('deleteOpen').disabled=busy;$('deleteConfirm').disabled=busy;$('deleteCancel').disabled=busy;
}
window.neonDeletion={text,translate:render};
$('policyOpen').onclick=()=>{$('policyScreen').hidden=false;$('privacyScreen').inert=true};
$('policyClose').onclick=()=>{$('policyScreen').hidden=true;$('privacyScreen').inert=false};
$('deleteOpen').onclick=()=>{if(busy)return;$('deleteDialog').hidden=false;render()};
$('deleteCancel').onclick=()=>{if(!busy)$('deleteDialog').hidden=true};
$('deleteConfirm').onclick=async()=>{
 if(busy||$('deleteDialog').hidden)return;busy=true;render();$('deleteStatus').textContent=window.neonLbText('loading');
 try{await window.neonLeaderboard.deleteProfile();$('deleteDialog').hidden=true;$('deleteStatus').textContent=t(4)}
 catch(e){$('deleteStatus').textContent=t(5)}finally{busy=false;render()}
};
render();
})();
