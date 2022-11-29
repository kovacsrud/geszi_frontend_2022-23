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
## JSON server telepítése

Hozzunk létre egy mappát a json servernek és nyissunk hozzá egy terminált.

Inicializálunk egy projektet a következő paranccsal: **npm init -y**

Telepítjük a JSON Server alkalmazást: **npm install json-server**

Nyissuk meg a package.json-t keressük meg a scripts objektumot. A test kulcs és a hozzá tartozó érték törölhető.

Írjuk be a scripts objektumba: "start": "json-server --watch db.json --port 8000"

Így kell most a scripts objektumnak kinéznie:
```js
"scripts": {
    "start": "json-server --watch db.json --port 8000"
  }
```
Készítsünk egy db.json nevű fájlt, ez fogja betölteni az adatbázis szerepét, a server ennek a fájlnak a tartalmát fogja írni ill. olvasni.
A db.json :
```js
{
	  "autok": [
	    {
	      "id": 1,
	      "marka": "Skoda",
	      "tipus": "Fabia",
	      "rendszam": "REK-121",
	      "kor": 19
	    },
	    {
	      "id": 2,
	      "marka": "Suzuki",
	      "tipus": "Swift",
	      "rendszam": "KON-321",
	      "kor": 11
	    },
	    {
	      "id": 3,
	      "marka": "Opel",
	      "tipus": "Astra",
	      "rendszam": "LET-996",
	      "kor": 8
	    },
	    {
	      "marka": "Dacia",
	      "tipus": "Sandero",
	      "rendszam": "GLK-556",
	      "kor": 8,
	      "id": 4
	    },
	    {
	      "marka": "Dacia",
	      "tipus": "Logan",
	      "rendszam": "KLK-556",
	      "kor": 6,
	      "id": 5
	    }
	  ]
	}
```

A végpontok tesztelését valamilyen REST API eszköz segítségével (pl. POSTMAN, INSOMNIA, THUNDER CLIENT) 

## Egyszerű SQL adatbázisos backend készítése

Inicializálunk egy projektet: **npm init -y**

Telepítjük a szükséges csomagokat: **npm install express sqlite3**

A könnyebb kezelhetősége miatt telepítjük a nodemon-t: **npm install --save-dev nodemon**

Ne feledjük hozzáadni az adatbázis fájl a projekthez!

A package.json-ba ezt tegyük a scripts-hez:
```js
"scripts": {
   "start": "nodemon index.js"
  }
```

A kiszolgáló kódja a következő:
```js
//csomagok betöltése
const express=require('express');
const cors=require('cors');
const app=express();
const sqlite3=require('sqlite3');
//adatbázisfájl kiválasztása
const db=new sqlite3.Database('./kutyak.db');

//json adatok fogadásához szükséges
app.use(express.json());
//url-ben érkező adatok feldolgozásához szükséges
app.use(express.urlencoded({extended:true}));
//Cors- Crossorigin Resource Sharing problémamentes kezeléséhez szükséges. Ennek hiányában a böngésző letiltja a nem azonos
//eredettel rendelkező kéréseket.
app.use(cors());

//a kiszolgáló a 8000-es porton figyeli a kéréseket
app.listen(8000,()=>{console.log("Fut a szerver")});

//a rest api kiszolgálónk végpontjai
app.get('/',(req,res)=>{
    res.send("Kutya adatbázis");
});

//adatlekérés kiszolgálása
app.get('/kutyafajtak',(req,res)=>{
    db.all("select * from kutyafajtak",(err,rows)=>{
        if(err){
            res.status(400).send(err);
        } else {
            res.status(200).json(rows);
        }
    })
});

//érkező adat fogadása, feldolgozása, adatbázisba illesztése
app.post('/kutyafajtak',(req,res)=>{
    console.log(req.body);
    db.run("insert into kutyafajtak (nev,eredetinev) values(?,?)"
    ,[req.body.nev,req.body.eredetinev],(err)=>{
        if(err){
            res.status(400).send(err);
        } else {
            res.status(200).json({message:"Adat beszúrva!"})
        }
    })
})
```
## React frontend létrehozása a kutyás mini backendhez

Hozzunk létre egy mappát, és adjuk hozzá a kívánt munkaterülethez. Ezt követően nyissunk hozzá terminált, hogy ki tudjuk adni a szükséges parancsokat.

Hozzunk létre egy új React appot:
**npx create-react-app .** -Ezzel az aktuálisan beállított mappába kerül a react app.

### Az app megtisztítása
A telepítés után keressük meg a **public** mappát és nyissuk meg a benne lévő **index.html** fájlt. A fájl **header** részéhez adjuk hozzá a **bootstrap** hivatkozásait, hogy tudjuk használni a keretrendszer stílusait, komponenseit.
```html
 <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
 <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
```
Lépjünk át az **src** mappába. 
Az index.js-ből törölhető a reportwebvitals komponens importja és futtatása, de benne is hagyható. A reportwebvitals nélkül így néz ki az index.js:
```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

Nyissuk meg az **App.js** fájlt. Töröljünk ki belőle mindent, csak App() függvény maradjon a következő tartalommal.
```js
function App() {
	  return (
	    <div>         
	     <h1>Kutya frontend alkalmazás</h1>
	    </div>
	  );
	}
	
	export default App;
```
Ezzel van egy alap csupasz React alkalmazáunk, amelyet komponensek létrehozásával fogunk fejleszteni. Minden komponens a készülő weboldal valamely részletét fogja megvalósítani (fejléc, listák, navigáció, információ megjelenítése stb.)

### Header komponens
Hozzunk létre az alkalmazás gyökér könyvtárában egy **components** nevű mappát, ide kerülnek majd az egyes tartalmakat előállító komponensek. A **components** mappában hozzunk létre egy **Header.js** fájlt.
Az alap komponens így fog kinézni:
```js
function Header() {
	  return (
	    <div>Header</div>
	  )
	}
export default Header
```
A Visual Studio Code-ban érdemes feltelepíteni a **ES7+ React/Redux/React-Native snippets** nevű kiegészítőt, ugyanis ennek segítségével le tudjuk generálni az üres komponenst és nem kell annyit gépelnünk, valamint gépelési hibákat is meg tudunk előzni a használatával. A frissen létrehozott fájlba írjuk be az **rfce** karaktereket a beírás hatására feldob a kiegészító egy listát és a megegyező nevű listaelemre ENTER-t ütve máris kész az alap komponens.

Az előzőleg létrehozott Header egy egyszerű címet fog tartalmazni. Módosítsuk a következőre:
```js
function Header() {
	  return (
	    <h1>Kutyák adatbázis</h1>
	  )
	}
export default Header
```
Ezzel ez a komponens kész is a használatra. Menjünk vissza az App.js-be. A használathoz a Header komponenst be kell importálni, utána tudjuk használni.

Az importálást az App.js-be írt következő paranccsal végezzük: 
```js
import Header from "./components/Header";
```
A komponens útvonalának megadása mindig relatív az App.js-hez képest.
Az App.js render függvényében mostmár bárhol használhatjuk a Header kompnenst, mintha egy HTML tag lenne:
```js
import Kutyanevek from "./components/Kutyanevek";
import Header from "./components/Header";
		
	function App() {
	  return (
	    <div>
	      <Header />		      	     
	    </div>
	  );
	}
	
export default App;
```
### Adat átadása komponensnek

Mi van akkor, ha nem szeretnénk a komponensbe "beleégetni" a tartalmat? Kívülről átadhatunk adatot, nagyon hasonlóan ahhoz, ahogyan egy függvénynek adunk át adatot. Ebben az esetben az App.js-ben a Header-t így használjuk:
```js
<Header cim={"Kutyák adatbázis"} />
```
A **cim** egy változó, ezzel a névvel tudjuk az adatot elérni a Header-en belül.

A Header így módosul, hogy tudjuk fogadni a kapott adatot:
```js
function Header(props) {
	  return (
	    <h1>{props.cim}</h1>
	  )
	}
	
export default Header
```
A **props** egy olyan objektum, amelyet a React hoz létre automatikusan akkor, amikor a komponensnek valamilyen adatot adunk át. A fenti esetben a props objektumot így lehetne leírni:
```js
props={
  cim:"Kutyák adatbázis"	
}
```
Ha több adatot is átadunk, akkor értelemszerűen a props-ban több kulcs-érték pár van.

Elterjedt az a megoldás is, hogy az átküldött adatokat rögtön destruktúráljuk, ebben az esetben nem kell a props előtag.
Adat átvétele destruktúrálással:
```js
function Header({cim}) {
	  return (
	    <h1>{cim}</h1>
	  )
	}
export default Header
```
Tulajdonképpen a :
```js
const {cim}=props
```
destruktúrálást végeztük el, azaz a props objektum cim adattagját "kiemeltük" a cim változóba. 
A továbbiakban, amikor egy komponensnek adatot, vagy adatokat adunk át ugyanezt fogjuk csinálni.

## Navigációs komponens készítése

Minden webalkalmazás alkalmaz navigációt. Ennek megvalósítása nagyon sokféle lehet, kattintható képek, szövegek, menük stb. A React alkalmazások navigációja során gyakorlatilag komponensek között váltogatunk, hiszen oldalletöltés csak egyszer történik. 
Amennyiben React alkalmazásban szeretnénk navigációt megvalósítani, akkor fel kell telepítenünk a **react-router-dom** csomagot. A telepítés parancsa: **npm install react-router-dom**.

A komponensünk alapja a Bootstrap keretrendszer felhasználható komponensei közül a Navbar, annak is a legegyszerűbb verziója, aminek HTML kódja a következő:
```HTML
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Features</a>
        <a class="nav-link" href="#">Pricing</a>
        <a class="nav-link disabled">Disabled</a>
      </div>
    </div>
  </div>
</nav>
```
Ezt alakítjuk át úgy, hogy igazodjon az oldalunk igényeihez. Az **a** html elemeket **Link**-re fogjuk cserélni. A **Link** elemekkel az App.js ben definiált útvonalak valamelyikére tudunk navigálni.

Menjünk az App.js-be és importáljuk be a szükséges funkciókat, valamint hozzuk létre az útvonalakat!

Az importálás parancsa:
```js
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
```
Három útvonalat hozunk létre. Egy a főoldalnak ('/'), egyet a kutyafajták listájának ('/kutyafajtak'), egyet pedig az új kutyanév felvitelének ('/ujkutyafajta'). 

Hozzunk létre egy új komponenst a components **Fooldal.js** névvel, ez fogja képviselni a főoldalt, bár most nem teszünk bele különösebb tartalmat.
```js
function Fooldal() {
  return (
    <h2>Üdvözli az állatorvosi rendelő!</h2>
  )
}
	
export default Fooldal
```
Hozzuk létre az App.js-ben a navigációt. Az App.js így fog kinézni:
```js

import Header from "./components/Header";
import Fooldal from "./components/Fooldal";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Router>
        
        <Routes>
          <Route path="/" element={<Fooldal />} />
          <Route path="/kutyafajtak"   />
          <Route path="/ujkutyafajta"  />

        </Routes>
      </Router>
      
     
    </div>
  );
}

export default App;
Footer

```
Látszik, hogy a '/' útvonalhoz a Fooldal komponens tartozik, amit előzőleg beimportáltunk az App.js-be. A navigáció felépítése általánosságban a következő:
```js
 <Router>
        
        <Routes>
          <Route path="/" element={<Fooldal />} />
          <Route path="/utvonal1" element={<Komponens1 />} />
          <Route path="/utvonal2" element={<Komponens2 />} />
	  ...

        </Routes>
</Router>
```
A Routes tagon belül csak Route tagok lehetnek. A Router tagon belülre tehetünk olyan komponenseket, amelyek részt vesznek a navigációban, de külön útvonal nem tartozik hozzájuk.

Alakítsuk ki a Navbar komponenst! Az előbb létrehozott komponensben a **return** függvénybe másoljuk be azt a html kódot, amelyikkel megvalósítjuk a navigációt. Az a tageket Link re cseréljük, a class-okat nevezzük át className-re!

Importáljuk be a Link parancsot:
```js
import {Link} from 'react-router-dom';
```
Így fog kinézni a Navbar:
```js
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <h3>Rendelő</h3>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-	          controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link to='/' className="nav-link" >Főoldal</Link>
        <Link className="nav-link" >Kutyanevek</Link>
        <Link to='/kutyafajtak' className="nav-link" >Kutyafajták</Link>
        <Link to='/ujkutyafajta' className="nav-link" >Új fajta felvitele</Link>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar
```
Hozzuk létre a kutyafajták listáját megvalósító komponenseket! Az első egy adott fajta adatait megjelenítő komponens lesz, gyakorlatilag egy listaelem. Legyen a neve Kutyafajta.js. 
Kiinduló kódja:
```js
function Kutyafajta() {
  return (
    <div>Kutyafajta</p></div>
  )
}
	
export default Kutyafajta
```
Hozzunk létre egy KutyafajtaModosit.js komponenst is, ennek segítségével lehet majd módosítani egy kutyafajta nevét.
```js
function KutyfajtaModosit() {
  return (
    <div>KutyfajtaModosit</div>
  )
}

export default KutyfajtaModosit
```
Hozzunk létre egy harmadik komponenst, amelynek segítségével a módosítás megjelenítése ki-be kapcsolható Ez lesz a KutyafajtaRender.js. Ez a komponens feltételes renderelést alkalmaz majd, a fajta neve mindig megjelenik, a módosító komponens csak kattintás hatására.
```js
import Kutyafajta from "./Kutyafajta";
import KutyfajtaModosit from "./KutyfajtaModosit";
import {useState} from 'react';

function KutyafajtaRender({fajta}) {
    const[modosit,setModosit]=useState(false);
    const kapcsol=()=>{
        setModosit(prev=>!prev);
    }

  return (
    <div>
        {
            !modosit ? <Kutyafajta fajta={fajta} kapcsol={kapcsol} /> 
            :
            <div>
                <Kutyafajta fajta={fajta} kapcsol={kapcsol}/> 
                <KutyfajtaModosit fajta={fajta}/>
            </div>
        }
    </div>
  )
}

export default KutyafajtaRender;
```
A KutyafajtaRender tartalmaz egy logikai típusú state változót (modosit). Ennek értékétől függ, hogy a módosító komponens látszik vagy sem. Egy kapcsol nevű függvényt írtunk a változó értékének módosítására az egyszerűbb használat végett, ebben hívjuk meg a state beállító függvényét. Az értékadással a nem logikai műveletet felhsználva az ellenkezőjére tudjuk állítani a változó értékét, úgy mintha egy kapcsolót kapcsolgatnánk.

A Kutyafajta komponensnek két értéket adunk át, a listából értkező fajta objektumok, ami a fajta nevét, eredeti nevét, id-jét tartalmazza, valamint a kapcsol függvényt, amellyel ki-be kapcsolható a módosító komponens. A KutyafajtaModosit-nak csak a fajta adataira van szüksége.

Dolgozzuk ki a Kutyafajta komponenst is!

```js
function Kutyafajta({fajta,kapcsol}) {
  return (
    <div><p onClick={kapcsol}>{fajta.nev},{fajta.eredetinev}</p></div>
  )
}

export default Kutyafajta
```
Átvesszük a fajta objektumot, valamint a kapcsol függvényt, itt is destruktúrálást alkalmazva. Egy bekezdésben megjelenítjük a nev és az eredetinev adatmezőket. Természetesen ennek szebb HTML-kódot is lehet készíteni...

Ezek után csak az adatokat letöltő és a listát feldolgozó komponenst kell elkészíteni. A neve legyen Kutyafajtak.
```js
import {useState,useEffect} from 'react';
import KutyafajtaRender from './KutyafajtaRender';

function Kutyafajtak() {
    const[kutyafajtak,setKutyafajtak]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:8000/kutyafajtak')
        .then(res=>res.json())
        .then(adat=>setKutyafajtak(adat))
        .catch(err=>console.log(err));
    },[]);
  return (
    <div>
        {
            kutyafajtak.map((fajta,index)=>(<KutyafajtaRender key={index} fajta={fajta} />))
        }
    </div>
  )
}

export default Kutyafajtak;
```

A komponens egy kutyafajtak nevű state változót tartalmaz, ebbe tesszük majd a backendről letöltött adatokat. Alapértéke üres lista.
A komponens létrejöttekor automatikusan lefutó useEffect futtatja az API hívást, itt töltjük le  a fetch segítségével az adatokat, az API megfelelő végpontját ('/kutyafajtak') meghívva.
Ezt követően a 
```js
 kutyanfajtak.map((fajta,index)=>(<KutyafajtaRender key={index} fajta={fajta} />))
```
parancs megy végig a lista elemein és gyárt annyi példányt a KutyafajtaRender-ből, amennyi elem a listában van. A komponensnek szüksége van a key-re, amihez valami egyedi adatot kell rendelni. Ezt most a listaelemek indexe. Ezen kívül a fajta adatait tartalmazó objektumot adjuk át. 

## Az új kutyafajta felvitelét megvalósító komponens létrehozása

Ez a komponens egy formot fog megvalósítani, melynek elemeiben a szükséges adatokat megadhatjuk. A form beviteli mezőibe írt értékeket state változókban tároljuk, küldéskor ezeknek az értékét továbbítjuk a backend felé.
Az egyes beviteli mezők value értékéhez a state változók értékét rendeljük. A mezők változtatásakor az onChane-hez rendelt függvény mindig beállítja az adott state változóba a beviteli mező értékét.

```js
import {useState} from 'react';

function KutyafajtaForm() {
    const[nev,setNev]=useState("");
    const[eredetiNev,setEredetinev]=useState("");

    const adatKuldes=async (adat)=>{
        const response=await fetch('http://localhost:8000/kutyafajtak',{
            method:'POST',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(adat)
        });

        const valasz=await response.text();
        alert(valasz);

    }

    const onSubmit=(e)=>{
        e.preventDefault();
        adatKuldes({nev:nev,eredetinev:eredetiNev});
    }

  return (
    <div className="container">
       <form onSubmit={onSubmit}>
        <div className="mb-3">
            <label for="nev" className="form-label">Fajta neve:</label>
            <input type="text" value={nev} onChange={(e)=>setNev(e.target.value)} className="form-control" id="nev" />
        </div>
        <div className="mb-3">
            <label for="eredetinev" className="form-label">Fajta eredeti neve:</label>
            <input type="text" value={eredetiNev} onChange={(e)=>setEredetinev(e.target.value)} className="form-control" id="eredetinev" />
        </div>
        <button type="submit" className="btn btn-primary">Küldés</button>
       </form>
    </div>
  )
}

export default KutyafajtaForm;
```
A két state mellett két függvény is van. Az adatKuldes függvény valósítja meg az adatok továbbítását a backend felé egy fetch parancs futtatásával. Mivel adatküldésről van szó, a fetch-ben meg kell adni a küldés metódusát (method:"POST"), a szükséges fejlécet (headers:{'Content-type':'application/json'}), valamint a küldeni kívánt adatot (body:JSON.stringify(adat)).

Az adatKuldes függvényt az onSubmit függvény hívja meg, amelyet a form onSubmit eseményéhez rendelünk.

```js
 const onSubmit=(e)=>{
        e.preventDefault();
        adatKuldes({nev:nev,eredetinev:eredetiNev});
    }

```
Az onSubmit megkapja az e nevű event objektumot, majd az e.preventDefault() paranccsal megakadályozzuk, hogy oldalletöltést hajtson végre, ami egyébként a formok alapértelmezett viselkedése. Ezt követően hívja meg az onSubmit az adatKuldes függvényt.

Mostmás rendelkezésre állnak a szükséges függvények ahhoz hogy az App.js-ben kiegészítsük a navigációt.

```js
import Kutyafajtak from "./components/Kutyafajtak";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Fooldal from "./components/Fooldal";
import KutyafajtaForm from "./components/KutyafajtaForm";

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Fooldal />} />
          <Route path="/kutyafajtak" element={<Kutyafajtak />} />
	  <Route path="/ujkutyafajta" element={<KutyafajtaForm />} />

        </Routes>
      </Router>
      
     
    </div>
  );
}

export default App;

```
