import { useState,useEffect } from "react"

function Helyiseg({kivalasztott}) {
    

    const [helyiseg,setHelyiseg]=useState({});
    useEffect(()=>{
        fetch(`http://localhost:8000/api/telepulesek/telepulesnev/${kivalasztott}`)
        .then(res=>res.json())
        .then(adat=>setHelyiseg(adat))
        .catch(err=>alert(err));
    },[kivalasztott])
  return (
    <div className="mx-auto">
        <h1 className="text-3xl text-center p-5  text-blue-800 font-bold">{helyiseg.telepulesnev} adatai</h1>
        <p className="text-center text-xl">{helyiseg.telepulesnev} {helyiseg.jogallas}</p>
        <p className="text-center text-xl">Lat:{helyiseg.lat},Long:{helyiseg.lng}</p>
        <p className="text-center text-xl">Terület:{helyiseg.terulet}</p>
        <p className="text-center text-xl">Népesség:{helyiseg.nepesseg}</p>
        <p className="text-center text-xl">Megye:{helyiseg.megyenev}</p>

    </div>
  )
}

export default Helyiseg