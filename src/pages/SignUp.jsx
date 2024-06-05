import React from "react";
import { Button, Input, StyledText, Title } from "../components";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import { useForm } from "react-hook-form";
import authService from "../appwrite/auth";
import { useDispatch } from "react-redux";
import { login } from "../features/loginFeature";
import { toast } from "react-toastify";

function SignUp() {
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = async (data) => {
    try {
      const userData = await authService.signUp(data);
      if (userData) {
        const uData = await authService.getCurrentUser();
        if (uData) {
          dispatch(login(uData));
          navigate("/app");
        }
      }
      toast.success("Signed up!", {
        position: "top-center",
      });
    } catch (error) {
      toast.error(error.message, {
        position: "top-center",
      });
    }
  };

  return (
    <div>
      <Title>
        Sign up to{" "}
        <StyledText className="text-5xl tracking-wide ">Explore</StyledText>{" "}
        more
      </Title>
      <div className=" flex justify-center mt-8">
        <div className=" p-px rounded-lg bg-gradient-to-br from-purple-400 via-slate-700 to-purple-400">
          <form
            className=" rounded-lg bg-slate-900/90 px-6 py-4 w-96"
            onSubmit={handleSubmit(submit)}
          >
            <Input
              label="Name:"
              className="mb-3"
              {...register("name")}
              required
            />
            <Input
              label="E-mail:"
              className="mb-3"
              {...register("email")}
              required
            />
            <Input
              label="Password:"
              type="password"
              className="mb-3"
              {...register("password")}
              required
            />
            <p className="p-1 text-right">
              Already have an Account?{" "}
              <Link
                to="/app/login"
                className="hover:border-b-2 border-b-purple-300 text-purple-200 font-semibold text-lg"
              >
                Log-in
              </Link>
            </p>
            <Button type="submit" className="w-full my-3">
              Sign-up
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
