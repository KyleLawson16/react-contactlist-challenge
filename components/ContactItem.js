import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../actions/contacts";
import { getFavoriteContactIndex } from "../selectors/contacts";

export default function ContactItem({ firstName, lastName, phone }) {
  const dispatch = useDispatch();
  const favorite = useSelector(
    getFavoriteContactIndex({ firstName, lastName, phone })
  );
  const buttonText = favorite > -1 ? "unfavorite" : "favorite";
  const button = (
    <button
      onClick={() =>
        dispatch(
          toggleFavorite({
            firstName,
            lastName,
            phone
          })
        )
      }
    >
      {buttonText}
    </button>
  );
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "1px solid #eee"
      }}
    >
      <p>
        {firstName} <strong>{lastName}</strong>
      </p>
      <p>{phone}</p>
      {button}
    </div>
  );
}
