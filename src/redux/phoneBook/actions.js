import { createAction } from "@reduxjs/toolkit";

export const getContactsRequest = createAction("contacts/getContactsRequest");
export const getContactsSuccess = createAction("contacts/getContactsSuccess");
export const getContactsError = createAction("contacts/getContactsError");

export const addContactRequest = createAction("contacts/addContactRequest");
export const addContactSuccess = createAction("contacts/addContactSuccess");
export const addContactError = createAction("contacts/addContactError");

export const delContactRequest = createAction("contacts/delContactRequest");
export const delContactSuccess = createAction("contacts/delContactSuccess");
export const delContactError = createAction("contacts/delContactError");

export const changeFilter = createAction("contacts/filter");
