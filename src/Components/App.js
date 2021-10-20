// import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContact } from "../redux/phoneBook/operations";
import { getContacts } from "../redux/phoneBook/selectors";
import PhonebookForm from "./PhonebookForm/PhonebookForm";
import PhonebookHeadline from "./PhonebookHeadline/PhonebookHeadline";
import PhonebookList from "./PhonebookList/PhonebookList";
import PhonebookEmptyListHeadline from "./PhonebookListHeadline/PhonebookEmptyListHeadline";
import PhonebookListHeadline from "./PhonebookListHeadline/PhonebookListHeadline";
import PhonebookSearch from "./PhonebookSearch/PhonebookSearch";

export default function App() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(getContact());
    },
    [dispatch]
  );

  return (
    <>
      <PhonebookHeadline title="Phonebook" />
      <PhonebookForm contacts={contacts} />
      {contacts.length > 0 ? (
        <>
          <PhonebookListHeadline title="Contacts" />
          <PhonebookSearch />
          <PhonebookList contacts={contacts} />
        </>
      ) : (
        <>
          <PhonebookEmptyListHeadline title="Ur phonebook is empty" />
        </>
      )}
    </>
  );
}
