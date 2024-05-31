import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/loginFeature";

const loginStore = configureStore({
  reducer: loginReducer,
});

export default loginStore;
