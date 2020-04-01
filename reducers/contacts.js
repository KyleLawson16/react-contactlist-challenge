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
        data: action.data.sort(sortLastNameFirstName),
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
