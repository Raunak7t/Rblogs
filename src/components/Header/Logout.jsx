import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../features/loginFeature";
import authService from "../../appwrite/auth";

function Logout() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    authService
      .logOut()
      .then(() => {
        dispatch(logout());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <li>
      <button
        className={` py-1 px-4 text-lg font-semibold rounded-md`}
        onClick={handleLogout}
      >
        Log Out
      </button>
    </li>
  );
}

export default Logout;
