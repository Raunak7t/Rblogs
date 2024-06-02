import React from "react";

function Button({ children, type = "button", className, ...props }) {
  return (
    <button
      type={type}
      className={`px-5 py-2 rounded-lg text-white text-xl font-medium border border-current outline-none bg-gradient-to-tr hover:bg-gradient-to-tl from-purple-800 to-purple-400 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
