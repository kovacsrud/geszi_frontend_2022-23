import { Link } from "react-router-dom";

function Menu() {
    return (
        <div className="navbar bg-sky-100">
            <div className="flex-1">
                <Link to={"/"} className="btn btn-ghost normal-case text-xl">Főoldal</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to={"/artists"}>Előadók</Link></li>
                    <li><Link to={"/albums"}>Albumok</Link></li>
                    <li><Link to={"/newartist"}>Új előadó felvétele</Link></li>
                    <li><Link to={"/newalbum"}>Új album felvétele</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Menu