import {useEffect,useState} from 'react';
import Auto from './Auto';
import AutoForm from './AutoForm';

function AutoList() {
    const[autok,setAutok]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:8000/autok')
        .then(res=>res.json())
        .then(autok=>setAutok(autok))
        .catch(err=>console.log(err))
    },[]);

  return (
    <div>
        <h2>Autók listája</h2>
        {
          autok.map((auto,index)=>(<Auto key={index} auto={auto} />))     
        }
        <AutoForm />
    </div>
  )
}

export default AutoList;