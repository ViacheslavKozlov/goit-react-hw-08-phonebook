import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { authSelectors } from "../../redux/authorization";
import style from "./Navigation.module.css";

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav className={style.nav}>
      <NavLink className={style.link} activeClassName={style.activeLink} to="/" exact>
        home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={style.link} activeClassName={style.activeLink} to="/phonebook" exact>
          phonebook
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
