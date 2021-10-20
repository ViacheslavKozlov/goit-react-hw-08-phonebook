import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { addContactSuccess, addContactError, getContactsSuccess, delContactSuccess, changeFilter } from "./actions";

const contactsReducer = createReducer([], {
  [getContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [addContactError]: addContactErrFunc,
  [delContactSuccess]: delContactFunc
});

const filterReducer = createReducer("", {
  [changeFilter]: (_, { payload }) => payload
});

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer
});

// function addContactFunc(state, { payload }) {
//   if (state.some(contact => contact.name.toLocaleLowerCase() === payload.name.toLocaleLowerCase())) {
//     alert(`${payload.name} is alredy exist`);
//     return state;
//   }
//   return [...state, payload];
// }

function addContactErrFunc(_, { payload }) {
  alert(payload);
}

function delContactFunc(state, { payload }) {
  return state.filter(contact => contact.id !== payload);
}

export default rootReducer;
