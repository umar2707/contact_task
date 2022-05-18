import React, { useEffect, useState } from 'react'
import { Button, Modal, Row } from 'react-bootstrap'
import MyInput from './MyInput'

const MyModal = (props) => {
    const { contact } = props
    //for maps 
    const [emails, setEmails] = useState([])
    const [adresss, setAdresss] = useState([])
    const [tels, setTels] = useState([])
    // ////////
    // for edit
    // console.log(emails,adresss,tels);
    const [editedName, setEditedName] = useState('')
    const [editedEmail, setEditedEmail] = useState([])
    const [editedAdress, setEditedAdress] = useState([])
    const [editedTel, setEditedTel] = useState([])

    useEffect(() => {
        setEmails(props.contact.email);
        setAdresss(props.contact.adress);
        setTels(props.contact.tel);
    }, [props.contact.email, props.contact.adress, props.contact.tel])

    //funksiya
    const funcEmail = (e, index) => {
        const { value } = e.target
        const list = [...editedEmail]

        list[index] = value
        setEditedEmail(list)
    }
    const funcAdres = (e, index) => {
        const { value } = e.target
        const list2 = [...editedAdress]
        list2[index] = value
        setEditedAdress(list2)
    }
    const funcTel = (e, index) => {
        const { value } = e.target
        const list3 = [...editedTel]
        list3[index] = value
        setEditedTel(list3)
    }
    //element qo'shish uchun
    const addElement = (e) => {
        e.preventDefault();
        //code
        switch (e.target.name) {
            case 'email':
                setEmails([...emails, 'new email'])
                break;
            case 'adress':
                setAdresss([...adresss, 'new adress'])
                break;
            case 'tel':
                setTels([...tels, 'new phone number'])
                break;
            default:
                break;
        }
    }
    //element o'chirish uchun
    const removeElement = (e, index) => {
        //code
        switch (e.target.name) {
            case 'email':

                break;
            case 'adress':

                break;
            case 'tel':

                break;
            default:
                break;
        }
    }
    const saveChanges = () => {
        const editedContact = {
            id: contact.id,
            name: editedName,
            email: editedEmail,
            adress: editedAdress,
            tel: editedTel
        }
        //o'zgartirish kiritilgan contactni App.js ga yuboramiz
        console.log(editedContact);
        props.editedCont(editedContact);
    }

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
                    <MyInput 
                        value={editedName} 
                        placeholder={contact.name} 
                        onChange={(e) => setEditedName(e.target.value)} /
                    >
                </Row>
                <Row className='px-2'>
                    Email:
                    {emails?.map((a, index) => (
                        <div className='d-flex w-100 align-items-center' key={index}>
                            <MyInput 
                                type='email' 
                                placeholder={a} 
                                onChange={(e) => funcEmail(e, index)} 
                            />
                            <Button 
                                name='email' 
                                onChange={(e, index) => removeElement(e, index)} 
                                variant='outline-danger m-2' size='sm'
                                >X
                            </Button>
                        </div>
                    ))}
                    <button 
                        name='email' 
                        onClick={e => addElement(e)} 
                        className='pl-3 text-secondary small add_button'>Add email
                    </button>
                </Row>
                <Row className='px-2'>
                    Adress:
                    {adresss?.map((a, index) => (
                        <div className='d-flex w-100 align-items-center' key={index}>
                            <MyInput 
                                type='text' 
                                placeholder={a} 
                                onChange={(e) => funcAdres(e, index)} />
                            <Button 
                                name='adress' 
                                onChange={(e, index) => removeElement(e, index)} 
                                variant='outline-danger m-2' size='sm'>X
                            </Button>
                        </div>
                    ))}
                    <button name='adress' onClick={e => addElement(e)} className='pl-3 text-secondary small add_button'>Add adress</button>
                </Row>
                <Row className='px-2'>
                    Telephone number:
                    {tels?.map((a, index) => (
                        <div className='d-flex w-100 align-items-center' key={index}>
                            <MyInput 
                                type='number' 
                                placeholder={a} 
                                onChange={(e) => funcTel(e, index)} />
                            <Button 
                                name='tel' 
                                onChange={(e, index) => removeElement(e, index)}
                                variant='outline-danger m-2' size='sm'>X
                            </Button>
                        </div>
                    ))}
                    <button name='tel' onClick={e => addElement(e)} className='pl-3 text-secondary small add_button'>Add number</button>
                </Row>

            </Modal.Body>
            <Modal.Footer>
                <Button 
                    onClick={saveChanges} 
                    variant='success'>Save changes
                </Button>
                <Button 
                    variant='secondary' 
                    onClick={props.onHide}>Close
                    </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default MyModal