
function Select({setDb}) {
  return (
  <select onChange={(e)=>{setDb(e.target.value)}} className="form-select m-5">
  <option selected value="5">5</option>
  <option value="10">10</option>
  <option value="20">20</option>
  <option value="30">30</option>
  <option value="50">50</option>
</select>
  )
}

export default Select