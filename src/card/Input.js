import React from "react";

const Input = ({ labelText, placeholder }) => {
  return (
    <div className="h-full w-full">
      {" "}
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text font-inter text-[12px] font-bold leading-[12px] text-left">
            {labelText}
          </span>
        </div>
        <input
          type="text"
          placeholder={placeholder}
          className="input input-bordered w-full max-w-xs"
        />
      </label>
    </div>
  );
};

export default Input;
