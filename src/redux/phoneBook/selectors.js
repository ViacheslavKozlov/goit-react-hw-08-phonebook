import { createSelector } from "@reduxjs/toolkit";

const getContacts = state => state.contacts.contacts;

const getFilter = state => state.contacts.filter;

const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normilizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normilizedFilter));
  }
);

const contactsSelectors = { getContacts, getFilter, getVisibleContacts };

export default contactsSelectors;
