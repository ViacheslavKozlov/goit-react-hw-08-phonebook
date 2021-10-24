import axios from "axios";
import contactsActions from "./actions";

const addContact = ({ name, number }) => (dispatch, getState) => {
  const contact = { name, number };

  const contacts = getState().contacts.contacts;

  if (contacts?.some(contact => contact.name === name)) {
    return dispatch(contactsActions.addContactError(`${name} is exist`));
  }
  dispatch(contactsActions.addContactRequest());

  axios
    .post("/contacts", contact)
    .then(({ data }) => dispatch(contactsActions.addContactSuccess(data)))
    .catch(error => dispatch(contactsActions.addContactError(error)));
};

const deleteContact = contactId => dispatch => {
  dispatch(contactsActions.delContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(contactsActions.delContactSuccess(contactId)))
    .catch(error => dispatch(contactsActions.delContactError(error)));
};

const getContact = () => dispatch => {
  dispatch(contactsActions.getContactsRequest());
  axios
    .get("/contacts")
    .then(({ data }) => dispatch(contactsActions.getContactsSuccess(data)))
    .catch(error => dispatch(contactsActions.getContactsError(error)));
};

const contactsOperations = { getContact, addContact, deleteContact };

export default contactsOperations;
