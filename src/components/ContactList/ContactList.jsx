import { Contact } from 'components/Contact/Contact';
import { useSelector } from 'react-redux';
import { getVisibleContacts } from 'components/redux/contacts/contacts-selector';

export const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);

  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return <Contact key={id} id={id} name={name} number={number} />;
      })}
    </ul>
  );
};
