import React from "react";
import { Button, Input, StyledText, Title } from "../components";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div>
      <Title>
        Sign up to{" "}
        <StyledText className="text-5xl tracking-wide ">Explore</StyledText>{" "}
        more
      </Title>
      <div className=" flex justify-center mt-8">
        <div className=" p-px rounded-lg bg-gradient-to-br from-purple-400 via-slate-700 to-purple-400">
          <form className=" rounded-lg bg-slate-900/90 px-6 py-4 w-96">
            <Input label="Name:" className="mb-3" />
            <Input label="E-mail:" className="mb-3" />
            <Input label="Password:" type="password" className="mb-3" />
            <p className="p-1 text-right">
              Already have an Account?{" "}
              <Link
                to="/app/login"
                className="hover:border-b-2 border-b-purple-300 text-purple-200 font-semibold text-lg"
              >
                Log-in
              </Link>
            </p>
            <Button className="w-full my-3">Sign-up</Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
