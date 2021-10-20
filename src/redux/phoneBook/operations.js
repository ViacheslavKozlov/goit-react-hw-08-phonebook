import axios from "axios";
import {
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  delContactRequest,
  delContactSuccess,
  delContactError
} from "./actions";

axios.defaults.baseURL = "http://localhost:3030";

export const addContact = ({ name, number }) => (dispatch, getState) => {
  const contact = { name, number };
  // console.log(store);

  const contacts = getState().contacts.contacts;

  if (contacts?.some(contact => contact.name === name)) {
    return dispatch(addContactError(`${name} is exist`));
  }
  dispatch(addContactRequest());

  axios
    .post("/contacts", contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)));
};

export const deleteContact = id => dispatch => {
  dispatch(delContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(delContactSuccess(id)))
    .catch(error => dispatch(delContactError(error)));
};

export const getContact = () => dispatch => {
  dispatch(getContactsRequest());
  axios
    .get("/contacts")
    .then(({ data }) => dispatch(getContactsSuccess(data)))
    .catch(error => dispatch(getContactsError(error)));
};
