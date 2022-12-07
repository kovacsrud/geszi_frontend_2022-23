import {Link} from 'react-router-dom';

function Fooldal() {
  return (
    <div>
        <h2>Üdvözli a Cat Facts oldal!</h2>
        <Link to='/fact'><span className="badge text-bg-primary mx-2">Random tény macskákról</span></Link>
        <Link to='/facts'><span className="badge text-bg-primary mx-2">Random tények macskákról</span></Link>
        <Link to='/breeds'><span className="badge text-bg-primary mx-2">Macskafajták</span></Link>
    </div>
  )
}

export default Fooldal