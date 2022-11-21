import React from 'react';
import Title from './common/Title';
import ContactForm from './ContactForm';
import SubTitle from './common/SubTitle';
import Filter from './Filter';
import ContactList from './ContactList';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      { id: 'id-5', name: 'test', number: '227-91-26' },
    ],
    searchQuery: '',
  };

  addContact = contact => {
    const { contacts } = this.state;
    const duplicate = contacts.find(el => el.name === contact.name);
    if (duplicate) {
      alert(`${duplicate.name} is already in contacts`);
      return;
    }

    this.setState(prevState => ({
      ...prevState,
      contacts: [...prevState.contacts, contact],
    }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      ...prevState,
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  setSearchQuery = value => {
    this.setState(prevState => ({
      ...prevState,
      searchQuery: value,
    }));
  };

  render() {
    const { searchQuery, contacts } = this.state;

    return (
      <div className="app">
        <Title title="Phonebook" />
        <ContactForm addContact={this.addContact} />

        <SubTitle title="Contacts" />
        <Filter setSearchQuery={this.setSearchQuery} value={searchQuery} />
        <ContactList
          contacts={contacts}
          searchQuery={searchQuery}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
