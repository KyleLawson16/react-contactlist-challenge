import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts } from "../actions/contacts";
import { getContacts, getFavorites } from "../selectors/contacts";
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

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const favorites = useSelector(getFavorites);

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  console.log(favorites)

  // JSX
  const contactsJSX = contacts.map((contact, index, array) => {
    const currentLetter = contact.lastName[0].toUpperCase();
    if (!index) {
      // Provides header for first contact item
      return (
        <Fragment key={index}>
          <p>{currentLetter}</p>
          <ContactItem {...contact} />
        </Fragment>
      );
    } else if (index < array.length - 1) {
      const nextLetter = array[index + 1].lastName[0].toUpperCase();
      if (currentLetter !== nextLetter) {
        // Provides header for all other contact items
        return (
          <Fragment key={index}>
            <ContactItem {...contact} />
            <p>{nextLetter}</p>
          </Fragment>
        )
      } else {
        return (
          <ContactItem key={index} {...contact} />
        )
      }
    }
  })

  return (
    <div style={{ width: 400 }}>
      {contactsJSX}
    </div>
  );
}
