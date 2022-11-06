
function Auto({auto}) {
  return (
    <div className="card m-2" style={{width:"18rem"}}>
    <div className="card-body">
    <h5 className="card-title">{auto.marka}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{auto.tipus}</h6>
    <p className="card-text">{auto.rendszam}</p>
    <p className="card-text">Kor:{auto.kor}</p>
    
     </div>
    </div>
  )
}

export default Auto