//https://jsonplaceholder.typicode.com/posts

let keres=new XMLHttpRequest();

//open,onload,send


keres.open('GET','https://jsonplaceholder.typicode.com/posts/',true);

keres.onload=function(){
    let valasz=JSON.parse(this.response);
    let root=document.getElementById('root');
    
    if(Array.isArray(valasz)){
        valasz.forEach(elem => {
            let p=document.createElement('p');
            p.textContent=elem.title;
            root.appendChild(p);
            
        });

    } else {
        let p=document.createElement('p');
            p.textContent=valasz.title;
            root.appendChild(p);

    }

   
    //Itt kell feldolgozni a választ
    //console.log(valasz);
}

keres.send();

fetch('https://jsonplaceholder.typicode.com/posts/')
.then(res=>res.json())
.then(adat=>{console.log(adat)})
.catch(err=>console.log(err));


async function letolt(){
    let keres=await fetch('https://jsonplaceholder.typicode.com/posts/');

    let valasz=await keres.json();

    console.log(valasz);
}

letolt();

console.log("Főprogram");
