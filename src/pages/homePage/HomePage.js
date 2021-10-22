import { useSelector } from "react-redux";
import { authSelectors } from "../../redux/authorization";
import style from "./HomePage.module.css";

export default function HomePage() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return isLoggedIn ? (
    <h1 className={style.headline}> Wellcome </h1>
  ) : (
    <h1 className={style.headline}>Please log in or sign up</h1>
  );
}
