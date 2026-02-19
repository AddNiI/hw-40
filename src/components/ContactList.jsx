import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contacts/contactsOperations';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          {contact.name} - {contact.number}
          <button onClick={() => dispatch(deleteContact(contact.id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
