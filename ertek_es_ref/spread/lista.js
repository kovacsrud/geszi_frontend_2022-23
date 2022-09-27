function veletlenSzam(min,max){
    return Math.floor(Math.random()*(max-min))+min;
}

class Szemely {
    constructor(vezeteknev,keresztnev,lakhely,szulIdo){
        this.vezeteknev=vezeteknev;
        this.keresztnev=keresztnev;
        this.lakhely=lakhely;
        this.szulIdo=szulIdo;

    }
}

let vezetekNevek=["Kiss","Kovács","Urbán","Lisztes","Majoros","Kertész"];
let keresztNevek=["Éva","Klára","János","Tamás","Dániel","Janka"];
let lakhelyek=["Gyula","Orosháza","Szeged","Győr","Nyíregyháza"];

let szemelyek=[];
let darab=100;

for (let i = 0; i < 100; i++) {
    let vezeteknev=vezetekNevek[veletlenSzam(0,vezetekNevek.length-1)];
    let keresztnev=keresztNevek[veletlenSzam(0,keresztNevek.length-1)];
    let lakhely=lakhelyek[veletlenSzam(0,lakhelyek.length-1)];
    let szulido=veletlenSzam(1920,2022);

    let  szemely=new Szemely(vezeteknev,keresztnev,lakhely,szulido);  
    szemelyek.push(szemely);
}

let root=document.getElementById('root');

for (let i = 0; i < szemelyek.length; i++) {
    let nevKontener=document.createElement('div');
    nevKontener.setAttribute('class','szemely');
    let szemelyNeve=document.createElement('p');
    
    szemelyNeve.textContent=szemelyek[i].vezeteknev+" "+szemelyek[i].keresztnev;
    nevKontener.appendChild(szemelyNeve);
    

    let ul=document.createElement('ul');
    let lakhelye=document.createElement('li');
    let szulideje=document.createElement('li');

    lakhelye.textContent=szemelyek[i].lakhely;
    szulideje.textContent=szemelyek[i].szulIdo;

    ul.appendChild(lakhelye);
    ul.appendChild(szulideje);

    nevKontener.appendChild(ul);

    root.appendChild(nevKontener);
        
}



console.log(szemelyek);