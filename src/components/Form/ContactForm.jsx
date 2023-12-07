import { Component } from "react";
import css from './contactform.module.css'

class ContactForm extends Component{
    state = {
    name: '',
    number:''
    }

    handleSubmit = (e) => {
   e.preventDefault();
   this.props.submit(this.state);
   this.reset();
    }

    reset = () => {
       this.setState({name:'', number:''})
    }

    handleChange= ({ target:{ value, name}}) =>{
    this.setState({[name]:value})
    }
    render() {
   return (
    <form onSubmit={this.handleSubmit}>
  <div className={css.mb}>
    <label htmlFor="Name" className="form-label">
  Name
                        </label>
                    <input
         pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
         required
         value={this.state.name}
         onChange={this.handleChange}
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
              value={this.state.number}
                        onChange={this.handleChange}
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
}
export default ContactForm