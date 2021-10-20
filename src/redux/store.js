import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../redux/phoneBook/reducers";

const store = configureStore({
  reducer: { contacts: rootReducer },
  devTools: process.env.NODE_ENV === "development"
});

// eslint-disable-next-line import/no-anonymous-default-export
export default { store };
