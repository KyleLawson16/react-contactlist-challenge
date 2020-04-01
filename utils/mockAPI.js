/**
 * mockAPI.js
 * Example values to provide to the frontend
 */

const testValues = [
  { id: 8,  firstName: "alex", lastName: "lane", phone: "5429873456" },
  { id: 9,  firstName: "black", lastName: "smith", phone: "" },
  { id: 10,  firstName: "rich", lastName: "walker", phone: "542737-3246" },
  { id: 11,  firstName: "Alej", lastName: "Lexi", phone: "542-345-8721" },
  { id: 12,  firstName: "Erik", lastName: "lexi", phone: "(542)321-3456" },
  { id: 13,  firstName: "richardo", lastName: "julian", phone: "542 211 5678" },
  { id: 14,  firstName: "bill", lastName: "Alex", phone: "123-456-7890" }
];

export const resolveContacts = () =>
  new Promise(resolve => {
    // I added in an id key value pair as typically these values exist when
    // retrieving values from the database. However, if this does not work I can
    // fall back on other unique identifiers (i.e. phone numbers if possible) or
    // provide each their own identifier in store.
    const contacts = [
      ...testValues,
      { id: 1, firstName: "Allen", lastName: "Lane", phone: "542-987-3456" },
      { id: 2, firstName: "Jane", lastName: "Smith", phone: "" },
      { id: 3, firstName: "Richard", lastName: "Walker", phone: "542-737-3246" },
      { id: 4, firstName: "Alejandro", lastName: "Lane", phone: "542-345-8721" },
      { id: 5, firstName: "Erin", lastName: "Larson", phone: "(542) 321-3456" },
      { id: 6, firstName: "Richard", lastName: "Julian", phone: "542-211-5678" },
      { id: 7, firstName: "Bill", lastName: "Allen", phone: "542-654-2154" }
    ];

    setTimeout(() => {
      resolve({ status: 200, data: contacts });
    }, 1000);
  });
