import React from "react";

function Title({ children }) {
  return (
    <div className=" text-center text-4xl pb-5 pt-3 font-semibold ">
      <h1 className="border-b-4 border-b-purple-400 inline py-2 px-3 rounded-xl">
        {children}
      </h1>
    </div>
  );
}

export default Title;
