import {Link} from 'react-router-dom';
import {useState,useEffect} from 'react';

function Breeds() {
    const [breeds,setBreeds]=useState([]);
    const [darab,setDarab]=useState(5);
    useEffect(()=>{
        fetch(`https://catfact.ninja/breeds?limit=${darab}`)
        .then(res=>res.json())
        .then(breeds=>setBreeds(breeds.data))
        .catch(err=>console.log(err));
    },[darab]);
  return (
    <div>
        <h2>Macskafajták</h2>
        <select className="form-select" onChange={(e)=>setDarab(e.target.value)}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
        </select>
        <div className="row">
            {
                breeds.map((elem,index)=>(
                    <div className="col bg-primary m-2" key={index}>
                        <p>{elem.breed}</p>
                        <p>{elem.country}</p>
                        <p>{elem.origin}</p>
                        <p>{elem.coat}</p>
                        <p>{elem.pattern}</p>
                    </div>
                ))
            }
        </div>
        <Link to='/'>Vissza a főoldalra</Link>
    </div>
  )
}

export default Breeds