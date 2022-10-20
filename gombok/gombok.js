let jsdiv=document.getElementById('js-gomb');

let gomb=document.createElement('button');
gomb.textContent="JS gomb";

gomb.onclick=function(){
    alert("Js gomb");
}

jsdiv.appendChild(gomb);

//Ugyanez React-el

const rgomb=React.createElement('button',{
    onClick:function(){
        alert("React gomb");
    }
},"React gomb");

const kontener=React.createElement('div',{
    style:{
        width:"200px",
        height:"200px",
        backgroundColor:"green"
    }
},rgomb,rgomb,rgomb)

ReactDOM.render(kontener,document.getElementById('react-gomb'));
