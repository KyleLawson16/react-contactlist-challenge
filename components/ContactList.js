import React, { Fragment, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchContacts } from "../actions/contacts";
import { getContacts } from "../selectors/contacts";

import ContactItem from "./ContactItem";
import ContactSectionHeader from "./ContactSectionHeader";

export default function ContactList() {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const prevCharSection = useRef("");

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  return (
    <div style={{ width: 400 }}>
      {contacts.map((contact, idx) => {
        const currentFirstChar = contact.lastName.charAt(0);
        if (prevCharSection.current !== currentFirstChar) {
          prevCharSection.current = currentFirstChar;
          return (
            <Fragment>
              <ContactSectionHeader char={currentFirstChar} />
              <ContactItem key={contact.phone} {...contact} />
            </Fragment>
          );
        } else return <ContactItem key={contact.phone} {...contact} />;
      })}
    </div>
  );
}
