# Frontend fejlesztés (ReactJS)

A natív javascripttel végzett programozás nem egyszerű, és ha sok elemet kell használni, akkor nagyon gyorsan káosz alakul ki. Szinte minden programozási nyelvnél megjelenik az igény, hogy a feladat elemei komponensekre kellene bontani. Natív Javascripttel ez nehéz, ezért az idők folyamán több library, valamint framework is született arra, hogy a webfejlesztés során könnyebben lehessen komponenseket létrehozni. 

A továbbiakban a React libraryval fogunk foglalkozni. 
A natív Javascript esetében a kódunk procedurális, míg a React esetében deklaratív.

### Natív JS-el létrehozott gomb
```js
const btn=document.createElement('button');
btn.onclick=function(){
    alert('JS button');
}

btn.textContent='JS Gomb';
document.getElementById('js-button-container').appendChild(btn);
```
### React segítségével létrehozott gomb

```js
const reactGomb=React.createElement('button',{
    onClick:function(){
        alert('React button');
    }
},"React gomb");

ReactDOM.render(reactGomb,document.getElementById('react-button-container'));
```
### Hozzuk működésbe!

Először is kell egy HTML oldal. A HTML oldalban be kell majd tölteni a React könyvtárait , illetve betöltünk Bootstrap-et is, hogy a későbbi példákban tudjunk könnyedén stílusokat használni.
```html
<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8"> 
    <title>React bemutatás</title>
</head>
<body>
    <h2>Natív:</h2>
    <div id='js-button-container'></div>
    <h2>React:</h2>
    <div id='react-button-container'></div>

    
    <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <script src="app.js"></script>
</body>
</html>
```
A két div elem két belépési pontot jelent, az egyikhez a hagyományos, natív kódot rendeljük, a másikhoz a React kódot. A kódot egy **app.js** fájlba tegyük bele.

```js
const btn=document.createElement('button');
btn.onclick=function(){
    alert('Js button');
}

btn.textContent='Js Gomb';
document.getElementById('js-button-container').appendChild(btn);

//React

const reactGomb=React.createElement('button',{
    onClick:function(){
        alert('React button');
    }
},"React gomb");

ReactDOM.render(reactGomb,document.getElementById('react-button-container'));

```
A React.createElement három paramétert vár. Az első, hogy milyen elemet szeretnénk létrehozni, ez most **button**. A második paraméter az elem összes általunk megadott tulajdonságát tartalmazza, objektumként kell megadni, azaz minden amit itt átadunk azt {} zárójelek közé kell tenni. Itt most csak az **onClick** eseményhez adunk meg egy függvényt. A harmadik paraméter ennek az elemnek az összes gyermek eleme (ha van). Itt most gyerek elemként a **React gomb** szöveg szerepel.

Az elemet a ReactDOM.render() függvény fogja renderelni, ez két paramétert vár, az egyik az elem, a másik pedig egy referencia arra a div elemre, ahová be akarjuk "kötni" ezt az elemet, ezt adja a **getElementById('react-button-container')**


## JSX szintaxis

A JSX szintaxis jelentősen képes megkönnyíteni a React-el végzett fejlesztést. Probléma viszont, hogy a böngészők nem ismerik ezt a szintaxist, ezért egy fordító segítségével le kell a .jsx szintakszissal írt kódokat fordítani a böngésző számára értelmezhető formára. Ez a fordító a Babel. A Babel-t hozzá lehet adni a projekthez, ami automatikusan átfordítja majd a .jsx-et .js-re.

Inicializáljunk egy projektet:
```js
npm init -y
```

A Babel telepítése  a projektbe:
```js
npm install babel-cli@6 babel-preset-react-app@3
```
A telepítést követően a package.json-ba tegyük be a következő sort a scripts-be:
```js
"dev":"npx babel --watch src --out-dir . --presets react-app/prod" 
```
Ezután az **npm run dev** parancs hatására a Babel fut és a .jsx fájl mentésekor lefordítja ezt .js-re.

# Create react app használata
A React fejlesztői nem csak a React könyvtárakat, hanem egy fejlesztői környezetet is a rendelkezésünkre bocsátanak Single Page App-ok készítéséhez. Az SPA alkalmazások esetében csak egy oldalletöltés történik, ha az alkalmazásnak valamilyen adatra van szüksége, akkor AJAX kérések formájában szerzi be a szükséges adatokat, JSON formátumban (pl.fetch).

## Készítsünk egy ilyen alkalmazást!
Először is készítsünk az alkalmazásnak egy új mappát, majd adjuk ki az **npx create-react-app .** parancsot. A parancs végi **.** fontos, mert akkor az aktuális mappába fog kerülni az alkalmazás. Ha a parancsot így adjuk ki: **npx create-react-app ujapp** akkor létre fog jönni egy új mappa ujapp néven, és abba kerülnek az app fájljai.

## Az app szerkezete
A public mappában találjuk az index.html fájlt. Ebben találunk egy DIV elemet root id-vel, ez az app belépési pontja, minden az app által létrehozott elem ennek a gyerek eleme lesz majd. A webszerver alaphelyzetben ezt a fájlt fogja kiszolgálni.

A SRC mappában találjuk az index.js-t ebben van a REACTDOM.Render() függvényhívás, amely az App komponenst kapcsolja a root azonosítójú belépési ponthoz.
Ugyanebben a mappában van App.js, amely az app képernyőn megjelenő tartalmát állítja elő. Természetesen további saját komponensek is létrehozhatóak.
Az órai példát tovább bővítve (vagy akár újat készítve) készítsünk egy legördülő menüt, ez fogja beállítani a lista méretét.
Ez önálló komponens lesz.
A komponensek a components mappába kerülnek, ha még nincs ilyen, akkor létre kell hozni.

Az App komponensünkbe kell egy újabb state változó, ebben tároljuk majd a kívánt listaméretet. Ezt most az 5 értékkel inicializáljuk.
A változó a listaMeret, a beállító függvény a setListaMeret.
```js
function App() {
  const [listaMeret,setListaMeret]=useState(5);
  const [lista,setLista]=useState([]);
  ...
```
Hozzunk létre egy Valaszto.js fájlt a components mappában. Kerüljük az ékezetes betűket a fájlnévben. 
A kiinduló állapot:
```js
function Valaszto(){
    return (
        <div>
                                    
        </div>
    );
}

export default Valaszto;
```
Probléma, hogy ebből a komponensből közvetlenül nem lehet hívni a listaMeret beállító függvényét, ahhoz hogy ezt meg lehessen tenni, át kell adni azt. Látszik, hogy a legördülő menü onChange eseményéhez kötjük a listaméret beállítását, az átadott érték az aktuálisan kiválasztott lesz.
A teljes Valaszto.js:
```js
function Valaszto({setListaMeret}){
    return (
        <div>
            
            <select name="listaMeret" onChange={(e)=>setListaMeret(e.target.value)}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="40">40</option>
                <option value="60">60</option>
            </select>
            
        </div>
    );
}

export default Valaszto;
```
Hozzunk létre egy komponenst Listaelem.js néven, amely a lista egy elemét jeleníti majd meg, melynek a neve Listaelem. A komponens a lista egy elemét kapja meg.
```js
function Listaelem({elem}){
    return (
        <div>
            <h2>{elem.name.first},{elem.name.last}</h2>
            
        </div>
    );
}
export default Listaelem;
```
Hozzunk létre egy komponenst Lista.js néven  amely a listát létrehozza. Itt be kell importálni a Listaelem komponensünket. A komponensa teljes listát kapja meg, ezt dolgozzuk fel a map függvénnyel.
```js
import Listaelem from "./Listaelem";

function Lista({lista}){
    return (
        <div>
            {lista.map((elem)=>(<Listaelem elem={elem} />))}
        </div>
    );

}
export default Lista;
```
Az App komponensünk most így néz ki:
```js


import Valaszto from './components/Valaszto'
import {useState,useEffect} from 'react';
import Lista from './components/Lista'

function App() {
  const [listaMeret,setListaMeret]=useState(5);
  const [lista,setLista]=useState([]);
 
  useEffect(()=>{
    fetch(`https://randomuser.me/api/?results=${listaMeret}`)
    .then(res=>res.json())
    .then(adat=>{
      setLista(adat.results);
      console.log(adat);
      })
    .catch(console.log)
  },[listaMeret]);

  return (
    <div>
      <Valaszto setListaMeret={setListaMeret} />
      <Lista lista={lista} />
    </div>
  );
}

export default App;
```
Vegyük észre, hogy a useEffect-nél a [] közé megadtuk a listaMeret változót, ezáltal minden alkalommal, amikor a listaMeret változik, a fetch újra lekéri a megfelelő adatokat.
## Jelenítsük meg a lista részleteit!
A névsor megjelenik, azonban az egyes emberek adatai még nem. Nem szeretnénk azonban, hogy a névsor minden emberének adatai megjelenjenek, hanem csak annak az embernek az adatai jelenjenek meg, akire a listában rákattintottak. Ehhez kell egy új komponens.
Hozzunk létre Listaelemdetail.js néven egy új komponenst, ami így fog kinézni:
```js
function Listaelemdetail({elem}){
    return (
        <div>
            <h3>Age:{elem.dob.age}</h3>
            <h4>Country:{elem.location.country}</h4>
            <h4>City:{elem.location.city}</h4>
            <h4>Street:{elem.location.street.name},{elem.location.street.number}</h4>
            <img src={elem.picture.large}></img>
            
        </div>
    );
}
export default Listaelemdetail;
```
A működése egyszerű, a komponens megkapja a listaelemet, és abból kinyeri az információkat.

Módosítsuk a Listaelem komponenst, hogy meg tudja jeleníteni a Listaelemdetail-t.
Először importáljuk be a Listaelemdetail-t
```js
import Listaelemdetail from './Listaelemdetail';
```
Kell egy state, amellyel jelezzük, hogy megjelenjenek-e a részletek, ezt false értékkel inicializáljuk.
```js
 const [isDetail,setDetail]=useState(false);
```
A DIV elem onClick eseményéhez rendeljük a state változtatását:
```js
onClick={()=>{setDetail(!isDetail)}}
```
Ezt az isDetail értéket figyeljük. Ha true, akkor megjelenítjük a részleteket, ha false akkor nem.
```js
 {isDetail ? <div><h2>{elem.name.first},{elem.name.last}</h2><Listaelemdetail elem={elem}/></div>  : <h2>{elem.name.first},{elem.name.last}</h2> }
```
A ListaElem komponensünk most így néz ki:
```js
import {useState} from 'react';
import Listaelemdetail from './Listaelemdetail';

function Listaelem({elem}){
    const [isDetail,setDetail]=useState(false);
    return (
        <div onClick={()=>{setDetail(!isDetail)}}>

            {isDetail ? <div><h2>{elem.name.first},{elem.name.last}</h2><Listaelemdetail elem={elem}/></div>  : <h2>{elem.name.first},{elem.name.last}</h2> }

            
            
        </div>
    );
}
export default Listaelem;
```
## Bootstrap használata React alkalmazásokban.

Telepítsük a Bootstrap-et az alkalmazásunkhoz:
```js
npm install --save bootstrap
```
Az index.js-be tegyük be a következőt:
```js
import 'bootstrap/dist/css/bootstrap.css';
```
Innentől kezdve használhatjuk a Bootstrap stílusait az alkalmazásunkban, arra kell ügyelni, hogy class="stilus" helyett className="stilus" amit használni kell.

Nem csak stílusokat, hanem Bootstrap ikonokat is használhatunk, ebben az esetben az index.html fejlécébe tegyük a következőt:
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.1/font/bootstrap-icons.css">
```


