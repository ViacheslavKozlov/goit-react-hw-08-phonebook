import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { contactsActions, contactsSelectors } from "../../redux/phoneBook";
import style from "./PhonebookSearch.module.css";

const PhonebookSearch = () => {
  const value = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();

  const onChange = evt => {
    dispatch(contactsActions.changeFilter(evt.currentTarget.value));
  };

  return (
    <div className={style.formWarpper}>
      <label className={style.searchLabel}>
        Find contact by name
        <input
          className={style.inputField}
          type="text"
          name="filter"
          value={value}
          onChange={onChange}
          autoComplete="off"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
    </div>
  );
};

export default PhonebookSearch;
