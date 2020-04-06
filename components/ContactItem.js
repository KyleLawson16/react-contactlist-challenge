import React from "react";

import formatPhoneNumber from '../utils/formatNumber'

export default function ContactItem({ firstName, lastName, phone, addFavorites, removeFavorites }) {
  
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "1px solid #eee"
      }}
    >
    {phone
      ? (
      <div>
        
        <br/>
        <br/>
        <p>
          {firstName} <strong>{lastName}</strong>
        </p>
        <button onClick={() => addFavorites(firstName)}>Add to Favorites</button>
        <button onClick={() => removeFavorites(firstName)}>Remove Favorites</button>
        <p>{formatPhoneNumber(phone)}</p>
      </div>
      )
      : null
    }    
    
      
    </div>
  );
}
