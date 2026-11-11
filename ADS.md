# Reklamy – skúšobná integrácia

Debug APK používa výhradne Google demo App ID a demo interstitial jednotku. Reklama sa skúsi zobraziť iba pri skončení hry, ak je už načítaná. Nenačítaná reklama hru nezdrží a nezobrazí sa dodatočne. Po návrate do menu sa príležitosť ruší. Nie sú bannery ani reklamy počas hrania.

Release SDK neinicializuje a neposiela reklamné požiadavky. Nemá prepínač na náhodné zapnutie ostrých reklám. Manifest obsahuje potvrdené produkčné App ID `ca-app-pub-5170449946501129~5808935188`; rezervovaná produkčná jednotka je `ca-app-pub-5170449946501129/5027170706` a zatiaľ sa nepoužíva.

Demo požiadavky majú zapnuté child-directed a under-age-of-consent nastavenia, maximálne hodnotenie G a odstránené oprávnenie AD_ID. To samo o sebe neznamená pripravenosť na verejné vydanie pre deti.

Pred ostrou prevádzkou treba doplniť neutrálnu vekovú obrazovku a pravidlá pre neznámy vek, UMP podľa regiónu vrátane zmeny súhlasu, verejné zásady ochrany súkromia, posúdenie detských prezývok/rebríčka a vyhlásenia Families/Data safety. Potom možno samostatnou kontrolovanou zmenou zapnúť produkčnú jednotku. V AdMob musí byť aplikácia pripravená na zobrazovanie reklám.

Overenie na telefóne: dokončiť hru s internetom (demo reklama), zavrieť ju, spustiť novú hru, skúsiť hranie bez internetu a minimalizáciu. Emulátor alebo telefón musí mať služby Google Play. Prvá krátka hra môže skončiť skôr, ako sa reklama načíta.