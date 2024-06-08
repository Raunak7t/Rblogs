import React from "react";
import { StyledText } from "../components/";
import img2 from "../assets/bg.gif";
import { Link } from "react-router-dom";
import { FaRightLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(45deg, #110022cc, #0005), url(${img2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="h-screen flex items-center px-40 justify-center gap-10 backdrop-blur-xl flex-wrap">
        <div className="left">
          <h1 className="text-9xl">
            <StyledText>R blogs</StyledText>
          </h1>
          <h3 className="text-4xl font-bold mt-12">
            Your daily dose of{" "}
            <StyledText className="text-5xl">Insightful</StyledText> arcticles.
          </h3>
        </div>
        <div className="right">
          <Link
            to="/app"
            className="text-2xl font-bold bg-slate-800/50 py-3 px-12 rounded-2xl border transition-all duration-500 hover:bg-purple-400/40"
          >
            Get Started <FaRightLong className="inline text-3xl" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
