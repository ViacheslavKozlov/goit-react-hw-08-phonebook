import { NavLink } from "react-router-dom";

const AuthNavigation = () => {
  return (
    <>
      <NavLink to="/register" exact>
        register
      </NavLink>
      <NavLink to="/login" exact>
        login
      </NavLink>
    </>
  );
};

export default AuthNavigation;
