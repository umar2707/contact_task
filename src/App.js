import React, { useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import MyModal from "./components/MyModal";
import MySelect from "./components/MySelect";
import "./style/App.css";

function App() {
  const [contacts,setContacts] =useState([
    {
      id: 1,
      name: "Umar",
      tel: [
        998948900817,
        333333,
      ],
      adress: [
        'nizomiy',
        'afrasiyob',
      ],
      email: [
       'nurbekatajonov67@gmail.com',
       'asdd@gmail',
      ]
    },
  ]);
  const [forEdit,setForEdit] = useState([])
  const [modalShow, setModalShow] = React.useState(false);
  const createContact = (newContact)=>{
    setContacts([...contacts,newContact])
  }
  const removeContact = (contact)=>{
    setContacts(contacts.filter((c)=>c.id !== contact))
  }
  const editContact = (contact)=>{
    const editContacta=contacts.find((f)=>f.id == contact)
    setModalShow(true)
    setForEdit(editContacta)
  }
  return (
    <div className="App">
      <div className="container">
        <ContactForm create={createContact} contacts={contacts}/>
        <hr />
        {contacts.length !== 0 
          ? <ContactList  remove={removeContact} contacts={contacts} edit={editContact}/>
          : <h3 className="alert alert-danger">Contacts not found</h3>
        }
        {forEdit && (
          <MyModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            contact={forEdit}
          />
        )}
      </div>
    </div>
  );
}

export default App;
