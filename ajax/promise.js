
let p1=new Promise((resolve,reject)=>{
    resolve(100);
});


p1.then(adat=>console.log(adat)).catch(err=>console.log(err));

let p2=new Promise((resolve,reject)=>{
    let szam=500;
    if(szam>100){
        resolve(szam);
    } else {
        reject("A szám 100 vagy kisebb!")
    }
});

p2.then(szam=>console.log(szam)).catch(err=>console.log(err));

function p3(a,b){
    return new Promise((resolve,reject)=>{
        if(a>b){
            resolve(a);
        } else {
            reject("Az a nem nagyobb a b-nél!")
        }

    });
}

function novel(szam){
    return szam+15;
}

p3(10,3).then(szam=>console.log(szam)).catch(err=>console.log(err));

p3(10,3)
.then(szam=>p3(30,szam))
.then(szam=>novel(szam))
.then(szam=>p3(szam,25))
.then(szam=>console.log(szam))
.catch(err=>console.log(err));

async function promiseLanc(){
    try {
        let elso=await p3(10,3);
        let masodik=await p3(elso,80);

        console.log(masodik);    
    } catch (error) {
        console.log(error);
    }
    
}

promiseLanc();