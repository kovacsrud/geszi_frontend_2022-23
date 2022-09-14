let szamok=[12,34,56,112,456,991,65];

let szemely={
    vezeteknev:"Kovács",
    keresztnev:"Egon",
    kor:34
}

let ul=document.createElement('ul');

for (let i = 0; i < szamok.length; i++) {
    
    let li=document.createElement('li');
    li.textContent=szamok[i];
    ul.appendChild(li);
    
}

main.appendChild(ul);

console.log(szemely.vezeteknev);

for (let k in szemely) {
    console.log(k+":"+szemely[k]);
}

for (let i of szamok) {
    console.log(i);
}

szamok.forEach(function (elem,index){
    console.log(index+"=>"+elem);
});

let cv=0;
while (szamok[cv]) {
    console.log(szamok[cv]);
    cv++;
}

cv=0;
do{
   console.log(szamok[cv]);
   cv++;
} while(szamok[cv]);
