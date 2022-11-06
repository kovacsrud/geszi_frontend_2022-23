const fetch=require('cross-fetch');

let ujAuto={
    "marka":"Dacia",
    "tipus":"Logan",
    "rendszam":"GLK-556",
    "kor":9,
    "id":6
}

async function torles(){
    const response=await fetch(`http://localhost:8000/autok/${ujAuto.id}`,{
        method:'DELETE',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify(ujAuto)
    });

    const eredmeny=await response.text();
    console.log(eredmeny);
}

torles();
