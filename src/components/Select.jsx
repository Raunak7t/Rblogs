import React, { forwardRef, useId } from "react";

function Select({ options, label, ref, className, ...props }) {
  const id = useId();
  return (
    <div>
      {label && (
        <label className="block text-sm my-1" htmlFor={id}>
          {label}
        </label>
      )}
      <select
        id={id}
        {...props}
        className={` bg-slate-700 py-1 px-2 rounded border w-full ${className}`}
        ref={ref}
      >
        <option disabled selected>
          Select
        </option>
        {options.map((opt) => (
          <option key="opt" value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

export default forwardRef(Select);
