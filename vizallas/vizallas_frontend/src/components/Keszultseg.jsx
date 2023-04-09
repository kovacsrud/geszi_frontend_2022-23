import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';

function Keszultseg() {
    const [keszultseg,setKeszultseg]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:8000/keszultseg')
        .then(res=>res.json())
        .then(adat=>setKeszultseg(adat))
        .catch(err=>console.log(err))

    },[])


  return (
    <div>
        <h1 className='text-3xl text-center'>Készültség</h1>
        {
            keszultseg !=null && keszultseg.length>0 ?
            <>
            {
                keszultseg.map((elem,i)=>(<p key={i}>{elem.varos},{elem.ksz1},{elem.ksz2},{elem.ksz3}</p>))
            }
            </>
            :
            <>
                <h1 className='text-3xl text-center'>Nincsenek készültség adatok!</h1>
            </>
        }



        <Link to={'/'}>Főoldal</Link>
    </div>
  )
}

export default Keszultseg