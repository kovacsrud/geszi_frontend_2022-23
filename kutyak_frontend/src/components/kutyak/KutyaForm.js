import {useContext,useState} from 'react';
import KutyaContext from '../../context/KutyaContext';
import {useNavigate,useLocation} from 'react-router-dom';

function KutyaForm() {
    const navigate=useNavigate();
    const{state}=useLocation();
    
    const{kutyanevek,kutyafajtak,backendCommand}=useContext(KutyaContext);
    let method='POST';
    let formObj={
        nevid:1,
        fajtaid:1,
        utolsoell:"",
        eletkor:""
    }

    if(state!==null){
        method='PATCH';
        formObj={
            Id:state.kutya.Id,
            nevid:state.kutya.nevid,
            fajtaid:state.kutya.fajtaid,
            utolsoell:state.kutya.utolsoell,
            eletkor:state.kutya.eletkor
        }
    }

    const[formData,setFormData]=useState(formObj);

    const writeFormData=(e)=>{
        setFormData((prevState)=>({...prevState,[e.target.id]:e.target.value}));
    }

    const onSubmit=(e)=>{
        e.preventDefault();
        backendCommand(formData,method);
        navigate('/kutyak');
    }

  return (
    <div className="container">
        <form onSubmit={onSubmit}>
        <div className="mb-3">
            <label for="eletkor" className="form-label">Kutya életkora:</label>
            <input type="text" value={formData.eletkor} onChange={writeFormData} className="form-control" id="eletkor" />
        </div>
        <div className="mb-3">
            <label for="utolsoell" className="form-label">Utolsó ellenőrzés időpontja:</label>
            <input type="text" value={formData.utolsoell} onChange={writeFormData} className="form-control" id="utolsoell" />
        </div>
        <div className="mb-3">
            <label for="nevid" className="form-label">Kutya neve:</label>
            <select className="form-select" value={formData.nevid} onChange={writeFormData} id="nevid">
                  {
                    kutyanevek.map((elem,index)=>(<option key={index} value={elem.Id}>{elem.kutyanev}</option>))
                  }
            </select>
            
        </div>
        <div className="mb-3">
            <label for="fajtaid" className="form-label">Kutya fajtája:</label>
            <select className="form-select" value={formData.fajtaid} onChange={writeFormData} id="fajtaid">
                  {
                    kutyafajtak.map((elem,index)=>(<option key={index} value={elem.Id}>{elem.nev}</option>))
                  }
            </select>
            
        </div>
        <div className="mb-3">
            <button type="submit" className="btn btn-primary">Küldés</button>
        </div>


        </form>
    </div>
  )
}

export default KutyaForm