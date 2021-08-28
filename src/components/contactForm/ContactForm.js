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
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
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
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
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