const fetch=require('cross-fetch');

let ujAuto={
    "marka":"Dacia",
    "tipus":"Sandero",
    "rendszam":"GLK-556",
    "kor":8
}

//promise-os verzió
//fetch('http://localhost:8000/autok',{
    //method:'POST',
    //headers:{'Content-type':'application/json'},
    //body:JSON.stringify(ujAuto)
//})
//.then(res=>console.log(res))
//.catch(err=>console.log(err));

//async verzió
async function kuldes(){
    const response=await fetch('http://localhost:8000/autok',{
        method:'POST',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify(ujAuto)
    });

    const eredmeny=await response.text();
    console.log(eredmeny);
}

kuldes();