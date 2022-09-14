//Hagyományos függvény
function osszead(a,b=10,c=1){
    return a+b+c;
}

console.log("Összeg:"+osszead(10,20,30));
console.log("Alap:"+osszead(20));

//Arrow function
const osszead_=(a,b,c)=>{
    return a+b+c;
}

console.log("Összeg:"+osszead_(45,55,67));

const kiir=()=>"Hello";

//Változó lehet a paraméterlista hossza
function szum(){
    let szum=0;
    for (let i = 0; i < arguments.length; i++) {
            szum+=arguments[i];            
    }
    return szum;
}

console.log(szum(10,20,45,67,89,112,45));
console.log(szum(67,89,112,45));