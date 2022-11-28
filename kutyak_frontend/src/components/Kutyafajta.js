
function Kutyafajta({fajta,kapcsol}) {
  return (
    <div><p onClick={kapcsol}>{fajta.nev},{fajta.eredetinev}</p></div>
  )
}

export default Kutyafajta