//Véletlen számok a JS-ben

let randomSzam=Math.floor(Math.random()*(100-10))+10;

console.log(randomSzam);

//Véletlen egész számot generálni adott határok között?

function veletlenSzam(min,max){
    return Math.floor(Math.random()*(max-min))+min;
}

console.log(veletlenSzam(1,100));