
function Kutyafajta({fajta,kapcsol,update}) {

    const megerosites=(id)=>{
        if(window.confirm("Biztosan törli?"))
        {
          torles(id);
        }

    }


    const torles=async (id)=>{
      const response=await fetch('http://localhost:8000/kutyafajtak'
      ,{
        method:'DELETE',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify({id:id})
      });

      const valasz=await response.text();
      update();
      alert(valasz);
    }

  return (
    <div>
      <p onClick={kapcsol}>{fajta.nev},{fajta.eredetinev}</p>
      <button className="btn btn-primary" onClick={kapcsol}>Módosítás</button>
      <button className="btn btn-secondary" onClick={()=>megerosites(fajta.Id)}>Törlés</button>
    </div>
  )
}

export default Kutyafajta