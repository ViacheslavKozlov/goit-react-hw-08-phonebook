import { useDispatch, useSelector } from "react-redux";
import { authOperations, authSelectors } from "../../redux/authorization";

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.getUserName);
  const logout = () => {
    dispatch(authOperations.logOut());
  };
  return (
    <>
      <span>{userName}</span>
      <button type="button" onClick={logout}>
        logout
      </button>
    </>
  );
};

export default UserMenu;
