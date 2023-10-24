import React from 'react'; 
import './Avatar.css';
import 'bootstrap/dist/css/bootstrap.css';

const AvatarList = (props) => {
    return (
        <div className='avatar-style col m-2 p-2 d-flex flex-column align-items-center'>
            <img src={`https://joesch.moe/api/v1/${props.name}`} alt='avatar'/>
            <h1>{props.name}</h1>
            <p>{props.work}</p>
        </div>
    )
}

export default AvatarList;