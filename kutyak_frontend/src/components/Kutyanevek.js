import {useState,useEffect} from 'react';
import KutyafajtaRender from './KutyafajtaRender';

function Kutyanevek() {
    const[kutyanevek,setKutyanevek]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:8000/kutyafajtak')
        .then(res=>res.json())
        .then(adat=>setKutyanevek(adat))
        .catch(err=>console.log(err));
    },[]);
  return (
    <div>
        {
            kutyanevek.map((fajta,index)=>(<KutyafajtaRender key={index} fajta={fajta} />))
        }
    </div>
  )
}

export default Kutyanevek;