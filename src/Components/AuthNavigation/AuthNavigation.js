import { NavLink } from "react-router-dom";
import style from "./AuthNavigation.module.css";

const AuthNavigation = () => {
  return (
    <div className={style.container}>
      <NavLink className={style.link} activeClassName={style.activeLink} to="/register" exact>
        register
      </NavLink>
      <NavLink className={style.link} activeClassName={style.activeLink} to="/login" exact>
        login
      </NavLink>
    </div>
  );
};

export default AuthNavigation;
