import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import contactsActions from "./actions";
import { authOperations } from "../authorization";

const contacts = createReducer([], {
  [contactsActions.getContactsSuccess]: (_, { payload }) => payload,
  [contactsActions.addContactSuccess]: (state, { payload }) => [...state, payload],
  [contactsActions.addContactError]: addContactErrFunc,
  [contactsActions.delContactSuccess]: delContactFunc,
  [authOperations.logOut.fulfilled]: () => []
});

const filter = createReducer("", {
  [contactsActions.changeFilter]: (_, { payload }) => payload
});

const loading = createReducer(false, {
  [contactsActions.getContactsRequest]: () => true,
  [contactsActions.getContactsSuccess]: () => false,
  [contactsActions.getContactsError]: () => false,
  [contactsActions.addContactRequest]: () => true,
  [contactsActions.addContactSuccess]: () => false,
  [contactsActions.addContactError]: () => false,
  [contactsActions.delContactRequest]: () => true,
  [contactsActions.delContactSuccess]: () => false,
  [contactsActions.delContactError]: () => false
});

const error = createReducer(null, {
  [contactsActions.getContactsError]: (_, { payload }) => payload,
  [contactsActions.addContactError]: (_, { payload }) => payload,
  [contactsActions.delContactError]: (_, { payload }) => payload,
  [contactsActions.getContactsSuccess]: () => null,
  [contactsActions.addContactSuccess]: () => null,
  [contactsActions.delContactSuccess]: () => null
});

function addContactErrFunc(_, { payload }) {
  alert(payload);
}

function delContactFunc(state, { payload }) {
  return state.filter(contact => contact.id !== payload);
}

export default combineReducers({
  contacts,
  filter,
  loading,
  error
});
