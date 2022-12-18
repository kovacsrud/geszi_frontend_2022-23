import {useContext} from 'react';
import KutyaContext from '../../context/KutyaContext';
import {useNavigate} from 'react-router-dom';

function KutyaLista() {
    const navigate=useNavigate();
    const{kutyak,backendCommand}=useContext(KutyaContext);

    const modosit=(kutya)=>{
        navigate('/ujkutya', {state:{kutya}})
    }

    const torles=(id,method)=>{
      if(window.confirm("Biztosan törli?")){
        backendCommand(id,method);
      }
    }

    

  return (
    <div>
        <h1>Rendelési adatok</h1>
        {
            kutyak.map((elem,index)=>(
             <div>   
                <p key={index}>{elem.kutyanev},{elem.nev},{elem.utolsoell},{elem.eletkor} év</p>
                <button onClick={()=>{modosit(elem)}} className="btn btn-primary">Módosítás</button>
                <button onClick={()=>{torles({Id:elem.Id},'DELETE')}} className="btn btn-secondary">Törlés</button>
                
            </div>
            ))
        }
    </div>
  )
}

export default KutyaLista