/**
 * contacts.js
 * Reducers for contacts
 */

/**
 * Sorts array by lastName value then firstName value if lastName is the same
 * @param {Object} a 
 * @param {Object} b 
 */
const sortLastNameFirstName = (a, b) => {
  // Converts all to values to uppercase to ignore capitialization
  const lastNameA = a.lastName.toUpperCase();
  const lastNameB = b.lastName.toUpperCase();
  const firstNameA = a.firstName.toUpperCase();
  const firstNameB = b.firstName.toUpperCase();
  if (lastNameA < lastNameB) {
    return -1;
  } else if (lastNameA > lastNameB) {
    return 1;
  } else {
    if (firstNameA < firstNameB) {
      return -1;
    } else if (firstNameA > firstNameB) {
      return 1;
    } else {
      return 0;
    }
  }
};

const initialState = {
  data: [],
  // I have created a seperate list to store favorite contact values for the
  // scope of this project. However, if this were a production application I
  // would consider adding a favorite key with a boolean value to the contact
  // object.
  favorites: [],
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
        // For this situation I have included filtering inside the reducer as
        // contacts without a phone number are not used anywhere. However, if
        // these contacts without a phone number were to be used, I would
        // place the filter method inside a selector.
        data: action.data
          .filter((contact) => contact.phone !== '')
          .sort(sortLastNameFirstName),
        isFetching: false
      };
    case "FETCH_CONTACTS_FAILED":
      return {
        ...state,
        isFetching: false,
        hasError: true,
        errorMsg: "Something went wrong"
      };
    case 'ADD_FAVORITE':
      return {
        ...state,
        favorites: [
          ...state.favorites,
          state.data.find((contact) => contact.id === action.id),
        ],
      };
    case 'REMOVE_FAVORITE':
      return {
        ...state,
        favorites: [
          ...state.favorites.filter((contact) => contact.id !== action.id),
        ],
      }
    default:
      return state;
  }
}
