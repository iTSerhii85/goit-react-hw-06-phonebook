import { BsFillPersonFill } from 'react-icons/bs';
import { Item, List, DeleteButton } from './ContactList.style';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

const getFilteredContacts = (contacts, filterValue) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );
};

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();
  const visibleContacts = getFilteredContacts(contacts, filterValue);

  return (
    <List>
      {visibleContacts.map(contact => {
        return (
          <Item key={contact.id}>
            <div>
              <BsFillPersonFill />
              <span>{contact.name}:</span>
              <span>{contact.number}</span>
            </div>
            <DeleteButton
              type="button"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </DeleteButton>
          </Item>
        );
      })}
    </List>
  );
};
