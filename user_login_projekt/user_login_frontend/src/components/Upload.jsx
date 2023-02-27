import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';

function Upload() {
    const navigate = useNavigate();
    const [images, setImages] = useState([]);
    const token = sessionStorage.getItem('usertoken');

    useEffect(() => {
        if (!token) {
            navigate('/login');
        }
    }, [token])

    const imageChange=(e)=>{
        setImages([...images,...e.target.files]);
    }

    const kuldes=(data)=>{
        fetch('http://localhost:8000/api/files/upload',{
            method:'POST',
            headers:{
                "Authorization":`Bearer ${token}`
            },
            body:data
        })
        .then(res=>res.json())
        .then(valasz=>toast.success(valasz.message))
        .catch(err=>toast.error(err));

    }

    const onSubmit = (e) => {
        e.preventDefault();
        const formData=new FormData();
        for(let i=0;i<images.length;i++){
            formData.append("file"+i,images[i]);
        }
        kuldes(formData);
        navigate('/');

    }


    return (
        <div>
            <h2 className='text-center font-bold text-2xl my-10'>Fájlok feltöltése</h2>

            <div className='flex justify-center items-center'>
                <div className='flex-column'>
                    <form onSubmit={onSubmit}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Username</span>
                            </label>
                            <input type="file" onChange={imageChange} className="input input-bordered w-full max-w-xs" multiple required />
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

export default Upload