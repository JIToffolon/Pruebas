import React, { useEffect,useState } from 'react'
import { Message } from './Message';
import './effects.css'

export const SimpleForm = () => {

    const [formState, setformState] = useState({
        name:'',
        email:''
    });

    const {name,email}=formState;

    useEffect(()=>{
        console.log('hey');
    }, []);

    const handleInputChange = ({target})=>{
       setformState({
        ...formState,
        [target.name]: target.value

       })
    }

  return (
    <>
    <h1>UseEffect</h1>
    <br/>
    <div className='form-group'>
        <input
        
        type='text'
        name='name'
        className='form-control'
        placeholder='Tu nombre'
        autoComplete='off'
        value={name}
        onChange={handleInputChange}
        
        />
    </div>
    <div className='form-group'>
        <input
        
        type='text'
        name='email'
        className='form-control'
        placeholder='example@gmail.com'
        autoComplete='off'
        value={email}
        onChange={handleInputChange}
        
        />
    </div>


    { (name==='123',email==='juanignaciotoffolon@gmail.com') && <Message/>}


    </>
  )
}
