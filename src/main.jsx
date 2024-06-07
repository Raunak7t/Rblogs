import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import loginStore from "./store/loginStore.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  AddBlog,
  AllBlogs,
  BlogView,
  EditBlog,
  Home,
  LandingPage,
  Layout,
  LogIn,
  MyBlogs,
  SignUp,
} from "./pages/";
import AuthLayout from "./components/AuthLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <LandingPage /> },
      {
        path: "app",
        element: <Layout />,
        children: [
          {
            path: "",
            element: (
              <AuthLayout auth={true}>
                <Home />
              </AuthLayout>
            ),
          },
          {
            path: "add-blog",
            element: (
              <AuthLayout auth={true}>
                <AddBlog />
              </AuthLayout>
            ),
          },
          {
            path: "my-blogs",
            element: (
              <AuthLayout auth={true}>
                <MyBlogs />
              </AuthLayout>
            ),
          },
          {
            path: "all-blogs",
            element: (
              <AuthLayout auth={true}>
                <AllBlogs />
              </AuthLayout>
            ),
          },
          {
            path: "blog-view/:id",
            element: (
              <AuthLayout auth={true}>
                <BlogView />
              </AuthLayout>
            ),
          },
          {
            path: "edit-blog/:id",
            element: (
              <AuthLayout auth={true}>
                <EditBlog />
              </AuthLayout>
            ),
          },
          {
            path: "login",
            element: (
              <AuthLayout auth={false}>
                <LogIn />
              </AuthLayout>
            ),
          },
          {
            path: "signup",
            element: (
              <AuthLayout auth={false}>
                <SignUp />
              </AuthLayout>
            ),
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={loginStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
