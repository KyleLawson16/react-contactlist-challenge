import React from "react";
import { useDispatch } from "react-redux";

import { addFavorite, removeFavorite } from "./../actions/contacts";

import AddFavoriteIcon from "./Icons/AddFavoriteIcon";
import RemoveFavoriteIcon from "./Icons/RemoveFavoriteIcon";

export default function ContactItem({ firstName, lastName, phone, favorite }) {
  const dispatch = useDispatch();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "1px solid #eee"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <p>
          {firstName} <strong>{lastName}</strong>
        </p>
        {favorite ? (
          <RemoveFavoriteIcon
            handleClick={() => dispatch(removeFavorite(phone))}
          />
        ) : (
          <AddFavoriteIcon handleClick={() => dispatch(addFavorite(phone))} />
        )}
      </div>
      <p>{phone}</p>
    </div>
  );
}
