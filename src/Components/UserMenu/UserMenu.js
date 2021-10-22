import { useDispatch, useSelector } from "react-redux";
import { authOperations, authSelectors } from "../../redux/authorization";
import style from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.getUserName);
  const logout = () => {
    dispatch(authOperations.logOut());
  };
  return (
    <div className={style.container}>
      <p>
        Wellcome, <span className={style.name}>{userName}</span>
      </p>
      <button className={style.logOutBtn} type="button" onClick={logout}>
        logout
      </button>
    </div>
  );
};

export default UserMenu;
