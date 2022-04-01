import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addCotact } from 'components/redux/contacts/contacts-actions';
import { getContacts } from 'components/redux/contacts/contacts-selector';

export const ContactForm = () => {
  const [name, setName] = useState('Bohdan Vozniak');
  const [number, setNumber] = useState('+380990172235');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (contacts.findIndex(contact => contact.name === name) !== -1) {
      alert(`${name} is already in contacts`);
      return;
    }
    dispatch(addCotact({ name, number }));
    reset();
  };

  const handleChange = e => {
    const currentTarget = e.currentTarget.name;
    const value = e.currentTarget.value;

    switch (currentTarget) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        throw Error(`CurrentTarget ${currentTarget} is invalid`);
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <br />
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          value={name}
        />
      </label>
      <br />
      <label>
        Number
        <br />
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          value={number}
        />
      </label>

      <br />
      <button type="submit">Add contact</button>
    </form>
  );
};
