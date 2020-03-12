import React from "react";
import Head from "next/head";

import ContactList from "../components/ContactList";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap"
      }}
    >
      <Head>
        <title>Next.js App</title>
      </Head>

      <div>
        <h1>Contacts</h1>
        <ContactList />
      </div>

      <div>
        <h1>Favorites</h1>
        <ContactList listFavorites />
      </div>
    </div>
  );
}
