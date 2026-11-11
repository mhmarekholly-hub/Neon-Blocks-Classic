# Neon Blocks Classic – návrh zásad ochrany súkromia

Pracovný návrh k 11. 11. 2026. Nie je určený na zverejnenie: treba dokončiť kontaktné náležitosti, právne základy a lehoty uchovávania; výber veku a integrácia UMP sú pripravené na skúšku; overené vymazanie údajov zatiaľ nie je implementované.

## Kontakt

Hra: Neon Blocks Classic (`com.neonblocks.classic`).

Kontakt pre otázky o súkromí: **studioneonblocks@gmail.com**.

Prevádzkovateľ: **Marek Hollý, Slovensko**. Totožnosť a krajinu potvrdil majiteľ; ďalšie potrebné kontaktné náležitosti treba preveriť pred zverejnením.

## Údaje uložené v zariadení

Hra ukladá rozhraním WebView localStorage rozhraný herný stav, najlepšie skóre, jazyk a nastavenie zvuku. Pri použití rebríčka ukladá aj zvolenú prezývku, kód krajiny, voľbu účasti a prihlasovací obnovovací token. Herný stav zostáva v zariadení; rebríček používa internet.

Vymazanie dát aplikácie alebo jej odinštalovanie odstráni miestne údaje. Samo osebe neodstráni záznamy rebríčka ani identitu vo Firebase a môže zrušiť možnosť preukázať vlastníctvo pôvodného záznamu.

## Online rebríček

Pri otvorení alebo obnovení rebríčka aktuálna verzia vytvára alebo obnovuje pseudonymnú identitu cez Firebase Authentication aj bez prihlásenia e-mailom. Technické identifikátory a sieťové údaje preto nemožno označovať za úplne anonymné.

Ak sa hráč rozhodne zapojiť, po skončení hry sa do Cloud Firestore odošle jeho prezývka, zvolený dvojpísmenový kód krajiny a najlepšie skóre, priradené k identifikátoru Firebase. Krajina sa zadáva ručne; hra nezisťuje GPS polohu. Najlepších 20 výsledkov je verejne viditeľných. Hráč nemá používať skutočné meno ani kontaktné údaje.

Služby Firebase prevádzkuje Google. Pri poskytovaní a zabezpečení služby môže spracúvať technické údaje vrátane IP adresy. Podrobnosti: https://firebase.google.com/support/privacy a https://policies.google.com/privacy.

## Reklamy

Aktuálne skúšobné APK obsahuje Google Mobile Ads SDK a používa výhradne Google demo reklamné identifikátory. Testovacie reklamy nie sú vyhlásením, že SDK nespracúva technické alebo sieťové údaje. Požiadavky používajú detské nastavenia, obmedzenie obsahu G a aplikácia odstraňuje oprávnenie AD_ID. Release kód explicitne neinicializuje reklamy ani neposiela reklamné požiadavky.

Produkčné reklamy sú vypnuté. Pred ich zapnutím treba tento text aktualizovať podľa výsledného správania SDK, vekových obmedzení a regionálnych súhlasov. Hra má zobrazovať celoplošnú reklamu iba po skončení hry.

## Deti

Zamýšľané publikum zahŕňa deti od 6 rokov aj starších hráčov. Pripravovaná verzia ponúka výber vekovej skupiny bez predvoľby. Ukladá iba skupinu v zariadení, nie dátum narodenia. Hráčom do 18 rokov a pri neuvedenom veku neposiela reklamné ani rebríčkové požiadavky. Staršie serverové záznamy tým nevymaže. Pre dospelých je integrovaná správa súhlasov UMP; jej nastavenie v AdMob a overenie formulárov zostáva pred verejným vydaním dokončiť. Tieto zásady samy osebe nie sú rodičovským súhlasom.

## Vymazanie, uchovávanie a práva

Otázky a žiadosti možno zaslať na studioneonblocks@gmail.com. Zatiaľ nie je implementované používateľské vymazanie serverového záznamu ani overený postup overenia vlastníka pseudonymnej identity. Verejná prezývka sama osebe nestačí na overenie vlastníctva.

Pred zverejnením musí prevádzkovateľ potvrdiť účely a právne základy spracúvania, príjemcov a prípadné prenosy údajov, konkrétne lehoty uchovávania vrátane záloh, postup vybavenia žiadostí a uplatniteľné práva vrátane podania sťažnosti dozornému orgánu. Nie je nastavené automatické časové mazanie skóre; odinštalovanie ho nevyvolá. Existujúce staré skóre nebolo zmazané.

## Kontrola pred zverejnením

- Dokončiť kontaktné náležitosti prevádzkovateľa a doplniť vyššie uvedené chýbajúce údaje.
- Doplniť a otestovať vekovú obrazovku, detský režim rebríčka a reklamné súhlasy.
- Zaviesť bezpečné vymazanie identity aj skóre a určiť retenčné lehoty.
- Porovnať text s finálnym vydávaným APK a s formulárom Data safety.
- Zverejniť finálny text na stabilnej verejnej webovej adrese a pridať odkaz do hry aj Google Play.

Podklady pre dokončenie: https://support.google.com/googleplay/android-developer/answer/10144311 a https://support.google.com/admob/answer/6223431.
