let jsgomb=document.getElementById('jsgomb');

let gomb=document.createElement('button');
gomb.textContent="Gomb";

gomb.onclick=function(){
    alert("Js gomb");
}

jsgomb.appendChild(gomb);

//React - deklaratív

const rgomb=React.createElement('button',{
    onClick:function(){
        alert("React gomb");
    }
},"React gomb");

const kontener=React.createElement('div',{
    style:{
        width:"200px",
        height:"200px",
        backgroundColor:"red"
    }
},rgomb,rgomb,rgomb);

const masikKontener=React.createElement('div',{
    style:{
        backgroundColor:"blue"
    }
},kontener,kontener);

ReactDOM.render(masikKontener,document.getElementById('reactgomb'));