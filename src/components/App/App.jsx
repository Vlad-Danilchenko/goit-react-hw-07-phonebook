import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { Container, CardContainer, MainTite, Title } from './App.styled';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';

export function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <MainTite>Phonebook</MainTite>
      <Container>
        <CardContainer>
          <ContactForm />
        </CardContainer>
        <CardContainer>
          <Title>Contacts</Title>
          <Filter />
          {isLoading && !error && <b>Request in progress...</b>}
          <ContactList />
        </CardContainer>
      </Container>
    </>
  );
}
