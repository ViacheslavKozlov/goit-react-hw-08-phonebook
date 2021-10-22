import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/authorization";
import style from "./LoginPage.module.css";

export default function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };
  const resetForm = () => {
    setEmail("");
    setPassword("");
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    resetForm();
  };

  return (
    <div>
      <h1 className={style.headline}>Login form</h1>

      <form className={style.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={style.label}>
          Email
          <input className={style.input} type="email" name="email" value={email} onChange={handleChange} />
        </label>

        <label className={style.label}>
          Password
          <input className={style.input} type="password" name="password" value={password} onChange={handleChange} />
        </label>

        <button className={style.btn} type="submit">
          Log in
        </button>
      </form>
    </div>
  );
}
