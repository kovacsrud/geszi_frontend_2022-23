
function PlainUser({user,setDetail}) {
  return (
    <h2 onClick={()=>setDetail(prev=>!prev)}>{user.name.title} {user.name.first} {user.name.last}</h2>
  )
}

export default PlainUser