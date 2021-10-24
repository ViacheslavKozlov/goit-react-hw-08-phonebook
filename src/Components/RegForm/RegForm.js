import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/authorization/index";
import style from "./RegForm.module.css";

const RegForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };
  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    resetForm();
  };

  return (
    <div className={style.container}>
      <h1 className={style.headline}>Registration form</h1>
      <form className={style.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={style.label}>
          Name
          <input className={style.input} type="text" name="name" value={name} onChange={handleChange} />
        </label>

        <label className={style.label}>
          Email
          <input className={style.input} type="email" name="email" value={email} onChange={handleChange} />
        </label>

        <label className={style.label}>
          Password
          <input className={style.input} type="password" name="password" value={password} onChange={handleChange} />
        </label>

        <button className={style.btn} type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default RegForm;
