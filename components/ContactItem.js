/**
 * ContactItem.js
 * Component displaying contact information
 */

import React from "react";

export default function ContactItem({ firstName, lastName, phone }) {
  const phoneString = phone.replace(/\D/g, '');

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "1px solid #eee"
      }}
    >
      <p style={{textTransform: 'capitalize'}}>
        {firstName} <strong>{lastName}</strong>
      </p>
      <p>{`(${phoneString.substring(0,3)}) ${phoneString.substring(3,6)}-${phoneString.substring(6,10)}`}</p>
    </div>
  );
}
