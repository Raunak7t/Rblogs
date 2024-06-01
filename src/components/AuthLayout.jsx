import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

function AuthLayout({ children, auth = false }) {
  const navigate = useNavigate();

  const isLogin = useSelector((state) => state.isLogin);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (auth && isLogin !== auth) {
      navigate("/app/login");
    } else if (!auth && isLogin !== auth) {
      navigate("/app");
    }
    setLoading(false);
  }, [isLogin, auth]);

  return <>{loading ? <Loading /> : children}</>;
}

export default AuthLayout;
