import React, { Component } from 'react';
import shortid from 'shortid';
import { ImCheckmark } from "react-icons/im";
import s from "./ContactForm.module.css";

class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    }

    nameInputId = shortid.generate();
    phoneNumberInputId = shortid.generate();

    handleInputChange = (event) => {
        const { name, value } = event.currentTarget;
        this.setState({ [name]: value , id: shortid.generate()});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    };

    reset = () => {
        this.setState({ name: '', number: '' });
    }


    render() {
        return (
          <form onSubmit = {this.handleSubmit}>
          <label htmlFor = {this.nameInputId} className={s.label}>
            Name
          <input
            type="text"
            name="name"
            className={s.input}
            value={this.state.name}
            onChange = {this.handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="
The name can only consist of letters, apostrophes, dashes and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan, etc."
            required
            id={this.nameInputId}
            autoComplete = "off"
          />
           </label>
                
            <label htmlFor={this.phoneNumberInputId} className={s.label}>
            Number 
            <input
            type="tel"
            name="number"
            className={s.input}
            value={this.state.number}
            onChange = {this.handleInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id={this.phoneNumberInputId}
            autoComplete = "off"
        />       
           </label>
                
          <button
          className={s.button}
          type="submit"
          >
            Add contact  <ImCheckmark color="rgb(11, 100, 11)" size="30px"/>
          </button>
        </form>
        )
    }
}

export default ContactForm;