import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { GlobalStyle } from 'CreateGlobalStyle';
import { ContainerWrap } from 'components/Section/Section';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Fiter/Filter';
import { Title } from './App.styled';
import { useLocalStorage } from 'hooks/useLokalStorage';

export const App = () => {
  // const contacts = useSelector(state => state.contacts);
  const contacts = useSelector(getContacts);
  console.log(contacts);
  //   const [contacts, setContacts] = useLocalStorage("contacts", null);

  //   const addContact = (name, number) => {

  //     const checkName = contacts
  //       .map(contact => contact.name.toLowerCase())
  //       .some(contact => contact === name.toLowerCase());
  //     if (!checkName) {
  //       const newContact = {
  //         id: nanoid(),
  //         name,
  //         number,
  //       };

  //         setContacts (state=>[newContact, ...state]);
  //     } else {
  //       window.alert(`${name} is already in contacts `);
  //     }
  //   };

  //   const deleteContact = contactId => {

  //    setContacts(state => state.filter(contact => contact.id !== contactId))}

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#010101',
      }}
    >
      <GlobalStyle />
      <Title>Phonebook</Title>

      <ContainerWrap>
        <ContactForm />
      </ContainerWrap>
      <ContainerWrap title="Contacts">
        <Filter />
        {contacts.length > 0 && <ContactsList />}
      </ContainerWrap>
    </div>
  );
};
