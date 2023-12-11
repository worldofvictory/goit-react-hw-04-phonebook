import { useState } from "react";
import { nanoid } from 'nanoid';
import ContactForm from "./Form/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/filter";
import css from './App.module.css'


function App () {
    const [filter, setFilter] = useState(''); 
    


        useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts))
        }, [contacts])
        
 
    
    const formSubmit = (data) => {
        const {contacts}  = this.state
        if (contacts.some((contact) => contact.name.toLowerCase() === data.name.toLowerCase())) {
            alert(`${data.name} вже присутній`);
        } 
         return;
        }
        const id = nanoid();
        const newContacts = { id, ...data };
        this.setState(prev => ({
            contacts:[...prev.contacts, newContacts]
        }))
    }

  return (
    <div className={css.Container}>
                <h1>Phonebook</h1>
                <ContactForm submit={this.formSubmit} /> 
                <h2>Contacts</h2>
                <Filter value={filter} onChange={this.handleSearchChange} />
                <ContactList deleteContact={this.deleteContact} contacts={filteredContacts} />
           </div>
  )
    
    }

export default App



    state = {
        contacts: [
            {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ],
      
    }
   
 
  
   
    deleteContact = (id) => {
        this.setState(prev => ({
            contacts: prev.contacts.filter(el => el.id !== id)
        }))
    }
     handleSearchChange = (e) => {
    this.setState({ filter: e.target.value });
  };
 componentDidMount() { 
        const contacts = localStorage.getItem('contacts')
        const parsContacts = JSON.parse(contacts);
        if (parsContacts) {
            this.setState({contacts: parsContacts})
        }
    }
    
    
    render() {
        const {  contacts, filter } = this.state;
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
