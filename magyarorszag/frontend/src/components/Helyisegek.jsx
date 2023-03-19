import {Link} from 'react-router-dom';
import {useState,useEffect} from 'react';
import Helyiseg from './Helyiseg';

function Helyisegek() {
    const [helyisegek,setHelyisegek]=useState([]);
    const [kivalasztott,setKivalasztott]=useState("");

    useEffect(()=>{
        fetch('http://localhost:8000/api/telepulesek')
        .then(res=>res.json())
        .then(adat=>setHelyisegek(adat))
        .catch(err=>alert(err));
    },[])

  return (
    <div>
        <h1 className="text-3xl text-center p-5 text-blue-800 font-bold">Helyiségek</h1>
        <select onChange={(e)=>setKivalasztott(e.target.value)} className="select select-bordered w-full max-w-xs">
            <option disabled selected>Válasszon települést!</option>
            {
                helyisegek.map((helyiseg,i)=>(<option key={i} value={helyiseg.nev}>{helyiseg.nev}</option>))
            }
        </select>
        
        
        <p className='text-3xl text-center'>Kiválasztva:{kivalasztott}</p>
        
        {
            kivalasztott.length>0 ?
            <Helyiseg kivalasztott={kivalasztott} />
            :
            ""

        }
        

        <Link className='m-5 text-xl font-bold text-center' to='/'>Vissza</Link>
    </div>
  )
}

export default Helyisegek