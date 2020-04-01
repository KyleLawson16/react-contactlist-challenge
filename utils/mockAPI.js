/**
 * mockAPI.js
 * Example values to provide to the frontend
 */

const testValues = [
  { firstName: "alex", lastName: "lane", phone: "5429873456" },
  { firstName: "black", lastName: "smith", phone: "" },
  { firstName: "rich", lastName: "walker", phone: "542737-3246" },
  { firstName: "Alej", lastName: "Lexi", phone: "542-345-8721" },
  { firstName: "Erik", lastName: "lexi", phone: "(542)321-3456" },
  { firstName: "richardo", lastName: "julian", phone: "542 211 5678" },
  { firstName: "bill", lastName: "Alex", phone: "123-456-7890" }
];

export const resolveContacts = () =>
  new Promise(resolve => {
    const contacts = [
      ...testValues,
      { firstName: "Allen", lastName: "Lane", phone: "542-987-3456" },
      { firstName: "Jane", lastName: "Smith", phone: "" },
      { firstName: "Richard", lastName: "Walker", phone: "542-737-3246" },
      { firstName: "Alejandro", lastName: "Lane", phone: "542-345-8721" },
      { firstName: "Erin", lastName: "Larson", phone: "(542) 321-3456" },
      { firstName: "Richard", lastName: "Julian", phone: "542-211-5678" },
      { firstName: "Bill", lastName: "Allen", phone: "542-654-2154" }
    ];

    setTimeout(() => {
      resolve({ status: 200, data: contacts });
    }, 1000);
  });
