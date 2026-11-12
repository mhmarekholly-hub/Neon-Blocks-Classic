# Zásady súkromia – stav pred zverejnením

Majiteľ potvrdil meno Marek Hollý, Slovensko, kontakt studioneonblocks@gmail.com a uchovávanie výsledkov do vymazania hráčom. Značka v bežnej obrazovke hry je Neon Blocks Studio.

Text pre testovaciu verziu 1.0.8 je pripravený v docs/privacy/index.html a identická kópia je zabalená v app/src/main/assets/privacy-policy.html. Pokrýva slovenčinu a angličtinu. Verejná webová adresa: https://mhmarekholly-hub.github.io/Neon-Blocks-Classic/privacy/ (zverejnená a overená bez prihlásenia 11. 11. 2026). Opisuje pripravované používateľské vymazanie, pravidlá Firebase už boli aktivované; verejná stránka je sprístupnená cez GitHub Pages.

Pred zverejnením:

1. Overiť testy vlastníctva a mazania v lokálnych emulátoroch CI.
2. HOTOVO 11. 11. 2026: pravidlá vlastného vymazania v scores a scores_v2 boli publikované. Živý zdroj sa zhoduje s otestovanými pravidlami po odhliadnutí od komentárov a medzier. Pôvodná verzia je zálohovaná v outputs/Firebase-rules-before-owner-delete.rules. Publikovanie pravidiel samo záznamy nemaže.
3. Overiť potvrdenie, úspech a chybu vymazania na vlastnom testovacom profile so súhlasom jeho vlastníka. Nemažeme cudzie ani reálne výsledky na skúšku.
4. HOTOVO: HTML je verejne dostupné cez HTTPS bez prihlásenia. Doplniť URL do Google Play a AdMob. Zdroj Pages: feature/google-play-preparation, priečinok /docs; pred zmazaním tejto vetvy po zlúčení prepnúť Pages na main /docs.
5. V AdMob Privacy & messaging vytvoriť správu pre príslušné regióny, priradiť správne App ID, vyplniť URL a overiť voľby v zariadení. Na tomto pracovnom počítači je apps.admob.com blokované sieťou; konfiguráciu musí dokončiť majiteľ v dostupnom prostredí.
6. Pred produkčnými reklamami aktualizovať text podľa skutočnej prevádzky a vyplniť Families a Data safety. Produkčná reklamná jednotka zostáva nepoužitá.

Žiadosť o vymazanie je lokálne potvrdená. Aplikácia počká na rozbehnuté odoslania, atomicky vymaže iba svoje dve serverové skóre a potom odstráni Firebase Auth identitu. Pri zlyhaní zostávajú obnovovacie údaje zachované; lokálna hra a vek/jazyk zostávajú. Súbežné vytváranie Auth identity je zjednotené do jedného požiadavkového procesu. Neúspešné vymazanie blokuje automatické obnovenie profilu až do opakovania pokusu.

Pravidlá sú prototyp určený na kontrolu pred širokým sprístupnením; testy nepokrývajú všetky možné formy zneužitia. Skóre zostáva údajom zasielaným klientom, nie serverom overeným výsledkom.
Rebríček je na výslovnú požiadavku majiteľa dostupný všetkým vekovým skupinám rovnako, s dobrovoľným zapojením. Vekové nastavenia reklám zostávajú samostatné. Pred verejným vydaním treba overiť požiadavky na spracúvanie údajov detí a prípadný rodičovský súhlas; táto úprava sama o sebe nepredstavuje potvrdenie právneho súladu.
