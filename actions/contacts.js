import { resolveContacts } from "../utils/mockAPI";

export const fetchContacts = () => async dispatch => {
  dispatch({ type: "FETCH_CONTACTS_FETCHING" });

  try {
    const contacts = await resolveContacts();
    dispatch({ type: "FETCH_CONTACTS_COMPLETE", data: contacts.data });
  } catch (err) {
    dispatch({ type: "FETCH_CONTACTS_FAILED" });
  }
};

// Using phone here for simplicities sake, if multiple numbers had to be accounted for, ids would be better.
export const addFavorite = phone => dispatch => {
  dispatch({ type: "ADD_CONTACT_TO_FAVORITES", data: phone });
};

export const removeFavorite = phone => dispatch => {
  dispatch({ type: "REMOVE_CONTACT_FROM_FAVORITES", data: phone });
};
