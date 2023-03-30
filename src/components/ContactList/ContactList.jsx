import { Filter } from 'components/Filter/Filter';
import React from 'react';
import { ContactListItem } from './ContactListItem';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

// const getFilteredContacts = (contacts) => {
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(contact.toLowerCase())
//     );
//   };

export const ContactList = () => {
  //  const [filter, setFilter] = useState('');
  const contacts = useSelector(getContacts);

  // const changeFilter = evt => {
  //     setFilter(evt.currentTarget.value);
  //   };

  return (
    <>
      <h2>Contacts</h2>
      <Filter />
      <ContactListItem contacts={contacts} />
    </>
  );
};
