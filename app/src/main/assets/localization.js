// Columns: menu, leaderboard, nickname, country, join, refresh, privacy, loading,
// empty, joined, invitation, error, save failure. All 30 supported languages.
window.NEON_LOCALES = {
en: ['Menu','Global leaderboard','Nickname (2–18 characters)','Country (2 letters)','Join / Save name','Refresh','Top 20. Scores from completed games only. Public nicknames: do not use your real name. Internet required.','Loading…','No scores yet.','Joined. Your best completed game is shared.','Choose a nickname and join to share scores.','Could not complete the request.','Could not save the game.'],
sk: ['Menu','Svetový rebríček','Prezývka (2–18 znakov)','Krajina (2 písmená)','Pridať sa / Uložiť meno','Obnoviť','Najlepších 20. Iba dokončené hry. Prezývky sú verejné: nepoužívaj skutočné meno. Vyžaduje internet.','Načítava sa…','Zatiaľ žiadne skóre.','Si prihlásený. Zdieľa sa najlepší výsledok dokončenej hry.','Vyber prezývku a pridaj sa na zdieľanie skóre.','Požiadavku sa nepodarilo dokončiť.','Hru sa nepodarilo uložiť.'],
cs: ['Menu','Světový žebříček','Přezdívka (2–18 znaků)','Země (2 písmena)','Připojit / Uložit jméno','Obnovit','Nejlepších 20. Pouze dokončené hry. Přezdívky jsou veřejné: nepoužívej skutečné jméno. Vyžaduje internet.','Načítání…','Zatím žádné skóre.','Připojeno. Sdílí se nejlepší dokončená hra.','Vyber přezdívku a připoj se ke sdílení skóre.','Požadavek se nezdařil.','Hru se nepodařilo uložit.'],
de: ['Menü','Weltrangliste','Spitzname (2–18 Zeichen)','Land (2 Buchstaben)','Beitreten / Namen speichern','Aktualisieren','Top 20. Nur beendete Spiele. Spitznamen sind öffentlich: keinen echten Namen verwenden. Internet erforderlich.','Wird geladen…','Noch keine Ergebnisse.','Beigetreten. Dein bestes beendetes Spiel wird geteilt.','Wähle einen Spitznamen und tritt bei.','Anfrage fehlgeschlagen.','Spiel konnte nicht gespeichert werden.'],
fr: ['Menu','Classement mondial','Pseudo (2–18 caractères)','Pays (2 lettres)','Rejoindre / Enregistrer','Actualiser','Top 20. Parties terminées uniquement. Pseudos publics : évitez votre vrai nom. Internet requis.','Chargement…','Aucun score.','Inscrit. Votre meilleure partie terminée est partagée.','Choisissez un pseudo et rejoignez le classement.','Échec de la demande.','Impossible de sauvegarder la partie.'],
es: ['Menú','Clasificación mundial','Apodo (2–18 caracteres)','País (2 letras)','Unirse / Guardar nombre','Actualizar','Los 20 mejores. Solo partidas terminadas. Apodos públicos: no uses tu nombre real. Requiere internet.','Cargando…','Aún no hay puntuaciones.','Inscrito. Se comparte tu mejor partida terminada.','Elige un apodo y únete para compartir puntos.','No se pudo completar la solicitud.','No se pudo guardar la partida.'],
it: ['Menu','Classifica mondiale','Soprannome (2–18 caratteri)','Paese (2 lettere)','Partecipa / Salva nome','Aggiorna','I migliori 20. Solo partite concluse. Nomi pubblici: non usare il tuo vero nome. Internet necessario.','Caricamento…','Nessun punteggio.','Iscritto. Si condivide la tua migliore partita conclusa.','Scegli un soprannome e partecipa.','Richiesta non riuscita.','Impossibile salvare la partita.'],
pt: ['Menu','Classificação mundial','Apelido (2–18 caracteres)','País (2 letras)','Aderir / Guardar nome','Atualizar','Os 20 melhores. Apenas jogos terminados. Apelidos públicos: não uses o nome real. Requer internet.','A carregar…','Ainda sem pontuações.','Inscrito. O teu melhor jogo terminado é partilhado.','Escolhe um apelido e adere para partilhar pontos.','Não foi possível concluir o pedido.','Não foi possível guardar o jogo.'],
pl: ['Menu','Ranking światowy','Pseudonim (2–18 znaków)','Kraj (2 litery)','Dołącz / Zapisz nazwę','Odśwież','Najlepsze 20. Tylko ukończone gry. Pseudonimy są publiczne: nie używaj prawdziwego imienia. Wymaga internetu.','Wczytywanie…','Brak wyników.','Dołączono. Udostępniamy najlepszą ukończoną grę.','Wybierz pseudonim i dołącz do rankingu.','Nie udało się wykonać żądania.','Nie udało się zapisać gry.'],
uk: ['Меню','Світовий рейтинг','Псевдонім (2–18 символів)','Країна (2 літери)','Приєднатися / Зберегти ім’я','Оновити','Найкращі 20. Лише завершені ігри. Псевдоніми публічні: не вказуйте справжнє ім’я. Потрібен інтернет.','Завантаження…','Результатів ще немає.','Приєднано. Найкраща завершена гра публікується.','Виберіть псевдонім і приєднайтеся.','Не вдалося виконати запит.','Не вдалося зберегти гру.'],
'zh-CN': ['菜单','全球排行榜','昵称（2–18个字符）','国家（2个字母）','加入 / 保存昵称','刷新','前20名。仅限已结束的游戏。昵称公开：请勿使用真实姓名。需要联网。','加载中…','暂无分数。','已加入。将分享已结束游戏的最高分。','选择昵称并加入以分享分数。','请求失败。','无法保存游戏。'],
'zh-TW': ['選單','全球排行榜','暱稱（2–18個字元）','國家（2個字母）','加入 / 儲存暱稱','重新整理','前20名。僅限已結束的遊戲。暱稱公開：請勿使用真實姓名。需要連網。','載入中…','尚無分數。','已加入。將分享已結束遊戲的最高分。','選擇暱稱並加入以分享分數。','要求失敗。','無法儲存遊戲。'],
ja: ['メニュー','世界ランキング','ニックネーム（2～18文字）','国（英字2文字）','参加 / 名前を保存','更新','上位20人。終了したゲームのみ。名前は公開されます。本名は使わないでください。インターネット接続が必要です。','読み込み中…','まだ記録がありません。','参加済み。終了したゲームの最高得点を共有します。','ニックネームを選んで参加してください。','リクエストに失敗しました。','ゲームを保存できませんでした。'],
ko: ['메뉴','세계 순위','별명 (2–18자)','국가 (영문 2자)','참가 / 이름 저장','새로 고침','상위 20명. 종료된 게임만 포함됩니다. 별명은 공개되니 실명을 쓰지 마세요. 인터넷이 필요합니다.','불러오는 중…','아직 점수가 없습니다.','참가 완료. 종료된 게임의 최고 점수를 공유합니다.','별명을 선택하고 참가하여 점수를 공유하세요.','요청을 완료하지 못했습니다.','게임을 저장하지 못했습니다.'],
hi: ['मेनू','विश्व लीडरबोर्ड','उपनाम (2–18 अक्षर)','देश (2 अंग्रेज़ी अक्षर)','जुड़ें / नाम सहेजें','ताज़ा करें','शीर्ष 20। केवल समाप्त खेल। उपनाम सार्वजनिक हैं: असली नाम न दें। इंटरनेट ज़रूरी है।','लोड हो रहा है…','अभी कोई स्कोर नहीं।','जुड़ गए। समाप्त खेल का सर्वोच्च स्कोर साझा होगा।','उपनाम चुनें और स्कोर साझा करने के लिए जुड़ें।','अनुरोध पूरा नहीं हुआ।','खेल सहेजा नहीं जा सका।'],
ar: ['القائمة','الترتيب العالمي','اسم مستعار (2–18 حرفًا)','البلد (حرفان لاتينيان)','انضمام / حفظ الاسم','تحديث','أفضل 20. الألعاب المكتملة فقط. الأسماء علنية: لا تستخدم اسمك الحقيقي. يتطلب الإنترنت.','جارٍ التحميل…','لا توجد نتائج بعد.','تم الانضمام. تُشارك أفضل نتيجة للعبة مكتملة.','اختر اسمًا مستعارًا وانضم لمشاركة النتائج.','تعذر إكمال الطلب.','تعذر حفظ اللعبة.'],
ru: ['Меню','Мировой рейтинг','Псевдоним (2–18 символов)','Страна (2 буквы)','Вступить / Сохранить имя','Обновить','Лучшие 20. Только завершённые игры. Псевдонимы публичны: не используйте настоящее имя. Нужен интернет.','Загрузка…','Пока нет результатов.','Вы присоединились. Публикуется лучшая завершённая игра.','Выберите псевдоним и присоединитесь.','Не удалось выполнить запрос.','Не удалось сохранить игру.'],
tr: ['Menü','Dünya sıralaması','Takma ad (2–18 karakter)','Ülke (2 harf)','Katıl / Adı kaydet','Yenile','İlk 20. Yalnızca biten oyunlar. Takma adlar herkese açıktır: gerçek adını kullanma. İnternet gerekir.','Yükleniyor…','Henüz puan yok.','Katıldın. Biten oyunlardaki en iyi puanın paylaşılır.','Takma ad seç ve puan paylaşmak için katıl.','İstek tamamlanamadı.','Oyun kaydedilemedi.'],
nl: ['Menu','Wereldranglijst','Bijnaam (2–18 tekens)','Land (2 letters)','Deelnemen / Naam opslaan','Vernieuwen','Top 20. Alleen voltooide spellen. Bijnamen zijn openbaar: gebruik geen echte naam. Internet vereist.','Laden…','Nog geen scores.','Deelgenomen. Je beste voltooide spel wordt gedeeld.','Kies een bijnaam en doe mee.','Verzoek mislukt.','Spel kon niet worden opgeslagen.'],
sv: ['Meny','Världsranking','Smeknamn (2–18 tecken)','Land (2 bokstäver)','Gå med / Spara namn','Uppdatera','Topp 20. Endast avslutade spel. Smeknamn är offentliga: använd inte ditt riktiga namn. Internet krävs.','Laddar…','Inga poäng ännu.','Du är med. Ditt bästa avslutade spel delas.','Välj ett smeknamn och gå med.','Begäran misslyckades.','Spelet kunde inte sparas.'],
da: ['Menu','Verdensrangliste','Kaldenavn (2–18 tegn)','Land (2 bogstaver)','Deltag / Gem navn','Opdater','Top 20. Kun afsluttede spil. Kaldenavne er offentlige: brug ikke dit rigtige navn. Kræver internet.','Indlæser…','Ingen point endnu.','Du deltager. Dit bedste afsluttede spil deles.','Vælg et kaldenavn og deltag.','Anmodningen mislykkedes.','Spillet kunne ikke gemmes.'],
fi: ['Valikko','Maailman tulostaulu','Nimimerkki (2–18 merkkiä)','Maa (2 kirjainta)','Liity / Tallenna nimi','Päivitä','20 parasta. Vain päättyneet pelit. Nimimerkit ovat julkisia: älä käytä oikeaa nimeäsi. Vaatii internetin.','Ladataan…','Ei vielä tuloksia.','Olet mukana. Paras päättynyt pelisi jaetaan.','Valitse nimimerkki ja liity jakamaan tuloksia.','Pyyntö epäonnistui.','Peliä ei voitu tallentaa.'],
no: ['Meny','Verdensrangering','Kallenavn (2–18 tegn)','Land (2 bokstaver)','Bli med / Lagre navn','Oppdater','Topp 20. Bare avsluttede spill. Kallenavn er offentlige: ikke bruk ekte navn. Krever internett.','Laster…','Ingen poeng ennå.','Du er med. Ditt beste avsluttede spill deles.','Velg et kallenavn og bli med.','Forespørselen mislyktes.','Spillet kunne ikke lagres.'],
ro: ['Meniu','Clasament mondial','Poreclă (2–18 caractere)','Țară (2 litere)','Participă / Salvează numele','Reîmprospătează','Primii 20. Doar jocuri încheiate. Poreclele sunt publice: nu folosi numele real. Necesită internet.','Se încarcă…','Încă nu există scoruri.','Te-ai înscris. Cel mai bun joc încheiat este distribuit.','Alege o poreclă și participă.','Cererea nu a putut fi finalizată.','Jocul nu a putut fi salvat.'],
hu: ['Menü','Világranglista','Becenév (2–18 karakter)','Ország (2 betű)','Csatlakozás / Név mentése','Frissítés','A legjobb 20. Csak befejezett játékok. A becenevek nyilvánosak: ne használd a valódi neved. Internet szükséges.','Betöltés…','Még nincs eredmény.','Csatlakoztál. A legjobb befejezett játékod megosztásra kerül.','Válassz becenevet és csatlakozz.','A kérés sikertelen.','A játék mentése sikertelen.'],
el: ['Μενού','Παγκόσμια κατάταξη','Ψευδώνυμο (2–18 χαρακτήρες)','Χώρα (2 γράμματα)','Συμμετοχή / Αποθήκευση','Ανανέωση','Οι 20 καλύτεροι. Μόνο ολοκληρωμένα παιχνίδια. Δημόσια ψευδώνυμα: μη χρησιμοποιείτε αληθινό όνομα. Απαιτείται διαδίκτυο.','Φόρτωση…','Δεν υπάρχουν σκορ ακόμα.','Συμμετέχετε. Κοινοποιείται το καλύτερο ολοκληρωμένο παιχνίδι.','Επιλέξτε ψευδώνυμο και συμμετάσχετε.','Το αίτημα απέτυχε.','Δεν ήταν δυνατή η αποθήκευση.'],
id: ['Menu','Peringkat dunia','Nama panggilan (2–18 karakter)','Negara (2 huruf)','Gabung / Simpan nama','Muat ulang','20 teratas. Hanya permainan selesai. Nama panggilan bersifat publik: jangan gunakan nama asli. Perlu internet.','Memuat…','Belum ada skor.','Sudah bergabung. Permainan selesai terbaik dibagikan.','Pilih nama panggilan dan bergabunglah.','Permintaan gagal.','Permainan tidak dapat disimpan.'],
vi: ['Trình đơn','Bảng xếp hạng thế giới','Biệt danh (2–18 ký tự)','Quốc gia (2 chữ cái)','Tham gia / Lưu tên','Làm mới','20 người đứng đầu. Chỉ tính trò chơi đã kết thúc. Biệt danh công khai: không dùng tên thật. Cần internet.','Đang tải…','Chưa có điểm.','Đã tham gia. Kết quả tốt nhất của trò chơi đã kết thúc được chia sẻ.','Chọn biệt danh và tham gia để chia sẻ điểm.','Không thể hoàn tất yêu cầu.','Không thể lưu trò chơi.'],
th: ['เมนู','อันดับโลก','ชื่อเล่น (2–18 ตัวอักษร)','ประเทศ (อักษรอังกฤษ 2 ตัว)','เข้าร่วม / บันทึกชื่อ','รีเฟรช','20 อันดับแรก เฉพาะเกมที่จบแล้ว ชื่อเล่นเป็นข้อมูลสาธารณะ: อย่าใช้ชื่อจริง ต้องใช้อินเทอร์เน็ต','กำลังโหลด…','ยังไม่มีคะแนน','เข้าร่วมแล้ว จะแชร์คะแนนที่ดีที่สุดจากเกมที่จบแล้ว','เลือกชื่อเล่นและเข้าร่วมเพื่อแชร์คะแนน','ไม่สามารถดำเนินการได้','ไม่สามารถบันทึกเกมได้'],
bn: ['মেনু','বিশ্ব লিডারবোর্ড','ডাকনাম (2–18 অক্ষর)','দেশ (2 ইংরেজি অক্ষর)','যোগ দিন / নাম সংরক্ষণ','রিফ্রেশ','সেরা 20। শুধু শেষ হওয়া খেলা। ডাকনাম সর্বজনীন: আসল নাম দেবেন না। ইন্টারনেট প্রয়োজন।','লোড হচ্ছে…','এখনও কোনো স্কোর নেই।','যোগ দিয়েছেন। শেষ হওয়া খেলার সেরা স্কোর শেয়ার হবে।','ডাকনাম বেছে নিয়ে যোগ দিন।','অনুরোধ সম্পন্ন হয়নি।','খেলা সংরক্ষণ করা যায়নি।']
};
window.NEON_MENU=Object.fromEntries(Object.entries(window.NEON_LOCALES).map(([k,v])=>[k,v[0]]));
window.NEON_CONNECTION_MESSAGES={
en:['Cannot connect. Check your internet connection and tap Refresh.','Leaderboard access is blocked on the server. Please contact the game developer.'],
sk:['Nedá sa pripojiť. Skontroluj internet a stlač Obnoviť.','Server blokuje prístup k rebríčku. Obráť sa na vývojára hry.'],
cs:['Nelze se připojit. Zkontroluj internet a stiskni Obnovit.','Server blokuje přístup k žebříčku. Obrať se na vývojáře hry.'],
de:['Keine Verbindung. Prüfe das Internet und tippe auf Aktualisieren.','Der Server blockiert die Rangliste. Wende dich an den Spieleentwickler.'],
fr:['Connexion impossible. Vérifiez Internet et appuyez sur Actualiser.','Le serveur bloque le classement. Contactez le développeur du jeu.'],
es:['No se puede conectar. Comprueba internet y pulsa Actualizar.','El servidor bloquea la clasificación. Contacta con el desarrollador.'],
it:['Connessione non riuscita. Controlla internet e premi Aggiorna.','Il server blocca la classifica. Contatta lo sviluppatore del gioco.'],
pt:['Não foi possível ligar. Verifica a internet e toca em Atualizar.','O servidor bloqueia a classificação. Contacta o programador do jogo.'],
pl:['Brak połączenia. Sprawdź internet i naciśnij Odśwież.','Serwer blokuje ranking. Skontaktuj się z twórcą gry.'],
uk:['Немає з’єднання. Перевірте інтернет і натисніть Оновити.','Сервер блокує рейтинг. Зверніться до розробника гри.'],
'zh-CN':['无法连接。请检查网络并点击刷新。','服务器阻止访问排行榜。请联系游戏开发者。'],
'zh-TW':['無法連線。請檢查網路並點選重新整理。','伺服器封鎖排行榜存取。請聯絡遊戲開發者。'],
ja:['接続できません。インターネットを確認して更新してください。','サーバーがランキングへのアクセスを拒否しています。開発者にお問い合わせください。'],
ko:['연결할 수 없습니다. 인터넷을 확인하고 새로 고침을 누르세요.','서버가 순위 접근을 차단했습니다. 게임 개발자에게 문의하세요.'],
hi:['कनेक्ट नहीं हो सका। इंटरनेट जाँचें और ताज़ा करें दबाएँ।','सर्वर ने लीडरबोर्ड रोक दिया है। खेल के डेवलपर से संपर्क करें।'],
ar:['تعذر الاتصال. تحقق من الإنترنت واضغط تحديث.','الخادم يمنع الوصول إلى الترتيب. تواصل مع مطور اللعبة.'],
ru:['Нет соединения. Проверьте интернет и нажмите Обновить.','Сервер блокирует рейтинг. Обратитесь к разработчику игры.'],
tr:['Bağlanılamıyor. İnterneti kontrol edip Yenile’ye dokun.','Sunucu sıralamaya erişimi engelliyor. Oyun geliştiricisine başvur.'],
nl:['Geen verbinding. Controleer internet en tik op Vernieuwen.','De server blokkeert de ranglijst. Neem contact op met de ontwikkelaar.'],
sv:['Kan inte ansluta. Kontrollera internet och tryck på Uppdatera.','Servern blockerar rankingen. Kontakta spelutvecklaren.'],
da:['Kan ikke oprette forbindelse. Tjek internet og tryk Opdater.','Serveren blokerer ranglisten. Kontakt spiludvikleren.'],
fi:['Yhteyttä ei saada. Tarkista internet ja paina Päivitä.','Palvelin estää tulostaulun käytön. Ota yhteyttä pelin kehittäjään.'],
no:['Kan ikke koble til. Sjekk internett og trykk Oppdater.','Serveren blokkerer rangeringen. Kontakt spillutvikleren.'],
ro:['Conectare imposibilă. Verifică internetul și apasă Reîmprospătează.','Serverul blochează clasamentul. Contactează dezvoltatorul jocului.'],
hu:['Nem lehet csatlakozni. Ellenőrizd az internetet, és nyomd meg a Frissítés gombot.','A szerver blokkolja a ranglistát. Keresd a játék fejlesztőjét.'],
el:['Αδύνατη η σύνδεση. Ελέγξτε το διαδίκτυο και πατήστε Ανανέωση.','Ο διακομιστής αποκλείει την κατάταξη. Επικοινωνήστε με τον δημιουργό.'],
id:['Tidak dapat terhubung. Periksa internet lalu ketuk Muat ulang.','Server memblokir peringkat. Hubungi pengembang permainan.'],
vi:['Không thể kết nối. Kiểm tra internet rồi nhấn Làm mới.','Máy chủ chặn bảng xếp hạng. Hãy liên hệ nhà phát triển trò chơi.'],
th:['เชื่อมต่อไม่ได้ ตรวจสอบอินเทอร์เน็ตแล้วกดรีเฟรช','เซิร์ฟเวอร์บล็อกการเข้าถึงอันดับ โปรดติดต่อผู้พัฒนาเกม'],
bn:['সংযোগ হচ্ছে না। ইন্টারনেট পরীক্ষা করে রিফ্রেশ চাপুন।','সার্ভার লিডারবোর্ডে প্রবেশ বন্ধ করেছে। গেমের ডেভেলপারের সাথে যোগাযোগ করুন।']
};
window.neonLbText=key=>{
 if(key==='network'||key==='permission')return (window.NEON_CONNECTION_MESSAGES[document.documentElement.lang]||window.NEON_CONNECTION_MESSAGES.en)[key==='network'?0:1];
 const indexes={title:1,name:2,country:3,join:4,refresh:5,privacy:6,loading:7,empty:8,joined:9,invitation:10,error:11,saveError:12};
 return (window.NEON_LOCALES[document.documentElement.lang]||window.NEON_LOCALES.en)[indexes[key]];
};
window.addEventListener('neonLanguageChange',()=>{
 const $=id=>document.getElementById(id),t=window.neonLbText;
 $('leaderboardOpen').textContent='🏆 '+t('title');
 document.querySelector('.lb-head h2').textContent='🏆 '+t('title');
 $('leaderboardPanel').setAttribute('aria-label',t('title'));
 for(const [id,key] of [['lbName','name'],['lbCountry','country']]){ $(id).placeholder=t(key);$(id).setAttribute('aria-label',t(key)) }
 $('lbJoin').textContent=t('join');$('lbRefresh').textContent='↻ '+t('refresh');
 document.querySelector('.lb-foot').textContent=t('privacy');
 $('leaderboardClose').setAttribute('aria-label',window.NEON_MENU[document.documentElement.lang]);
 $('lbStatus').textContent=t('invitation');
});
