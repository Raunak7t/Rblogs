import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "Login Data",
  initialState: { isGuest: false, isLogin: false, userData: null },
  reducers: {
    login: (state, action) => {
      state.isLogin = true;
      state.userData = action.payload;
    },
    logout: (state) => {
      state.isGuest = false;
      state.isLogin = false;
      state.userData = null;
    },
    guestLogin: (state) => {
      state.isGuest = true;
    },
  },
});

export default loginSlice.reducer;
export const { login, logout, guestLogin } = loginSlice.actions;
