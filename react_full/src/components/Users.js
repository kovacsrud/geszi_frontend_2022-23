import {useState,useEffect} from 'react';

import Select from './Select';
import Spinner from './Spinner';
import UserRender from './UserRender';

function Users() {
    const[users,setUsers]=useState([]);
    const[db,setDb]=useState(5);
    const[loading,setLoading]=useState(false);

    const userFetch=async ()=>{
      try {
        const response=await fetch(`https://randomuser.me/api/?results=${db}`);
        const userAdat=await response.json();

        setUsers(userAdat.results);
        setLoading(false);
        
      } catch (error) {
        console.log(error);
      }
      

    }

    useEffect(()=>{
        setLoading(true);
        //fetch(`https://randomuser.me/api/?results=${db}`)
        //.then(res=>res.json())
        //.then(adat=>{
        //  setUsers(adat.results);
        //  setLoading(false);
        //})
        //.catch(err=>console.log(err))
        userFetch();
        
    },[db]);


    //ternáris kifejezés feltétel ? igaz_ág : hamis_ág
  return (
    <div>

        <h2>Felhasználók száma:{users.length}</h2>
        <Select setDb={setDb}/>
        {
          !loading ?           
           users.map((elem,index)=>(<UserRender key={index} user={elem} />))
           : 
          <Spinner />
        }
        
    </div>
  )
}

export default Users