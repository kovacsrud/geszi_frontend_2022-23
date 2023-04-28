import { useState,useEffect } from "react";
import {useNavigate} from "react-router-dom";


function NewAlbum() {
    const navigate=useNavigate();
    const [artistId,setArtistId]=useState(0);
    const [title,setTitle]=useState("");
    const [artists,setArtists]=useState([]);

   


    useEffect(()=>{
        fetch('http://localhost:8000/artists')
        .then(res=>res.json())
        .then(artists=>setArtists(artists))
        .catch(err=>alert(err));
    },[])

    const adatkuldes=(data)=>{
        fetch('http://localhost:8000/album',{
            method:'POST',
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(message=>alert(message.message))
        .catch(err=>alert(err));

    }
    const onSubmit=(e)=>{
        e.preventDefault();
        adatkuldes({title:title,artistId:artistId});
        navigate('/');
    }

  return (
    <div className="grid grid-cols-1 justify-items-center m-2">
    <h1 className="text-3xl text-center m-2">Új album felvitele</h1>
    <form onSubmit={onSubmit}>
        <div className="flex flex-col items-center w-96">
        <select onChange={(e)=>setArtistId(e.target.value)} className="m-2 select select-bordered w-full max-w-xs">
                <option disabled selected>Válasszon előadót!</option>
                {
                    artists.map((artist,i)=>(<option key={i} value={artist.ArtistId}>{artist.Name}</option>))
                }
        </select>
        <input type="text" value={title} onChange={((e)=>setTitle(e.target.value))} placeholder="Adja meg az album címét" className="input input-bordered input-primary w-full max-w-xs" />               
            <button className="btn btn-primary m-2">Küldés</button>
        </div>
    </form>
</div>
  )
}

export default NewAlbum;