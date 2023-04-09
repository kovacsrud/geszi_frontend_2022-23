import {Link} from 'react-router-dom';

function LinkCard({linkText,utvonal}) {
  return (
    <div className="m-5 card w-96 bg-primary text-primary-content">
    <div className="card-body">
      <h2 className="card-title">{linkText}</h2>
      <Link to={utvonal}>Tovább...</Link>
      <div className="card-actions justify-end">
        
      </div>
    </div>
  </div>
  )
}

export default LinkCard