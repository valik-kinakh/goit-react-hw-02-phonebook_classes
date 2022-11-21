import React from 'react';
import Proptypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import s from './ContactForm.module.css';
import Label from '../common/Label';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.name = React.createRef();
    this.number = React.createRef();
  }

  handleSubmit = e => {
    e.preventDefault();
    const { addContact } = this.props;

    console.log({
      name: this.name.current.value,
      number: this.number.current.value,
      id: uuidv4(),
    });

    addContact({
      name: this.name.current.value,
      number: this.number.current.value,
      id: uuidv4(),
    });
  };

  render() {
    return (
      <section className={s.form}>
        <form onSubmit={this.handleSubmit}>
          <div className={s.container}>
            <Label htmlFor="name" text="Name" />
            <input id="name" ref={this.name} required />
          </div>
          <div className={s.container}>
            <Label htmlFor="number" text="Number" />
            <input
              ref={this.number}
              id="number"
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </div>

          <button type="submit">Add contact</button>
        </form>
      </section>
    );
  }
}

ContactForm.propTypes = {
  addContact: Proptypes.func.isRequired,
};

export default ContactForm;
