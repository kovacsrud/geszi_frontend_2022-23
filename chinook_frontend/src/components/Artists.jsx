import { useState,useEffect } from "react";
import { useNavigate,Link } from "react-router-dom";

function Artists() {
    const navigate=useNavigate();
    const [artists,setArtists]=useState([]);

    const letolt=async ()=>{
        try{
            const response=await fetch('http://localhost:8000/artists');
            const valasz=await response.json();
            setArtists(valasz);
        } 
        catch(err){
            alert(err);
        }
    }

    useEffect(()=>{
        fetch('http://localhost:8000/artists')
        .then(res=>res.json())
        .then(artists=>setArtists(artists))
        .catch(err=>alert(err));
    },[]);

  return (
    <div>
        <p>Előadók száma:{artists.length}</p>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {
            
            artists.map((artist,i)=>(<div key={i} className="badge badge-info gap-2 text-xl p-2 m-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            {artist.ArtistId}<Link to="/newartist" state={artist.Name}>{artist.Name}</Link>
          </div>))
            
        }
        </div>
    </div>
  )
}

export default Artists