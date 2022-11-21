import React from 'react';
import Proptypes from 'prop-types';
import s from './ContactList.module.css';

class ContactList extends React.Component {
  constructor(props) {
    super(props);
  }

  filterCallback = contact => {
    const { searchQuery } = this.props;
    const searchQueryToLowercase = searchQuery.toLowerCase();
    return contact.name.toLowerCase().includes(searchQueryToLowercase);
  };

  render() {
    const { contacts, deleteContact } = this.props;
    return (
      <ul className={s.list}>
        {contacts.filter(this.filterCallback).map(contact => (
          <li className={s.item} key={contact.id}>
            <span>
              {contact.name}: {contact.number}
            </span>
            <button
              className={s.button}
              onClick={() => deleteContact(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

ContactList.propTypes = {
  contacts: Proptypes.arrayOf(
    Proptypes.shape({
      id: Proptypes.string.isRequired,
      name: Proptypes.string.isRequired,
      number: Proptypes.string.isRequired,
    })
  ).isRequired,
  searchQuery: Proptypes.string.isRequired,
  deleteContact: Proptypes.func.isRequired,
};

export default ContactList;
