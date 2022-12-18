import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <h3>Rendelő</h3>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link to='/' className="nav-link" >Főoldal</Link>
        <Link className="nav-link" >Kutyanevek</Link>
        <Link to='/kutyafajtak' className="nav-link" >Kutyafajták</Link>
        <Link to='/ujkutyafajta' className="nav-link" >Új fajta felvitele</Link>
        <Link to='/kutyak' className="nav-link" >Rendelési adatok</Link>
        <Link to='/ujkutya' className="nav-link" >Új rendelési adat felvitele</Link>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar