import {useState} from 'react';

function AutoForm() {
    const[id,setId]=useState(0);
    const[marka,setMarka]=useState("");
    const[tipus,setTipus]=useState("");
    const[rendszam,setRendszam]=useState("");
    const[kor,setKor]=useState(0);

    const kuldes=(adat)=>{
        fetch('http://localhost:8000/autok',{
            method:'POST',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(adat)
        })
        .then(res=>res.json())
        .then(valasz=>alert(valasz))
        .catch(err=>err)
    }

    const onSubmit=(e)=>{
        e.preventDefault();
        kuldes({id,marka,tipus,rendszam,kor});

    }


  return (
    
    <div className="mb-3">
    <form onSubmit={onSubmit}>
        <label for="id" className="form-label">Id</label>
        <input onChange={(e)=>setId(e.target.value)} value={id} type="text" className="form-control" id="id"  />
        <label for="marka" className="form-label">Márka</label>
        <input onChange={(e)=>setMarka(e.target.value)} value={marka} type="text" className="form-control" id="marka"  />
        <label for="tipus" className="form-label">Tipus</label>
        <input onChange={(e)=>setTipus(e.target.value)} value={tipus} type="text" className="form-control" id="tipus"  />
        <label for="rendszam" className="form-label">Rendszám</label>
        <input onChange={(e)=>setRendszam(e.target.value)} value={rendszam} type="text" className="form-control" id="rendszam"  />
        <label for="kor" className="form-label">Kor</label>
        <input onChange={(e)=>setKor(e.target.value)} value={kor} type="text" className="form-control" id="kor"  />
        <button type="submit" className="btn btn-primary">Küldés</button>
    </form>
  </div>
  )
}

export default AutoForm