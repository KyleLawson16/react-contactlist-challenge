import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, modifyFavorite } from '../actions/contacts';
import { getContacts } from '../selectors/contacts';
import { checkPhones } from '../utils/util';
import ContactItem from './ContactItem';

// [x] Render a list of contacts alphabetically by last name, first name.
//
// [ ] The list should be broken up into sections where each section has
//     a title of the first letter of the last names of contacts in that
//     section.
//
// [x] Contacts without a phone number should be ignored.
//
// [x] Phone numbers should be displayed in a (xxx) xxx-xxxx format.
//
// Ex.
// J
// –––––––
// Richard Julian – (542) 211-5678
//
// L
// –––––––
// Alejandro Lane – (542) 345-8721
// Allen Lane – (542) 987-3456
// Erin Larson – (542) 321-3456
// .....

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const validContacts = checkPhones(contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  return (
    <div style={{ width: 400 }}>
      {validContacts.map((contact, idx) => (
        <ContactItem
          key={idx}
          id={idx}
          {...contact}
          modifyFavorite={contact => dispatch(modifyFavorite(contact))}
        />
      ))}
    </div>
  );
}
