import React, { useState } from 'react';
import MyInput from './MyInput'

const ContactForm = ({ create }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState([''])
    const [adress, setAdress] = useState([''])
    const [tel, setTel] = useState([''])
    const [emailZ, setEmailZ] = useState(false)
    const [emailError,setEmailError] = useState('this field cannot be empty')
    const [error,setError] = useState(true)
    const handleEmail = (e) => {
        setEmail([e.target.value])
        const re =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!re.test(String(e.target.value).toLowerCase())){
            setEmailError('The @ sign must be present')
        }else{
            setEmailError('')
            setError(false)
        }
    }
    const handleCreateContact = (e) => {
        e.preventDefault()
        if(error){
            alert('The @ sign must be present')
        }
        else{
            const newContact = {
                id: Date.now(),
                name,
                email,
                adress,
                tel
            }
            create(newContact)
            setError(true)
            setName('')
            setEmail([''])
            setAdress([''])
            setTel([''])
        }
        
    }
    const blurHandler = (e) => {
        if (e.target.name !== 'email') {
            setEmailZ(true)
        }
    }

    return (
        <form className='form border rounded p-2 w-50 bg-light'>
            <div className="form_child">
                <div className="form-group">
                    <label className='form__label'>Contact Add App</label>
                    <MyInput value={name} onChange={e => setName(e.target.value)} type='text' placeholder='Enter name' />
                </div>
                <div className="form-group">
                    <label className='form__label'> Email</label>
                    {(emailZ && emailError) && <div className='text-danger'>{emailError}</div>}
                    <MyInput value={email} onChange={e => handleEmail(e)} onBlur={e => blurHandler(e)} type='email' placeholder='Enter email' />
                </div>
                <div className="form-group">
                    <label className='form__label'> Adress</label>
                    <MyInput value={adress} onChange={e => setAdress([e.target.value])} type='text' placeholder='Enter adress' />
                </div>
                <div className="form-group">
                    <label className='form__label'> Phone number</label>
                    <MyInput value={tel} onChange={e => setTel([e.target.value])} type='number' placeholder='Enter phone number' />
                </div>
            </div>
            <button className="btn btn-primary" onClick={handleCreateContact}>Create</button>
        </form>
    )
}

export default ContactForm
