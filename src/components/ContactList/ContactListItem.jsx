import PropTypes from 'prop-types';
import { BsFillPersonFill } from 'react-icons/bs';
import { Item, List, DeleteButton } from './ContactList.style';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactListItem = ({ contacts }) => {
  const dispatch = useDispatch();

  return (
    <List>
      {contacts.map(contact => {
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

ContactListItem.protoType = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
