import React from "react";
import { Button, Input, StyledText, Title } from "../components";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function LogIn() {
  const { register, getValues, setValue, watch } = useForm();
  return (
    <div>
      <Title>
        Welcome!{" "}
        <StyledText className="text-5xl tracking-wide ">Log in</StyledText> to
        continue
      </Title>
      <div className=" flex justify-center mt-8">
        <div className=" p-px rounded-lg bg-gradient-to-br from-purple-400 via-slate-700 to-purple-400">
          <form className=" rounded-lg bg-slate-900/90 px-6 py-4 w-96">
            <Input label="E-mail:" className="mb-3" />
            <Input label="Password:" type="password" className="mb-3" />
            <p className="p-1 text-right">
              Don't have an Account?{" "}
              <Link
                to="/app/signup"
                className="hover:border-b-2 border-b-purple-300 text-purple-200 font-semibold text-lg"
              >
                Sign-up
              </Link>
            </p>
            <Button className="w-full my-3">Log-in</Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
