import React from "react";

const Input = ({ labelText, placeholder, width }) => {
  return (
    <div className="h-auto w-full">
      <label className="form-control" style={{ width: width }}>
        <div className="label">
          <span className="label-text font-inter text-[12px] font-bold leading-[12px] text-left">
            {labelText}
          </span>
        </div>
        <input
          type="text"
          placeholder={placeholder}
          className="input input-bordered w-full"
        />
      </label>
    </div>
  );
};

export default Input;
