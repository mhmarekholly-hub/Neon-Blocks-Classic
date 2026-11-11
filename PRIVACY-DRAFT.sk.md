# Zásady súkromia – stav pred zverejnením

Majiteľ potvrdil meno Marek Hollý, Slovensko, kontakt studioneonblocks@gmail.com a uchovávanie výsledkov do vymazania hráčom. Značka v bežnej obrazovke hry je Neon Blocks Studio.

Text pre testovaciu verziu 1.0.7 je pripravený v docs/privacy/index.html a identická kópia je zabalená v app/src/main/assets/privacy-policy.html. Pokrýva slovenčinu a angličtinu. Verejná webová adresa ešte nie je zverejnená. Opisuje pripravované používateľské vymazanie, preto sa má aktivovať až spolu s overenými pravidlami Firebase.

Pred zverejnením:

1. Overiť testy vlastníctva a mazania v lokálnych emulátoroch CI.
2. Skontrolovať a zverejniť pravidlá, ktoré dovoľujú vymazať len vlastné skóre v scores a scores_v2. Publikovanie pravidiel samo záznamy nemaže.
3. Overiť potvrdenie, úspech a chybu vymazania na vlastnom testovacom profile so súhlasom jeho vlastníka. Nemažeme cudzie ani reálne výsledky na skúšku.
4. Zverejniť HTML na stabilnej verejnej URL bez prihlásenia. Nepoužívať odkaz na editor repozitára ani PDF. Doplniť URL do Google Play a AdMob.
5. V AdMob Privacy & messaging vytvoriť správu pre príslušné regióny, priradiť správne App ID, vyplniť URL a overiť voľby v zariadení. Na tomto pracovnom počítači je apps.admob.com blokované sieťou; konfiguráciu musí dokončiť majiteľ v dostupnom prostredí.
6. Pred produkčnými reklamami aktualizovať text podľa skutočnej prevádzky a vyplniť Families a Data safety. Produkčná reklamná jednotka zostáva nepoužitá.

Žiadosť o vymazanie je lokálne potvrdená. Aplikácia počká na rozbehnuté odoslania, atomicky vymaže iba svoje dve serverové skóre a potom odstráni Firebase Auth identitu. Pri zlyhaní zostávajú obnovovacie údaje zachované; lokálna hra a vek/jazyk zostávajú. Súbežné vytváranie Auth identity je zjednotené do jedného požiadavkového procesu. Neúspešné vymazanie blokuje automatické obnovenie profilu až do opakovania pokusu.

Pravidlá sú prototyp určený na kontrolu pred širokým sprístupnením; testy nepokrývajú všetky možné formy zneužitia. Skóre zostáva údajom zasielaným klientom, nie serverom overeným výsledkom.