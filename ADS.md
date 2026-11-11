# Reklamy a súhlasy – prípravná verzia 1.0.3 (4)

Debug APK používa skutočné App ID pre načítanie vlastnej UMP správy, ale výhradne Google demo interstitial jednotku `ca-app-pub-3940256099942544/1033173712`. Produkčná jednotka `ca-app-pub-5170449946501129/5027170706` zostáva nepoužitá. Release neinicializuje MobileAds ani neposiela reklamné požiadavky. UMP je integrované aj v release pre kontrolu súhlasov dospelých.

Prvé spustenie: bez predvolenej voľby sa vyberá menej ako 6, 6–12, 13–17, 18+ alebo neuvedenie veku. Ukladá sa iba veková skupina do miestneho localStorage. Výber nie je súhlasom s reklamou. Táto prípravná verzia poskytuje mladším ako 18 rokov a pri neznámom veku miestnu hru bez reklamných a rebríčkových požiadaviek; nejde o definitívne rozhodnutie o monetizácii detského publika. Staré serverové údaje sa nemažú. Vek možno v tejto verzii opraviť vymazaním dát aplikácie, čo vymaže aj miestny postup; používateľský postup opravy veku zostáva na dopracovanie.

Dospelí: UMP 4.0.0 kontroluje stav pri každom spustení aplikácie, zobrazí požadovaný formulár a v menu Súkromie sprístupní Nastavenia reklám, ak to UMP vyžaduje. Pred inicializáciou reklamného SDK, načítaním aj zobrazením demo reklamy sa kontroluje `canRequestAds()`. Chyba konfigurácie/siete vypne reklamy pre dané spustenie aj pri starom súhlase. Čakanie na aktualizáciu stavu má limit 20 sekúnd; neskorá odpoveď už nezobrazí formulár. Rozhodovanie v otvorenom formulári nemá časový limit.

Reklama sa skúsi zobraziť iba pri skončení hry, ak je už načítaná. Nenačítaná reklama hru nezdrží a nezobrazí sa dodatočne. Návrat do menu príležitosť ruší. Nie sú bannery ani reklamy počas hrania alebo po pauze. Demo požiadavky naďalej používajú konzervatívne child-directed/under-age nastavenia, hodnotenie G a odstránené oprávnenie AD_ID.

## Dokončenie v AdMob

1. V aplikácii s App ID `ca-app-pub-5170449946501129~5808935188` otvoriť Privacy & messaging a pripraviť príslušné regionálne správy podľa výslednej prevádzky.
2. Doplniť finálnu verejnú URL zásad súkromia, príjemcov a voľby podľa skutočného používania. Súhlas nesmie byť podmienkou hrania.
3. Po zverejnení správy reštartovať testovaciu aplikáciu a overiť formulár, odmietnutie, zmenu volieb a hranie bez internetu. Demo reklama nemusí byť dostupná, kým UMP konfigurácia nie je pripravená.
4. Pre testovanie regiónov použiť oficiálne testovacie zariadenie UMP; v zdrojovom kóde nie je vynútená geografia ani vymyslený identifikátor zariadenia.

Pred ostrými reklamami zostáva overenie na zariadení, finálne zásady, bezpečné vymazanie identity a skóre, retenčné lehoty, Families/Data safety a rozhodnutie o detskom rebríčku/reklamách. Aktivácia produkčnej jednotky musí byť samostatná zmena. Existujúce skóre sa bez súhlasu nevymaže.

Oficiálny postup UMP: https://developers.google.com/admob/android/privacy.