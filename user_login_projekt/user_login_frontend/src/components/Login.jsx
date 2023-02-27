import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from './context/UserContext';
import {toast} from 'react-toastify';

function Login() {
  const navigate = useNavigate();
  const{update}=useContext(UserContext);
  let formObj = {
    username: "",
    password: ""
  }

  const [formData, setFormData] = useState(formObj);

  const writeData=(e)=>{
    setFormData((prev)=>({...prev,[e.target.id]:e.target.value}))
}

const kuldes=(adat)=>{
  fetch('http://localhost:8000/api/user/login',{
    method:'POST',
    headers:{
      "Content-type":"application/json",
    },
    body:JSON.stringify(adat)
  })
  .then(res=>res.json())
  .then(token=>{
    if(!token.message){
      sessionStorage.setItem('usertoken',token);
      toast.success('Sikeres belépés!',{position: toast.POSITION.BOTTOM_RIGHT});
      //alert('Sikeres belépés!');
      update();
      navigate('/');
    } else {
      toast.error(token.message,{position: toast.POSITION.BOTTOM_RIGHT});
      //alert(token.message);
    }
  })
  .catch(err=>toast.error(token.message,{position: toast.POSITION.BOTTOM_RIGHT}));

}

const onSubmit=(e)=>{
  e.preventDefault();
  kuldes(formData);

}

  return (
    <div>
      <h2 className='text-center font-bold text-2xl my-10'>Belépés</h2>

      <div className='flex justify-center items-center'>
        <div className='flex-column'>
          <form onSubmit={onSubmit}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input type="text" id="username" value={formData.username} onChange={writeData} className="input input-bordered w-full max-w-xs" required />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" id="password" value={formData.password} onChange={writeData} className="input input-bordered w-full max-w-xs" required/>
          </div>
          <div className="form-control w-full max-w-xs my-5">
          <button type='submit' className="btn btn-primary">Küldés</button>
          </div>
          </form>
        </div>
      </div>


    </div>
  )
}

export default Login