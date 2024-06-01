import React, { forwardRef, useId } from "react";

function Input({ label, type, className, ref, ...props }) {
  const id = useId();
  return (
    <div>
      {label && (
        <label className="block text-sm my-1" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        {...props}
        className={` bg-slate-700 py-1 px-2 rounded border w-full ${className}`}
        ref={ref}
      />
    </div>
  );
}

export default forwardRef(Input);
