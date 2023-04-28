import { useState } from "react";
import {useNavigate,useLocation} from "react-router-dom";

function NewArtist() {
    const{state}=useLocation();
    let artistFromState="";
    const navigate=useNavigate();
    
    let method='POST';

    if(state){
        artistFromState=state;
        console.log(state);
        method='PATCH';
    }

    const [artist,setArtist]=useState(artistFromState);

    const adatkuldes=(eloadoNev)=>{
        fetch('http://localhost:8000/artist',{
            method:method,
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({name:eloadoNev})
        })
        .then(res=>res.json())
        .then(message=>alert(message.message))
        .catch(err=>alert(err));
    }

    const onSubmit=(e)=>{
        e.preventDefault();
        adatkuldes(artist);
        navigate('/');        
    }


  return (
    <div className="grid grid-cols-1 justify-items-center m-2">
        <h1 className="text-3xl text-center m-2">Új előadó felvitele</h1>
        <form onSubmit={onSubmit}>
            <div className="flex flex-col items-center w-96">
            <input type="text" value={artist} onChange={((e)=>setArtist(e.target.value))} placeholder="Adja meg az előadó nevét" className="input input-bordered input-primary w-full max-w-xs" />
            
            
                <button className="btn btn-primary m-2">Küldés</button>
            </div>
        </form>
    </div>
  )
}

export default NewArtist