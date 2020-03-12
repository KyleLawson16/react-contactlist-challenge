import { insertItem, removeItem } from "./helpers";

const initialState = {
  data: [],
  isFetching: null,
  hasError: false,
  errorMsg: null
};

function contacts(state = initialState, action) {
  switch (action.type) {
    case "FETCH_CONTACTS_FETCHING":
      return {
        ...state,
        isFetching: true,
        hasError: false,
        errorMsg: null
      };
    case "FETCH_CONTACTS_COMPLETE":
      const formattedContacts = action.data
        .filter(contact => contact.phone !== "")
        .map(contact => {
          let numbers = contact.phone.match(/\d+/g).map(Number);
          contact.phone = `(${numbers[0]}) ${numbers[1]} - ${numbers[2]}`;
          return contact;
        })
        .sort((a, b) =>
          a.lastName + a.firstName > b.lastName + b.firstName ? 1 : -1
        );
      return {
        ...state,
        data: formattedContacts,
        isFetching: false
      };
    case "FETCH_CONTACTS_FAILED":
      return {
        ...state,
        isFetching: false,
        hasError: true,
        errorMsg: "Something went wrong"
      };
    default:
      return state;
  }
}

function favorites(state = [], action) {
  switch (action.type) {
    case "TOGGLE_FAVORITE":
      let favorites = state;
      let contactIndex = favorites.findIndex(
        contact => JSON.stringify(contact) === JSON.stringify(action.contact)
      );
      if (contactIndex > -1) {
        favorites = removeItem(favorites, contactIndex);
      } else {
        favorites = insertItem(favorites, action.contact);
      }

      return favorites.sort((a, b) =>
        a.lastName + a.firstName > b.lastName + b.firstName ? 1 : -1
      );
    default:
      return state;
  }
}

export { contacts, favorites };
