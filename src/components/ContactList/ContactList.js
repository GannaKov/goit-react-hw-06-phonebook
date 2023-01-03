import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
//import { deleteContact } from 'redux/actions';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';
import { ContactItem } from 'components/ContactItem/ContactItem';
import {
  ContactList,
  ContactListItem,
  FiltrSubmitBtn,
} from './ContactList.styled';

const getVisibleContacts = (contacts, filter) => {
  console.log('cont', contacts);

  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

export function ContactsList() {
  const dispatch = useDispatch();

  // const contacts = useSelector(state => state.contacts);

  const { contacts } = useSelector(getContacts);
  console.log('list', contacts);
  const filter = useSelector(getFilter);
  const handleDeleteContact = contactId => dispatch(deleteContact(contactId));
  // const filter = useSelector(state => state.filter);
  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <ContactList>
      {visibleContacts.map(contact => (
        <ContactListItem key={contact.id}>
          <ContactItem contact={contact} />
          <FiltrSubmitBtn
            type="button"
            onClick={() => handleDeleteContact(contact.id)}
          >
            Удалить
          </FiltrSubmitBtn>
        </ContactListItem>
      ))}
    </ContactList>
  );
}
ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ),
  onDelete: PropTypes.func,
};
// {/* <FiltrSubmitBtn
//   type="button"
//   onClick={() => onDeleteContact(contact.id)}
// ></FiltrSubmitBtn>; */}
