import React, { useState } from "react";
import Head from "next/head";

import ContactList from "../components/ContactList";
import FavoriteList from "../components/FavoriteList";

export default function Home() {
  
  const [favorites, setFavorites] = useState([])

  const addFavorites = (favorite) => {
    if (!favorites.some(alreadyFavorite => alreadyFavorite == favorite)) {
      setFavorites([...favorites, favorite])
    }
  }
  
  const removeFavorites = firstName => {
    setFavorites(favorites.filter(item => item !== firstName))
  }
  console.log(favorites);
  
  return (
    <div>
      <Head>
        <title>Next.js App</title>
      </Head>

      <h1>Contacts</h1>

      <ContactList addFavorites={addFavorites} removeFavorites={removeFavorites} />

      <h1>Favorites</h1>
     
      <FavoriteList favorites={favorites} />
     
      
    </div>
  );
}
