import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { authSelectors } from "../../redux/authorization";

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink to="/" exact>
        home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/phonebook" exact>
          phonebook
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
