const kesleltet=setTimeout(function(){
    console.log("Késleltetés");
},5000);

let szamlalo=0;

const szamlal=setInterval(function(){
    console.log(szamlalo);
    szamlalo++;
    if(szamlalo>20){
        clearInterval(szamlal);
    }
},1000);

