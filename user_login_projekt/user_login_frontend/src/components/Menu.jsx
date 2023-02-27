import UserContext from "./context/UserContext";
import {useContext} from 'react';
import {Link} from 'react-router-dom';

function Menu() {

    const {update,logout}=useContext(UserContext);

    const token=sessionStorage.getItem('usertoken');
    
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">Main</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        { token ?
                            <>
                            <li><Link to="/upload"> Fájlok feltöltése </Link></li>
                            <li><Link to="/useradat"> Felhasználó adatai</Link></li>
                            <li><a onClick={()=>logout()}>Kilépés</a></li>
                            </>
                            :
                            <>
                                <li><Link to="/register">Regisztráció</Link></li>
                                <li><Link to="/login">Login</Link></li>
                            </>

                        }
                    
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Menu