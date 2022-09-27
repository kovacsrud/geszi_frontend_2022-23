//függvényre van szükség, amely decimálisan megadott színkódot
//hexadecimálisra alakít át

function decToHex(red,green,blue){
    return "#"+red.toString(16)+green.toString(16)+blue.toString(16);
}

console.log(decToHex(255,255,255));
let root=document.getElementById('root');

function kattint(e){
    let elem=e.target;
    let selected=document.getElementById('selected');
    selected.setAttribute('style','background-color:'+elem.style.backgroundColor);
    selected.textContent=elem.textContent;
}

for (let i = 0; i < 256; i++) {
        let negyzet=document.createElement('div');
        negyzet.textContent=decToHex(255,255,i);
        negyzet.setAttribute('class','negyzet');
        negyzet.setAttribute('style','background-color:'+decToHex(255,255,i));
        negyzet.addEventListener('click',kattint);
        
        root.appendChild(negyzet);
}