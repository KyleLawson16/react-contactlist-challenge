import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchContacts } from "../actions/contacts";
import { getContacts } from "../selectors/contacts";

import ContactItem from "./ContactItem";

export default function FavoriteContactList({ favorite }) {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  return (
    <div style={{ width: 400 }}>
      {contacts
        .filter(contact => contact.favorite)
        .map(contact => (
          <ContactItem key={contact.phone} {...contact} />
        ))}
    </div>
  );
}
