import {useState} from 'react';

function KutyafajtaForm() {
    const[nev,setNev]=useState("");
    const[eredetiNev,setEredetinev]=useState("");

    const adatKuldes=async (adat)=>{
        const response=await fetch('http://localhost:8000/kutyafajtak',{
            method:'POST',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(adat)
        });

        const valasz=await response.text();
        alert(valasz);

    }

    const onSubmit=(e)=>{
        e.preventDefault();
        adatKuldes({nev:nev,eredetinev:eredetiNev});
    }

  return (
    <div className="container">
       <form onSubmit={onSubmit}>
        <div className="mb-3">
            <label for="nev" className="form-label">Fajta neve:</label>
            <input type="text" value={nev} onChange={(e)=>setNev(e.target.value)} className="form-control" id="nev" />
        </div>
        <div className="mb-3">
            <label for="eredetinev" className="form-label">Fajta eredeti neve:</label>
            <input type="text" value={eredetiNev} onChange={(e)=>setEredetinev(e.target.value)} className="form-control" id="eredetinev" />
        </div>
        <button type="submit" className="btn btn-primary">Küldés</button>
       </form>
    </div>
  )
}

export default KutyafajtaForm;