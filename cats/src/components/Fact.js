import {Link} from 'react-router-dom';
import {useState,useEffect} from 'react';

function Fact() {
    const[catfact,setCatFact]=useState({});
    useEffect(()=>{
        fetch('https://catfact.ninja/fact')
        .then(res=>res.json())
        .then(fact=>setCatFact(fact))
        .catch(err=>console.log(err));
    },[]);
  return (
    <div>
        <h2>Random tény macskákról</h2>
        <p>{catfact.fact}</p>
        <Link to='/'>Vissza a főoldalra</Link>
    </div>
  )
}

export default Fact