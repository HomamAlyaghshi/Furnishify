import React from "react";

const AddCart = ({ label, width, height, onClick }) => {
  return (
    <button
      className="mt-4 bg-blackButton text-white rounded w-full"
      style={{ width: width, height: height }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default AddCart;
