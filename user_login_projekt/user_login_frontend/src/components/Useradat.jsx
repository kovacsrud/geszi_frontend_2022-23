import {useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

function Useradat() {
    const navigate=useNavigate();
    const [userAdat,setUserAdat]=useState({});
    const token=sessionStorage.getItem('usertoken');

    useEffect(()=>{
        if(token){
            fetch('http://localhost:8000/api/user',{
                method:'GET',
                headers:{
                    "Content-type":"application/json",
                    "Authorization":`Bearer ${token}`
                }
            })
            .then(res=>res.json())
            .then(useradat=>setUserAdat(useradat))
            .catch(err=>console.log(err));

        } else {
            navigate('/login');
        }
    },[])

  return (
    <div>
        <h2 className='text-center font-bold text-2xl my-10'>Felhasználói adatok</h2>
        <p>{userAdat.username}</p>
        <p>{userAdat.email}</p>
        <p>{userAdat.age}</p>

    </div>
  )
}

export default Useradat