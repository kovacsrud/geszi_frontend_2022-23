import {useState,useEffect} from 'react';
import KutyafajtaRender from './KutyafajtaRender';

function Kutyafajtak() {
    const[kutyafajtak,setKutyafajtak]=useState([]);
    const[refresh,setRefresh]=useState(false);

    useEffect(()=>{
        fetch('http://localhost:8000/kutyafajtak')
        .then(res=>res.json())
        .then(adat=>setKutyafajtak(adat))
        .catch(err=>console.log(err));
    },[refresh]);

    const update=()=>{
      setRefresh(prev=>!prev);
    }

  return (
    <div>
        {
            kutyafajtak.map((fajta,index)=>(<KutyafajtaRender key={index} fajta={fajta} update={update} />))
        }
    </div>
  )
}

export default Kutyafajtak;