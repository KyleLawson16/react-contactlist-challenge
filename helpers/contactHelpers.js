// Sorts by lastname, then firstname
export const sortContacts = (a, b) => {
  var aLastChar = a.lastName;
  var bLastChar = b.lastName;
  if (aLastChar > bLastChar) {
    return 1;
  } else if (aLastChar < bLastChar) {
    return -1;
  } else {
    var aFirstChar = a.firstName;
    var bFirstChar = b.firstName;
    if (aFirstChar > bFirstChar) {
      return 1;
    } else if (aFirstChar < bFirstChar) {
      return -1;
    } else {
      return 0;
    }
  }
};

// Ensures numbers are (222) 222-2222 format
export const normalizePhoneNumbers = contact => {
  let normalizedNumber = contact.phone;
  normalizedNumber = normalizedNumber.replace(/[^\d]/g, "");
  if (normalizedNumber.length == 10) {
    normalizedNumber = normalizedNumber.replace(
      /(\d{3})(\d{3})(\d{4})/,
      "($1) $2-$3"
    );
  }
  contact.phone = normalizedNumber;
  return contact;
};

// Creates a copy, filters invalid numbers (too short, too long), sorts, and then normalizes.
export const normalizeContacts = contacts => {
  return contacts
    .slice()
    .filter(contact => contact.phone.length > 0 && contact.phone.length >= 10)
    .sort(sortContacts)
    .map(contact => normalizePhoneNumbers(contact));
};

export const addContactToFavorites = (contacts, phone) => {
  return contacts.map(contact => {
    if (contact.phone === phone) {
      contact.favorite = true;
    }
    return contact;
  });
};

export const removeContactFromFavorites = (contacts, phone) => {
  return contacts.map(contact => {
    if (contact.phone === phone) {
      contact.favorite = false;
    }
    return contact;
  });
};
