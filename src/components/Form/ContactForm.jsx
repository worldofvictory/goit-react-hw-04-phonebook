import { useState } from "react";
import css from './contactform.module.css'



const ContactForm = (submit) => {
    const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const handleChange = (event) => {
        const { name, value } = event.currentTarget;
        switch (name) {
            case 'name':
                setName(value);
                break;
            
            case 'number':
                setNumber(value);
                break;
            
            default:
                return;
        }
    }


 const handleSubmit = (e) => {
   e.preventDefault();
   submit(name, number);
  setName({ name: '' })
  setNumber ({number: '' })
    }
     

  return (
    <form onSubmit={handleSubmit}>
  <div className={css.mb}>
    <label htmlFor="Name" className="form-label">
  Name
                        </label>
                    <input
         pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
         required
         value={name}
         onChange={handleChange}
         name="name"
         type="text"
         className="form-control"
          id="Name" />
     </div>
     <div className={css.mb}>
        <label htmlFor="Number" className="form-label">
           Number
           </label>
            <input
           pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              value={number}
                        onChange={handleChange}
                        name="number"
                        type="number"
                        className="form-control"
                        id="Number" />
                    </div>
                        <button type="submit" className="btn btn-primary">
                            Add contact
                        </button>
</form>
  )
}

export default ContactForm






  

    

 
  
