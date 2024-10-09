import React from "react";
const Test = () => {
  return (
    <div className="w-full h-full px-5 pt-3 md:grid md:grid-cols-1 gap-4 bg-red-300">
      <div className="bg-yellow-200 h-36 md:col-span-1 flex md:flex-col">
        <div className="flex-1">
          <div className="bg-yellow-200 h-full"> </div>
        </div>
        <div className="flex-1">
          <div className="bg-green-200 h-full"> </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
