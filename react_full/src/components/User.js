
function User({user}) {

    //Komment
  return (
    <div className="card mb-3" style={{"max-width": "540px"}}>
    <div className="row g-0">
      <div className="col-md-4">
        <img src={user.picture.large} className="img-fluid rounded-start" alt="..."/>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{user.name.title} {user.name.first} {user.name.last}</h5>
          <p className="card-text">{user.location.city} {user.location.street.name} {user.location.street.number}</p>
          <p className="card-text">{user.email}</p>
          <p className="card-text">Phone:{user.phone} Cell:{user.cell}</p>
          
        </div>
      </div>
    </div>
  </div>
  )
}

export default User