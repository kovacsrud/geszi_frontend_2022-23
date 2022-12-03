import Kutyafajta from "./Kutyafajta";
import KutyfajtaModosit from "./KutyfajtaModosit";
import {useState} from 'react';

function KutyafajtaRender({fajta,update}) {
    const[modosit,setModosit]=useState(false);
    const kapcsol=()=>{
        setModosit(prev=>!prev);
    }

  return (
    <div>
        {
            !modosit ? <Kutyafajta fajta={fajta} kapcsol={kapcsol} update={update} /> 
            :
            <div>
                <Kutyafajta fajta={fajta} kapcsol={kapcsol} update={update} /> 
                <KutyfajtaModosit fajta={fajta} update={update}/>
            </div>
        }
    </div>
  )
}

export default KutyafajtaRender;