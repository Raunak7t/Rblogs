import React, { useState } from "react";
import { Button, Input, StyledText, Title } from "../components";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import authService from "../appwrite/auth";
import { useDispatch } from "react-redux";
import { login } from "../features/loginFeature";
import { toast } from "react-toastify";

function LogIn() {
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [btnLoad, setBtnLoad] = useState(false);

  const submit = async (data) => {
    try {
      setBtnLoad(true);
      const userData = await authService.logIn(data);
      if (userData) {
        const uData = await authService.getCurrentUser();
        if (uData) {
          dispatch(login(uData));
          navigate("/app");
        }
      }
      toast.success("Logged in!", {
        position: "top-center",
      });
    } catch (error) {
      toast.error(error.message, {
        position: "top-center",
      });
    }
    setBtnLoad(false);
  };

  return (
    <div className="pb-14">
      <Title>
        Welcome!{" "}
        <StyledText className="text-5xl tracking-wide sm:text-3xl ">
          Log in
        </StyledText>{" "}
        to continue
      </Title>
      <div className=" flex justify-center mt-8">
        <div className=" p-px rounded-lg bg-gradient-to-br from-purple-400 via-slate-700 to-purple-400">
          <form
            className=" rounded-lg bg-slate-900/90 px-6 py-4 w-96"
            onSubmit={handleSubmit(submit)}
          >
            <Input
              {...register("email")}
              required
              label="E-mail:"
              type="email"
              className="mb-3"
            />
            <Input
              {...register("password")}
              required
              label="Password:"
              type="password"
              className="mb-3"
            />
            <p className="p-1 text-right">
              Don't have an Account?{" "}
              <Link
                to="/app/signup"
                className="hover:border-b-2 border-b-purple-300 text-purple-200 font-semibold text-lg"
              >
                Sign-up
              </Link>
            </p>
            <Button className="w-full my-3" type="submit" isLoading={btnLoad}>
              Log-in
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
