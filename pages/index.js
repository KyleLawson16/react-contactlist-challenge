import React from "react";
import Head from "next/head";

import ContactList from "../components/ContactList";
import FavoriteContactsList from "../components/FavoriteContactsList";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js App</title>
      </Head>
      <div>
        <h1>Contacts</h1>
        <ContactList />
      </div>
      <div>
        <h1>Favorites</h1>
        <FavoriteContactsList />
      </div>
    </div>
  );
}
