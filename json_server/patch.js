const fetch=require('cross-fetch');

let ujAuto={
    "marka":"Dacia",
    "tipus":"Logan",
    "rendszam":"KLK-556",
    "kor":6,
    "id":5
}

async function modositas(){
    const response=await fetch(`http://localhost:8000/autok/${ujAuto.id}`,{
        method:'PATCH',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify(ujAuto)
    });

    const eredmeny=await response.text();
    console.log(eredmeny);
}

modositas();
