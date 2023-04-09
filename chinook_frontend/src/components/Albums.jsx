import { useState, useEffect } from "react";


function Albums() {
    const [artists, setArtists] = useState([]);
    const [albums, setAlbums] = useState([]);
    

    useEffect(() => {
        fetch('http://localhost:8000/artists')
            .then(res => res.json())
            .then(artists => setArtists(artists))
            .catch(err => alert(err));
    }, []);

    const getAlbums = (artist) => {
        fetch(`http://localhost:8000/artist-albums/${artist}`)
            .then(res => res.json())
            .then(albums => setAlbums(albums))
            .catch(err => alert(err))
    }

    return (
        <div>
            <div className="grid grid-cols-1 justify-items-center m-5">
            <select onChange={(e)=>getAlbums(e.target.value)} className="select select-bordered w-full max-w-xs">
                <option disabled selected>Válasszon előadót!</option>
                {
                    artists.map((artist,i)=>(<option key={i} value={artist.Name}>{artist.Name}</option>))
                }
            </select>
            </div>
            <div className="grid grid-cols-1 justify-items-center m-5">
                {albums.length>0 ?
                 <>
                 <p>{albums.length}</p>
                 {albums.map((album,i)=>(<p key={i}>{album.Title}</p>))}
                 </>
                :
                <><p>Az előadónak nincs albuma az adatbázisban!</p></>}
            </div>
        </div>
    )
}

export default Albums