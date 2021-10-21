import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/authorization/index";

export default function RegPage() {
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
    // resetForm();
  };

  return (
    <div>
      <h1>Registration form</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Name
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>

        <label>
          Email
          <input type="email" name="email" value={email} onChange={handleChange} />
        </label>

        <label>
          Password
          <input type="password" name="password" value={password} onChange={handleChange} />
        </label>

        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}
