import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts } from "../actions/contacts";
import { getContacts } from "../selectors/contacts";
import ContactItem from "../components/ContactItem";

// Render a list of contacts alphabetically by last name, first name.
//
// The list should be broken up into sections where each section has
// a title of the first letter of the last names of contacts in that
// section.
//
// Contacts without a phone number should be ignored.
//
// Phone numbers should be displayed in a (xxx) xxx-xxxx format.
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

export default function ContactList({ addFavorites, removeFavorites }) {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  useEffect(() => {
    
  })

  const formatPhoneNumber = contacts.map(contact => {
    let phone = contact.phone
    let cleaned = ('' + phone).replace(/\D/g, '')
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3]
    } else {
      return null
    }
  })
  
  const sorted = contacts.sort((a, b) => a.lastName.localeCompare(b.lastName))
  .reduce((acc, val) => {
    const key = val.lastName[0];
    if(!acc[key]) acc[key] = []
    acc[key].push(val);
    return acc;
  }, {})

  

  

  console.log(formatPhoneNumber);
  
  return (
    <div style={{ width: 400 }}>
      {Object.entries(sorted).map(([letter, value], idx) => (
        <div key={idx}>
          <strong>{letter}</strong>
          {value.map((contact, index) => {
            return <ContactItem key={index} letter={letter} {...contact}  addFavorites={addFavorites} removeFavorites={removeFavorites} />
          })}
        </div>
      ))}
    </div>
    
  );
}
