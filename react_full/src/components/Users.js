import {useState,useEffect} from 'react';

function Users() {
    const[users,setUsers]=useState([]);

    useEffect(()=>{
        fetch('https://randomuser.me/api/?results=50')
        .then(res=>res.json())
        .then(adat=>setUsers(adat.results))
        .catch(err=>console.log(err))
    },[]);

  return (
    <div>
        <h2>Felhasználók száma:{users.length}</h2>
        {
            users.map((elem)=>(<p>{elem.name.first} {elem.name.last}</p>))
        }
    </div>
  )
}

export default Users