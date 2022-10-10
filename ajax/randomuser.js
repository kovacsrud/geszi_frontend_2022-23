//https://jsonplaceholder.typicode.com/posts

let keres=new XMLHttpRequest();

//open,onload,send

let db=50;

keres.open('GET',`https://randomuser.me/api/?results=${db}`,true);

keres.onload=function(){
    let valasz=JSON.parse(this.response);
    let root=document.getElementById('root');
    
    if(Array.isArray(valasz.results)){
        valasz.results.forEach(elem => {
            let p=document.createElement('p');
            let kep=document.createElement('img');
            kep.src=elem.picture.large;
            p.textContent=elem.name.first+" "+elem.name.last;
            p.appendChild(kep);
            root.appendChild(p);
            
        });

    } else {
        let p=document.createElement('p');
            p.textContent=valasz;
            root.appendChild(p);

    }

   
    //Itt kell feldolgozni a választ
    //console.log(valasz);
}

keres.send();


