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
      state.isLogin = false;
      state.userData = null;
    },
  },
});

export default loginSlice.reducer;
export const { login, logout } = loginSlice.actions;
