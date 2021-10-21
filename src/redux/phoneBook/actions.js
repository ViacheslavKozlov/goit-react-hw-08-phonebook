import { createAction } from "@reduxjs/toolkit";

const getContactsRequest = createAction("contacts/getContactsRequest");
const getContactsSuccess = createAction("contacts/getContactsSuccess");
const getContactsError = createAction("contacts/getContactsError");

const addContactRequest = createAction("contacts/addContactRequest");
const addContactSuccess = createAction("contacts/addContactSuccess");
const addContactError = createAction("contacts/addContactError");

const delContactRequest = createAction("contacts/delContactRequest");
const delContactSuccess = createAction("contacts/delContactSuccess");
const delContactError = createAction("contacts/delContactError");

const changeFilter = createAction("contacts/filter");

const contactsActions = {
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  delContactRequest,
  delContactSuccess,
  delContactError,
  changeFilter
};

export default contactsActions;
