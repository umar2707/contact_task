import React, { useState } from 'react'
import { Button, Modal, Row } from 'react-bootstrap'
import MyInput from './MyInput'

const MyModal = (props) => {
    const {contact} = props
    const [editedName,setEditedName] = useState('')
    const [editedEmail,setEditedEmail] = useState([])
    //funksiya
    const funcEmail= (e,index)=>{
        console.log({index:e.target.value})
    }
    console.log(contact);
    
    return (
        <Modal
            {...props}
            size='lg'
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <Row className='px-2' >
                    Name:
                    <MyInput value={editedName} placeholder={contact.name}  onChange={(e)=>setEditedName(e.target.value)}/>
                </Row>
                <Row className='px-2'>
                    Email:
                    {contact.email?.map((a,index)=>(
                        <div className='d-flex w-100 align-items-center'>
                            {index+1} <MyInput placeholder={a} onChange={(e,index)=>funcEmail(e,index)}/>
                            <Button variant='outline-danger m-2' size='sm'>X</Button>
                        </div>
                    ))}
                    <span className='pl-3 text-secondary small add_span'>Add email</span>    
                </Row>
                                 
            </Modal.Body>
            <Modal.Footer>
                <Button variant='success'>Save changes</Button>
                <Button variant='secondary' onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default MyModal