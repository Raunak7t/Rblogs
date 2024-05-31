import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const loginSlice = createSlice({
  name: "Login Data",
  initialState: { isLogin: false, userData: null },
  reducers: {
    login: (state, action) => {
      state.isLogin = true;
      state.userData = action.payload;
    },
    logOut: (state) => {
      state.isLogin = false;
      state.userData = null;
    },
  },
});

export default loginSlice.reducer;
export const { login, logout } = loginSlice.actions;
