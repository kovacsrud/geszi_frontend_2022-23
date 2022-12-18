import {useEffect,useState,createContext} from 'react';

const KutyaContext=createContext();

export const KutyaProvider=({children})=>{
    const[kutyak,setKutyak]=useState([]);
    const[kutyanevek,setKutyaNevek]=useState([]);
    const[kutyafajtak,setKutyaFajtak]=useState([]);
    const[refresh,setRefresh]=useState(false);

    const update=()=>{
        setRefresh(prev=>!prev);
    }
    useEffect(()=>{
        fetch('http://localhost:8000/kutyak')
        .then(res=>res.json())
        .then(adat=>setKutyak(adat))
        .catch(err=>console.log(err));
    },[refresh]);

    useEffect(()=>{
        fetch('http://localhost:8000/kutyanevek')
        .then(res=>res.json())
        .then(adat=>setKutyaNevek(adat))
        .catch(err=>console.log(err));
    },[refresh]);

    useEffect(()=>{
        fetch('http://localhost:8000/kutyafajtak')
        .then(res=>res.json())
        .then(adat=>setKutyaFajtak(adat))
        .catch(err=>console.log(err));
    },[refresh]);

    const backendCommand=async (adat,method)=>{
        const response=await fetch('http://localhost:8000/kutyak',{
            method:method,
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(adat)

        });

        const valasz=await response.text();
        update();
        alert(valasz);

    }


    return <KutyaContext.Provider value={{
                            kutyak,
                            kutyanevek,
                            kutyafajtak,
                            backendCommand,
                            update
                        }}>
            {children}
            </KutyaContext.Provider>
}

export default KutyaContext;