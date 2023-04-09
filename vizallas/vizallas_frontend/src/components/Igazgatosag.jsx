import {Link} from "react-router-dom";
import {useState,useEffect} from 'react';

function Igazgatosag() {
    const [igazgatosagok,setIgazgatosagok]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:8000/igazgatosagok')
        .then(res=>res.json())
        .then(adatok=>setIgazgatosagok(adatok))
        .catch(err=>console.log(err));

    },[])

  return (
    <div>
    <h1 className="text-center my-20 text2-xl">Igazgatosag</h1>
    {
        igazgatosagok!=null && igazgatosagok.length>0 ?
        <>
            {
            igazgatosagok.map((elem,i)=>(<p key={i}>{elem.nev},{elem.kozpont}</p>))
            }
        </>
        :
        <>
            <h1 className="text-4xl text-center">Nincsenek igazgatóság adatok</h1>
        </>
    }
    <Link to="/">Főoldal</Link>
    </div>
  )
}

export default Igazgatosag