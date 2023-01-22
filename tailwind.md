# A Tailwind CSS konfigurációja react alkalmazásban

Két fajta react alkalmazásban nézzük meg a Tailwind beállítását. Az egyik a klasszikus create-react-app paranccsal létrehozott, a másik pedig a VITE tool segítségével létrehozott react alkalmazás lesz. A Tailwind nem más mint egy CSS framework (hasonlóan a Bootstraphez), viszont képes arra, hogy a lefordított alkalmazásunkba csak azokat a stílusokat tegye bele, amelyeket ténylegesen használunk is, ezáltal csökkentve az oldalunk letöltési idejét.

## Hagyományos react alkalmazás Tailwind CSS-el

Alakítsuk ki a kívánt mappaszerkezetet, nyissunk terminált a mappához, amelybe telepíteni kívánjuk az alkalmazást.
 - Adjuk ki a terminálban az **npx create-react-app .** parancsot
 - Keressük fel a Tailwind oldalát: <a href="http://tailwindcss.com/" target="_blank">Tailwind CSS</a>
 - A telepítés lépései itt olvashatóak:<a href="https://tailwindcss.com/docs/installation/using-postcss" target="_blank">Tailwind telepítés</a>. 
 
 Nézzük mit is kell csinálni:
 - Adjuk ki a következő két parancsot:**npm install -D tailwindcss postcss autoprefixer** majd **npx tailwindcss init**
 - 
  
   


