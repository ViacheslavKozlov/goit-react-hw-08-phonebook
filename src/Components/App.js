// import React from "react";
import { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSelectors, authOperations } from "../redux/authorization";
import PublicRout from "../Components/routes/PublicRoute";
import PrivateRout from "../Components/routes/PrivateRoute";
import AppBar from "./AppBar/AppBar";
import { Switch } from "react-router";

const HomePage = lazy(() => import("../pages/homePage/HomePage") /*webpackChunkName: 'HomePage' */);
const RegPage = lazy(() => import("../pages/regPage/RegPage") /*webpackChunkName: 'RegPage' */);
const LoginPage = lazy(() => import("../pages/loginPage/LoginPage") /*webpackChunkName: 'LoginPage' */);
const PhonebookPage = lazy(() => import("../pages/phonebookPage/PhonebookPage") /*webpackChunkName: 'PhonebookPage' */);

export default function App() {
  const dispatch = useDispatch();
  const isRefreshingUser = useSelector(authSelectors.getIsRefreshingUser);

  useEffect(
    () => {
      dispatch(authOperations.refreshCurrentUser());
    },
    [dispatch]
  );

  return (
    !isRefreshingUser && (
      <>
        <AppBar />
        <Switch>
          <Suspense
            fallback={
              <span style={{ display: "block", textAlign: "center", fontWeight: 500, fontSize: 20, marginTop: 100 }}>
                ... smth loading
              </span>
            }
          >
            <PublicRout exact path="/">
              <HomePage />
            </PublicRout>

            <PublicRout path="/register" restricted>
              <RegPage />
            </PublicRout>

            <PublicRout path="/login" restricted redirectTo="/phonebook">
              <LoginPage />
            </PublicRout>

            <PrivateRout path="/phonebook" restricted redirectTo="/login">
              <PhonebookPage />
            </PrivateRout>
          </Suspense>
        </Switch>
      </>
    )
  );
}
