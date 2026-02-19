import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/contacts/contactsOperations';
import ContactList from '../components/ContactList';
import ContactForm from '../components/ContactForm';

export default function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ContactForm />
      <ContactList />
    </div>
  );
}
