import React from "react";
import Container from "../Container";
import Logo from "../Logo";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Logout from "./Logout";

function Header() {
  const isLogin = useSelector((state) => state.isLogin);
  const userData = useSelector((state) => state.userData);

  const navLinks = [
    {
      path: "/app/my-blogs",
      name: "My Blogs",
      active: isLogin,
      exact: true,
    },
    {
      path: "/app",
      name: "All Blogs",
      active: isLogin,
      exact: true,
    },
    {
      path: "/app/add-blog",
      name: "Add Blog",
      active: isLogin,
    },
    {
      path: "/app/login",
      name: "Log In",
      active: !isLogin,
    },
    {
      path: "/app/signup",
      name: "Sign Up",
      active: !isLogin,
    },
  ];

  return (
    <header className=" bg-slate-800/50 fixed top-0 left-0 right-0 backdrop-blur z-50">
      <Container className="py-2 flex items-center justify-between gap-8">
        <div className="left flex items-center gap-24">
          <Link to="/">
            <Logo />
          </Link>
          <p className="text-lg font-semibold">Hey, {userData?.name}!</p>
        </div>
        <nav>
          <ul className=" flex items-center gap-4">
            {navLinks.map(
              (nav) =>
                nav.active && (
                  <li key={nav.path}>
                    <NavLink
                      to={nav.path}
                      end={nav.exact}
                      className={({ isActive }) =>
                        `${
                          isActive
                            ? "border-b-2 border-b-purple-400 bg-slate-700/50"
                            : ""
                        } py-1 px-4 text-lg font-semibold rounded-md`
                      }
                    >
                      {nav.name}
                    </NavLink>
                  </li>
                )
            )}
            {isLogin && <Logout />}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
