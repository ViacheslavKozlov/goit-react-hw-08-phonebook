import { useSelector } from "react-redux";
import { authSelectors } from "../../redux/authorization";
import AuthNavigation from "../AuthNavigation/AuthNavigation";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header>
      <Navigation /> {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
    </header>
  );
}
