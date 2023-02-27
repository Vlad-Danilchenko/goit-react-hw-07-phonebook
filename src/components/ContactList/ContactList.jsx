import { ContactUl, ContactLi } from './ContactList.styled';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { selectContacts, selectFilter } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterContacts = useSelector(selectFilter);
  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterContacts.toLowerCase())
    );
  };

  return (
    <ContactUl>
      {getVisibleContacts().map(({ id, name, phone }) => (
        <ContactLi key={id}>
          <ContactItem id={id} name={name} number={phone} />
        </ContactLi>
      ))}
    </ContactUl>
  );
};
