function App(){
    return (
        <div className="container" >
            <h1>React JSX szintaxis</h1>
            <Box kezd={12} hatter={"red"} />
            <Box kezd={23} hatter={"green"}/>
            <Box kezd={39} hatter={"blue"}/>
        </div>
    );
}

function Box({kezd,hatter}){
    
    const[szamlalo,setSzamlalo]=React.useState(kezd);
    

    return (
        <div onClick={()=>setSzamlalo(prev=>prev+1)} className="p-2 m-2 rounded" style={{backgroundColor:hatter,width:"200px",height:"200px"}}>
            <h2>Box számláló:{szamlalo}</h2>
        </div>
    );
}

ReactDOM.render(React.createElement(App),document.getElementById('root'));