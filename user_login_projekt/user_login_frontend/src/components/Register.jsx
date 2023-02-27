import {useState,useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import UserContext from './context/UserContext';
import {toast} from 'react-toastify';

function Register() {

    const navigate=useNavigate();
    const{update}=useContext(UserContext);

    let formObj={
        username:"",
        email:"",
        password:"",
        passwordIsmet:"",
        age:0
    }

    const [formData,setFormData]=useState(formObj);

    const writeData=(e)=>{
        setFormData((prev)=>({...prev,[e.target.id]:e.target.value}))
    }

    const kuldes=(adat)=>{
        fetch('http://localhost:8000/api/user/register',{
            method:'POST',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(adat)
        })
        .then(res=>res.json())
        .then(token=>{
            if(!token.message){
                sessionStorage.setItem('usertoken',token);
                toast.success('Sikeres regisztráció!',{position: toast.POSITION.BOTTOM_RIGHT})
                //alert("Sikeres regisztráció!");
                update();
                navigate('/');
                
            } else {
                toast.error(token.message,{position: toast.POSITION.BOTTOM_RIGHT});
                //alert(token.message);
            }
        })
        .catch(err=>toast.error(err,{position: toast.POSITION.BOTTOM_RIGHT}))
    }

    const onSubmit=(e)=>{
        e.preventDefault();
        kuldes(formData);
    }




  return (
    <div>
        <h2 className='text-center font-bold text-2xl my-10'>Regisztráció</h2>
        <div className='flex justify-center items-center'>
        <div className='flex-column'>
        <form onSubmit={onSubmit}>
            <input type="text" id="username" value={formData.username} onChange={writeData} placeholder="Felhasználói név" className="input input-bordered input-primary w-full max-w-xs" />
            <input type="email" id="email" value={formData.email} onChange={writeData} placeholder="Email" className="input input-bordered input-primary w-full max-w-xs" />
            <input type="password" id="password" value={formData.password} onChange={writeData} placeholder="Jelszó" className="input input-bordered input-primary w-full max-w-xs" />
            <input type="password" id="passwordIsmet" value={formData.passwordIsmet} onChange={writeData} placeholder="Jelszó ismét" className="input input-bordered input-primary w-full max-w-xs" />
            <input type="text" id='age' value={formData.age} onChange={writeData} placeholder="Életkor" className="input input-bordered input-primary w-full max-w-xs" />
            <button className='btn btn-primary'>Küldés</button>
        </form>
        </div>
        </div>

    </div>
  )
}

export default Register