import { useSelector } from "react-redux";
import { authSelectors } from "../../redux/authorization";

export default function HomePage() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return isLoggedIn ? <h1> Wellcome </h1> : <h1>Please log in or sign up</h1>;
}
