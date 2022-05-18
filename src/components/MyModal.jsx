import React, { useEffect, useState } from 'react'
import { Button, Modal, Row } from 'react-bootstrap'
import MyInput from './MyInput'

const MyModal = (props) => {
    const c = props.contact
    const [editedContact,setEditedContact] = useState([])
    useEffect(({props})=>{
        setEditedContact(props.contact)
        console.log('11');
    },[editedContact])
    console.log(editedContact);
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
                    <MyInput value={c.name} />
                </Row>
                <Row className='px-2'>
                    Email:
                    {c.email?.map((a,index)=>(
                        <div className='d-flex w-100 align-items-center'>
                            {index+1} <MyInput value={a}/>
                            <Button variant='outline-danger m-2' size='sm'>X</Button>
                        </div>
                    ))}
                    <span className='pl-3 text-secondary small add_span'>Add email</span>    
                </Row>
                                 
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default MyModal