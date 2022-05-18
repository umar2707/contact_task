import React from 'react'
import ContactItem from './ContactItem'

const ContactList = ({contacts,remove,edit}) => {
    return (
        <div >
            <h4 className='text-center text-light'>Contact List</h4>
            <div className="row">
                {contacts.map(contact=>(
                    <ContactItem id={contact.id} edit={edit} remove={remove} key={contact.id} name={contact.name} numbers={contact.tel} adress={contact.adress} emails={contact.email}/>
                ))}
            </div>
        </div>
    )
}

export default ContactList
