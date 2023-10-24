import React, {useState} from 'react'; 
import 'bootstrap/dist/css/bootstrap.css';
import AvatarList from './AvatarList';

const Avatar = () => {

    const [Header, setHeader] = useState('Welcome to Avatar World')
    const handleHeaderState = () => {
        if(Header === 'Welcome to Avatar World'){
            setHeader('Welcome to this React App');
        }else{
            setHeader('Welcome to Avatar World');
        }
    } 

    const avatarListArray = [
        {
            id: 1, 
            name: 'Person1',
            work: 'Job1'
        },
        {
            id: 2, 
            name: 'Person2',
            work: 'Job2'
        },
        {
            id: 3, 
            name: 'Person3',
            work: 'Job3'
        },
        {
            id: 4, 
            name: 'Person4',
            work: 'Job4'
        }
    ];

    const avatarMap = avatarListArray.map((avatarItem, idx) => {
        return <
            AvatarList key={idx} id={avatarItem.id}
            name={avatarItem.name}
            work={avatarItem.work}
            />
    });

    return (
        <div className='text-center'>
            <h1 className='text-center'>{Header}</h1>
            <div className='container'>
                <div className='row'>
                    {avatarMap}
                </div>
            </div>
            <button onClick={handleHeaderState} className='btn-hover btn btn-outline-dark'>Click to change state</button>
        </div>
    )
}

export default Avatar;