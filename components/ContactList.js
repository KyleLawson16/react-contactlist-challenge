import React, { useEffect } from "react";
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

export default function ContactList({ listFavorites }) {
  const dispatch = useDispatch();
  const contacts = listFavorites
    ? useSelector(getFavorites)
    : useSelector(getContacts);

  if (!listFavorites) {
    useEffect(() => {
      dispatch(fetchContacts());
    }, []);
  }

  let charMap = new Map();

  return (
    <div style={{ width: 400 }}>
      {contacts.map((contact, idx) => {
        let firstChar = contact.lastName.charAt(0);
        if (!charMap.get(firstChar)) {
          charMap.set(firstChar, true);
          return [
            <p key={firstChar + "_separator"}>
              {firstChar}
              <br />
              –––––––
            </p>,
            <ContactItem key={idx} {...contact} favorite={listFavorites} />
          ];
        } else {
          return (
            <ContactItem key={idx} {...contact} favorite={listFavorites} />
          );
        }
      })}
    </div>
  );
}

ContactList.defaultProps = {
  listFavorites: false
};
