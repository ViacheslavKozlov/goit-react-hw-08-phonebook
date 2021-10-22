import { useSelector } from "react-redux";
import { authSelectors } from "../../redux/authorization";
import AuthNavigation from "../AuthNavigation/AuthNavigation";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import style from "./AppBar.module.css";

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={style.header}>
      <Navigation /> {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
    </header>
  );
}
