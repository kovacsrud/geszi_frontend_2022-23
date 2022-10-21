import PlainUser from './PlainUser';
import User from './User';
import {useState} from 'react';

function UserRender({user}) {

    const [detail,setDetail]=useState(false);

    if(!detail){
        return (
            <PlainUser user={user} setDetail={setDetail}/>
        );
    } else {
        return (
            <div>
                <PlainUser user={user} setDetail={setDetail}/>
                <User user={user} />
            </div>
        );
    }

  
}

export default UserRender