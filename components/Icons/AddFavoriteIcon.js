import React from "react";

export default function AddFavoriteIcon({ handleClick }) {
  return (
    <img
      src="https://image.flaticon.com/icons/svg/1828/1828970.svg"
      alt="add to favorites icon"
      onClick={handleClick}
      style={{
        margin: "5px",
        width: "15px",
        height: "15px"
      }}
    />
  );
}
