import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/phoneBook/operations";
import { getVisibleContacts } from "../../redux/phoneBook/selectors";
import style from "./PhonebookList.module.css";

export default function PhonebookList() {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(getVisibleContacts);

  const deleteBtnHandler = contact => dispatch(deleteContact(contact.id));

  return (
    <>
      <ul className={style.listWrapper}>
        {filteredContacts.map(contact => (
          <li className={style.listItem} key={contact.id}>
            <span className={style.listItemdData}>
              {contact.name}: <a href="tel:+{contact.number}">{contact.number}</a>
            </span>
            <button className={style.listItemBtn} type="button" onClick={() => deleteBtnHandler(contact)}>
              delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
