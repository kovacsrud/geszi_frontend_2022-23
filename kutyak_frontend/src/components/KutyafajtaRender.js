import Kutyafajta from "./Kutyafajta";
import KutyfajtaModosit from "./KutyfajtaModosit";
import {useState} from 'react';

function KutyafajtaRender({fajta}) {
    const[modosit,setModosit]=useState(false);
    const kapcsol=()=>{
        setModosit(prev=>!prev);
    }

  return (
    <div>
        {
            !modosit ? <Kutyafajta fajta={fajta} kapcsol={kapcsol} /> 
            :
            <div>
                <Kutyafajta fajta={fajta} kapcsol={kapcsol}/> 
                <KutyfajtaModosit fajta={fajta}/>
            </div>
        }
    </div>
  )
}

export default KutyafajtaRender;