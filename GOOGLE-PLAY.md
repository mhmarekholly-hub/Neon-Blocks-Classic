# Neon Blocks Classic — príprava na Google Play

Stav k 11. 11. 2026: herná verzia je používateľom odskúšaná. Vývojársky účet čaká na overenie. Používateľ chce celoplošnú reklamu **po skončení hry**. Skúšobné APK obsahuje Google demo reklamy; produkčné reklamy sú vypnuté; cieľová skupina zahŕňa aj deti mladšie ako 13 rokov.

## Čo táto príprava obsahuje

- Android 16: `compileSdk` aj `targetSdk` 36, AGP 8.10.1, Gradle 8.11.1, JDK 17.
- Verziu 1.0.3, kód verzie 4, existujúci identifikátor `com.neonblocks.classic`.
- Automatické zostavenie skúšobného APK a **nepodpísaného AAB na technickú kontrolu**. Tento AAB nie je pripravený na odoslanie do Google Play.
- Samostatné manuálne zostavenie podpisovaného AAB po doplnení upload kľúča. Žiadny kľúč ani heslo sa neukladajú do zdrojového kódu.
- Žiadne automatické publikovanie do Google Play, platba ani vytvorenie účtu.

## 1. Vývojársky účet — dokončí majiteľ

Otvoriť https://play.google.com/console/signup a zvoliť správny typ účtu. Osobný účet slúži jednotlivcovi; účet organizácie vyžaduje údaje skutočnej organizácie a spravidla D-U-N-S. Registrácia má jednorazový poplatok 25 USD. Majiteľ sám dokončí overenie identity, zmluvné podmienky a platbu.

## 2. Založenie hry a podklady

Pred prvým nahratím potvrdiť názov a nemenný identifikátor aplikácie. Pripraviť pôvodnú ikonu, grafiku obchodu, screenshoty, popis, kontaktný e-mail a cieľovú vekovú skupinu. Vyplniť hodnotenie obsahu a údaje o reklamách.

Zverejniť zásady ochrany súkromia na verejnej HTTPS stránke a pridať odkaz aj do hry. Údaje o bezpečnosti musia zodpovedať finálnej hre a reklamám: Firebase anonymná identita, verejná prezývka/krajina/skóre a údaje spracúvané reklamnými SDK. Netvrdiť, že hra nezbiera žiadne údaje. Prihlásenie do rebríčka je voliteľné; samotné hranie nepotrebuje Google účet.

## 3. Dohodnuté reklamy — nasledujúca implementácia

Vytvoriť AdMob účet, Android aplikáciu a interstitial reklamnú jednotku. Najprv používať výhradne testovacie reklamy. Pred produkčnými reklamami doplniť vlastné App ID / ad unit ID, nastavenie vekovej skupiny, UMP správu súhlasu a prístup k voľbám súkromia, keď ich UMP vyžaduje.

Reklama patrí výhradne do prirodzeného prechodu po konci hry. Nesmie sa spúšťať počas hrania, pri minimalizácii alebo pri návrate do menu. Nedostupná reklama ani sieťová chyba nesmie blokovať ďalšiu hru. Ukladanie hry a výsledkov nesmie závisieť od reklamy. Tento dokument neznamená, že uvedené reklamné funkcie už boli implementované.

Pre zmiešané publikum detí a starších hráčov pripraviť neutrálnu vekovú obrazovku a osobitný reklamný režim pre deti a neznámy vek. Použiť aktuálne verzie SDK schválené pre Google Play Families, obmedziť reklamný obsah a personalizáciu podľa pravidiel, nezačať reklamné požiadavky pred nastavením vekového režimu a oprávnenia na požiadavky. Pri celoplošných reklamách overiť aj požadovanú možnosť zatvorenia. Samostatne posúdiť verejné prezývky, anonymné identifikátory a publikovanie výsledkov detí; tento návrh zatiaľ nemení správanie rebríčka.

## 4. Podpisovanie AAB

Použiť samostatný **upload kľúč** a Play App Signing. Upload kľúč nenahrádza podpisový kľúč, ktorým Google podpíše aplikácie pre zariadenia. Existujúce skúšobné APK používa debug podpis; nemožno sľúbiť priamu aktualizáciu na Play verziu s iným podpisom. Uchovať bezpečnú zálohu upload keystore a hesiel mimo repozitára. Heslá neposielať v chate.

Do GitHub environment `google-play` sa neskôr vložia secrets:

- `NEON_UPLOAD_KEYSTORE_BASE64` — obsah upload keystore zakódovaný Base64; Base64 nie je šifrovanie.
- `NEON_UPLOAD_STORE_PASSWORD`
- `NEON_UPLOAD_KEY_ALIAS`
- `NEON_UPLOAD_KEY_PASSWORD`

Workflow **Build signed Google Play bundle** potom manuálne zostaví podpísaný AAB. Chýbajúce alebo neúplné údaje zostavenie zastavia. Do artefaktu sa vloží iba AAB; súkromný kľúč sa nepublikuje. Dočasný keystore sa po zostavení odstráni.

Pri lokálnom zostavení sa používajú `NEON_UPLOAD_STORE_FILE`, `NEON_UPLOAD_STORE_PASSWORD`, `NEON_UPLOAD_KEY_ALIAS` a `NEON_UPLOAD_KEY_PASSWORD`. `NEON_REQUIRE_UPLOAD_SIGNING=true` vynúti kompletné podpisovanie. Bez podpisovacích premenných je release AAB iba nepodpísanou technickou ukážkou. Každé ďalšie odoslanie do Google Play musí mať vyšší `versionCode`.

## 5. Testovanie a nábor cez TikTok

Najprv overiť hru v internom teste cez Google Play, vrátane Androidu 16, rôznych obrazoviek a tabletov, návratu z pozadia, obnovy stavu, rebríčka, súhlasov a reklamy po konci hry. Android 16 mení správanie okrajov obrazovky, navigácie späť a orientácie na veľkých zariadeniach; samotný úspešný build tieto scenáre neoveruje.

Pre nový osobný vývojársky účet je potrebný uzavretý test s najmenej **12 testermi zapojenými nepretržite aspoň 14 dní**, potom sa žiada o prístup do produkcie. Splnenie počtu a času samo osebe nezaručuje schválenie. Testeri majú hru reálne používať a poskytovať spätnú väzbu.

Na TikToku možno zdieľať odkaz na Google skupinu pridanú k uzavretému testu a odkaz na zapojenie do testovania. Záujemca sa najprv pridá do oprávnenej skupiny, potom sa rovnakým Google účtom zapojí do testu a nainštaluje hru cez Google Play. Samostatné stiahnutie APK mimo Play nenahrádza zapojenie do uzavretého testu. Nezverejňovať zoznam e-mailov testerov; zbierať iba potrebné údaje a dobrovoľnú spätnú väzbu.

## Oficiálne zdroje

- Registrácia: https://support.google.com/googleplay/android-developer/answer/6112435
- Testovanie: https://support.google.com/googleplay/android-developer/answer/14151465
- Nastavenie testov: https://support.google.com/googleplay/android-developer/answer/9845334
- Cieľová verzia Androidu: https://support.google.com/googleplay/android-developer/answer/11926878
- Obsah a súkromie: https://support.google.com/googleplay/android-developer/answer/9859455
- Podpisovanie: https://developer.android.com/studio/publish/app-signing
- Reklamy: https://developers.google.com/admob/android/interstitial
- Súhlas: https://developers.google.com/admob/android/privacy
- Google Play Families: https://support.google.com/googleplay/android-developer/answer/9893335
- Families a AdMob: https://support.google.com/admob/answer/6223431
