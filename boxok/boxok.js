function App(){
    return (
        React.createElement('div',{
            style:{
                width:"300px",
                backgroundColor:"green"
                
            },
            className:"p-3"

        },"App",
        React.createElement(Box,{szam:10,hatter:"red"}),
        React.createElement(Box,{szam:30,hatter:"blue"}),
        React.createElement(Box,{szam:45,hatter:"yellow"})
        )
    );
}

function Box({szam,hatter}){

    //state változó
    const [szamlalo,setSzamlalo]=React.useState(szam);

    return (
        React.createElement('div',{
            style:{
                width:"200px",
                height:"200px",
                backgroundColor:hatter
            },
            className:"p-2 m-2 rounded",
            onClick:()=>{setSzamlalo(prev=>prev+1)}

        },"Box "+szamlalo)
    );
}


ReactDOM.render(React.createElement(App),document.getElementById('root'));