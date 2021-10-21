import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { contactsOperations, contactsSelectors } from "../../redux/phoneBook";
import style from "./PhonebookList.module.css";

export default function PhonebookList() {
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(contactsOperations.getContact());
    },
    [dispatch]
  );

  const filteredContacts = useSelector(contactsSelectors.getVisibleContacts);

  const deleteBtnHandler = id => {
    dispatch(contactsOperations.deleteContact(id));
  };

  return (
    <>
      <ul className={style.listWrapper}>
        {filteredContacts.map(contact => (
          <li className={style.listItem} key={contact.id}>
            <span className={style.listItemdData}>
              {contact.name}: <a href="tel:+{contact.number}">{contact.number}</a>
            </span>
            <button className={style.listItemBtn} type="button" onClick={() => deleteBtnHandler(contact.id)}>
              delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
