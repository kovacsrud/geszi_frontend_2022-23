import {Link} from 'react-router-dom';
import {useState,useEffect} from 'react';

function Facts() {
    const[catfacts,setCatFacts]=useState([]);
    const[darab,setDarab]=useState(5);
    useEffect(()=>{
        fetch(`https://catfact.ninja/facts?limit=${darab}`)
        .then(res=>res.json())
        .then(facts=>setCatFacts(facts.data))
    },[darab]);
  return (
    <div>
        <h2>Random tények listája macskákról</h2>
        <h3>Hány adatot szeretne?</h3>
        <select className="form-select" onChange={(e)=>setDarab(e.target.value)}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
        </select>
        <div>
            {
                catfacts.map((elem,index)=>(<p key={index}>{index+1}.{elem.fact}</p>))
            }
        </div>
        <Link to='/'>Vissza a főoldalra</Link>
    </div>
  )
}

export default Facts