class Auto{
    constructor(marka,tipus,gyartasiEv){
        this.marka=marka,
        this.tipus=tipus,
        this.gyartasiEv=gyartasiEv
    }
    kor(){
        return 2022-this.gyartasiEv;
    }
}

let opel=new Auto("Opel","Astra",2012);

console.log(opel.kor());

let fiat={
    marka:"Fiat",
    tipus:"Bravo",
    gyartasiEv:2020,
    kor() {
        return 2022-this.gyartasiEv;
    }
}

console.log(fiat.kor());

//destruktúrálás


const {marka,tipus}=fiat;

console.log("Márka:"+marka+" Tipus:"+tipus);

const {marka:m,tipus:t}=fiat;

console.log("Márka:"+m+" Típus"+t);

const [elso,masodik,...rest]=szamok;

console.log(elso,masodik);
console.log(...rest);