//import './App.css';
import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import Container from './components/container/Container';
import ContactForm from './components/contactForm/ContactForm';
import Filter from './components/filter/Filter';
import ContactList from './components/contactList/ContactList';
class App extends Component {
  state = {
    contacts: [],
    filter: ''
  }

  componentDidMount() {

    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
    }

  addContact = (newContact) => {
    if (this.state.contacts.find(contact => contact.name === newContact.name)) {
      toast.warn(`${newContact.name} is already in your phonebook!`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));

    toast.success(`${newContact.name} has been added to your phonebook!`);
  };

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
    toast.warn("Contact deleted from your phonebook!");
  };

  changeFilter = (event) => {
    this.setState({ filter: event.currentTarget.value });
  }

  handleBlur = () => {
   if (this.getVisibleContacts().length === 0) {
     toast.error("No contact found. Enter the correct request!")
    } else {
      toast.success(` ${this.getVisibleContacts().length} contacts found!`)
    }
  }

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
   
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };
  
  render() {
    const visibleContacts = this.getVisibleContacts();
   
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          />
        <h2>Contacts</h2>
        <Filter
          value={this.state.filter}
          onChange={this.changeFilter}
          onBlur={this.handleBlur}
        />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
     </Container>
    );
  }
}

export default App;
