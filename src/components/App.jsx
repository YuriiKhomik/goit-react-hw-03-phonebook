import { Component } from 'react';
import { nanoid } from 'nanoid';
import { PhonebookForm } from './PhonebookForm';
import { ContactList } from './ContactList';
import { Box } from './Box';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <Box p="4">
        <h1>Phonebook</h1>
        <PhonebookForm onSubmit={this.addContact} />
        <h1>Contacts</h1>
        <ContactList contacts={contacts} />
      </Box>
    );
  }
}
