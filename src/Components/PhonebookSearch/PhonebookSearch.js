import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/phoneBook/actions";
import style from "./PhonebookSearch.module.css";

const PhonebookSearch = () => {
  const value = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const onChange = evt => {
    dispatch(actions.changeFilter(evt.currentTarget.value));
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
