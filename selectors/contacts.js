import { createSelector } from "reselect";

export const getContacts = state => state.contacts.data;

export const getContactsStatus = state => state.contacts.isFetching;

export const getFavorites = state => state.favorites;

export const getFavoriteContactIndex = contact => {
  return createSelector(getFavorites, favorites =>
    favorites.findIndex(
      favorite => JSON.stringify(favorite) === JSON.stringify(contact)
    )
  );
};

export const isFavorite = (state, contact) => {
  let contactIndex = state.favorites.findIndex(
    favorite => JSON.stringify(favorite) === JSON.stringify(contact)
  );

  return contactIndex > -1;
};
