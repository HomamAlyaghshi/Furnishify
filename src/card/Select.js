import React from "react";

const Select = ({
  labelText,
  firstOption,
  secoundOption,
  thiedOption,
  fourthOption,
  fifthOption,
}) => {
  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text">{labelText}</span>
      </div>
      <select className="select select-bordered">
        <option disabled selected>
          {firstOption}
        </option>
        <option>{secoundOption}</option>
        <option>{thiedOption}</option>
        <option>{fourthOption}</option>
        <option>{fifthOption}</option>
      </select>
    </label>
  );
};

export default Select;
