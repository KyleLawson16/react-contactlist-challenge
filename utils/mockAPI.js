export const resolveContacts = () =>
  new Promise(resolve => {
    const contacts = [
      {
        firstName: "Allen",
        lastName: "Lane",
        phone: "542-987-3456",
        favorite: false
      },
      { firstName: "Jane", lastName: "Smith", phone: "", favorite: false },
      {
        firstName: "Richard",
        lastName: "Walker",
        phone: "542-737-3246",
        favorite: false
      },
      {
        firstName: "Alejandro",
        lastName: "Lane",
        phone: "542-345-8721",
        favorite: false
      },
      {
        firstName: "Erin",
        lastName: "Larson",
        phone: "(542) 321-3456",
        favorite: false
      },
      {
        firstName: "Richard",
        lastName: "Julian",
        phone: "542-211-5678",
        favorite: false
      },
      {
        firstName: "Bill",
        lastName: "Allen",
        phone: "542-654-2154",
        favorite: false
      }
    ];
    // Added a key of favorite: false to the contact data here, but if we were retrieving this from a source that we couldn't adjust,
    // we could map through and add a favorite of false to all contacts after retrieving the data here and then return that. ie,
    // const processedContacts = contacts.map((contact) => contact.favorite = false));

    setTimeout(() => {
      resolve({ status: 200, data: contacts });
    }, 1000);
  });
