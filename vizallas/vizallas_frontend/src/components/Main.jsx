import {Link} from 'react-router-dom';
import LinkCard from './LinkCard';

function Main() {
  return (
    <div>
    <h2 className='text-center text-xl my-20'>Üdvözli a vízállás portál!</h2>
    <LinkCard linkText={"Igazgatóságok"} utvonal={"/igazgatosag"} />
    <LinkCard linkText={"Készültség"} utvonal={"/keszultseg"} />
    </div>



  )
}

export default Main