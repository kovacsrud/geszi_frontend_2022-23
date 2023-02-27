import {useNavigate} from "react-router-dom";
import {useState,useEffect} from "react";
import {toast} from "react-toastify";

function Userdata() {
    const [userData,setUserData]=useState({});
    const navigate=useNavigate();
    const token=sessionStorage.getItem('usertoken');

    useEffect(()=>{
        if(token){
            fetch('http://localhost:8000/api/user',{
                method:'GET',
                headers:{"Content-type":"application/json",
                         "Authorization":`Bearer ${token}`
                        }
            })
            .then(res=>res.json())
            .then(userdata=>{
                if(!userdata.message) {
                    setUserData(userdata);
                } else {
                    toast.error(userdata.message,{position: toast.POSITION.BOTTOM_RIGHT})
                }
            })
            .catch(err=>toast.error(err,{position: toast.POSITION.BOTTOM_RIGHT}));

        } else {
            navigate('/login');
        }
    },[]);


  return (
    <div>
        <p>{userData._id}</p>
        <p>{userData.username}</p>
        <p>{userData.email}</p>
        <p>{userData.age}</p>
    </div>
  )
}

export default Userdata