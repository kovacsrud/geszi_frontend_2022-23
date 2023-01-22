# A Tailwind CSS konfigurációja react alkalmazásban

Két fajta react alkalmazásban nézzük meg a Tailwind beállítását. Az egyik a klasszikus create-react-app paranccsal létrehozott, a másik pedig a VITE tool segítségével létrehozott react alkalmazás lesz. A Tailwind nem más mint egy CSS framework (hasonlóan a Bootstraphez), viszont képes arra, hogy a lefordított alkalmazásunkba csak azokat a stílusokat tegye bele, amelyeket ténylegesen használunk is, ezáltal csökkentve az oldalunk letöltési idejét.

## Hagyományos react alkalmazás Tailwind CSS-el

Alakítsuk ki a kívánt mappaszerkezetet, nyissunk terminált a mappához, amelybe telepíteni kívánjuk az alkalmazást.
 - Adjuk ki a terminálban az **npx create-react-app .** parancsot
 - Keressük fel a Tailwind oldalát: <a href="http://tailwindcss.com/" target="_blank">Tailwind CSS</a>
 - A telepítés lépései itt olvashatóak:<a href="https://tailwindcss.com/docs/installation/using-postcss" target="_blank">Tailwind telepítés</a>. 
 
 Nézzük mit is kell csinálni:
 - Adjuk ki a következő két parancsot: **npm install -D tailwindcss postcss autoprefixer**  majd  **npx tailwindcss init**
 - Hozzunk létre egy **postcss.config.js** nevű fájlt
 - Ebbe a fájlba másoljuk be a következőket:
 
 ```js
 module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
```
 - Nyissuk meg a **tailwind.config.js** fájlt!
 - A content:[] sorba a szögletes zárójelek közé írjuk be:**"./src/**/*.{html,js}"**
 
 ```js
 /** @type {import('tailwindcss').Config} */
 module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

 ```
  - Nyissuk meg az **index.css** fájlt, töröljük a tartalmát, majd másoljuk bele a következőket:
  
  ```js
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```
   - Tisztítsuk ki a react appunkat a felesleges dolgoktól (index.js, app.js)
   - Teszteljük az alkalmazást a következő kóddal:

```js
import './App.css';

function App() {
  return (
    <div>
      <h1 className="text-5xl text-center font-bold">Tailwind CSS használata</h1>
      
    </div>
  );
}

export default App;
```
Ezt követően telepítjük a daisyui csomagot, amely sok előre gyártott elemet biztosít az oldal építéséhez (card, menük, form elemek stb.)
 - Töltsük be a csomag weboldalát:<a href="https://https://daisyui.com/" target="_blank">DaisyUI</a>
   


