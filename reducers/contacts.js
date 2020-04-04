import {
  addContactToFavorites,
  removeContactFromFavorites,
  normalizeContacts
} from "../helpers/contactHelpers";

// Using helpers here to make the reducer more declarative and easier to read

const initialState = {
  data: [],
  isFetching: null,
  hasError: false,
  errorMsg: null
};

export default function contacts(state = initialState, action) {
  switch (action.type) {
    case "FETCH_CONTACTS_FETCHING":
      return {
        ...state,
        isFetching: true,
        hasError: false,
        errorMsg: null
      };
    case "FETCH_CONTACTS_COMPLETE":
      return {
        ...state,
        data: normalizeContacts(action.data),
        isFetching: false
      };
    case "FETCH_CONTACTS_FAILED":
      return {
        ...state,
        isFetching: false,
        hasError: true,
        errorMsg: "Something went wrong"
      };
    case "ADD_CONTACT_TO_FAVORITES":
      return {
        ...state,
        data: addContactToFavorites(state.data, action.data)
      };
    case "REMOVE_CONTACT_FROM_FAVORITES":
      return {
        ...state,
        data: removeContactFromFavorites(state.data, action.data)
      };
    default:
      return state;
  }
}
