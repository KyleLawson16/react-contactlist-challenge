import React from "react";

// Considered making AddFavoriteIcon and RemoveFavoriteIcon one reusable function, but I think it might be more readable to be split

export default function RemoveFavoriteIcon({ handleClick }) {
  return (
    <img
      src="https://image.flaticon.com/icons/svg/1828/1828961.svg"
      alt="remove from favorites icon"
      onClick={handleClick}
      style={{
        margin: "5px",
        width: "15px",
        height: "15px"
      }}
    />
  );
}
