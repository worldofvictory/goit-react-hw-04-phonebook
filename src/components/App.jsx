import { useState, useEffect } from "react";
import { nanoid } from 'nanoid';
import ContactForm from "./Form/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/filter";
import css from './App.module.css'


function App() {
      const [contacts, setContacts] = useState(() => { 
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });
    const [filter, setFilter] = useState(''); 
    
    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts))
        }, [contacts])
        
  const formSubmit = ({ name, number }) => {
   const contact = {
     id: nanoid(),
     name,
     number,
   };
    
        if (contacts.find(prevContact => contact.name.toLowerCase() === contact.name.toLowerCase())) {
            alert(`${contact.name} вже присутній`);
    
         return;
}
          setContacts(prevContacts => [...prevContacts, {id: nanoid(), ...contact}]);
  }
       
     
   
    const deleteContact = (id) => {
        setContacts(prev => ({
            contacts: prev.contacts.filter(el => el.id !== id)
        }))
    }
        const handleSearchChange = (e) => {
    setFilter({ filter: e.target.value });
  };
const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <div className={css.Container}>
                <h1>Phonebook</h1>
                <ContactForm submit={formSubmit} /> 
                <h2>Contacts</h2>
                <Filter value={filter} onChange={handleSearchChange} />
                <ContactList deleteContact={deleteContact} contacts={filteredContacts} />
           </div>
  )
    
    }

export default App



   
 
  
   
    


    
    
  
    
