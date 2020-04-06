import React from "react";

export default function FavoriteItem({ favorite }) {
  console.log(favorite);
  
  return (
    <div>
      <p>
        {favorite}
      </p>
    </div>
  );
}
