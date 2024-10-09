import React from "react";

const BlogNav = ({ setLayout }) => {
  return (
    <div className="md:max-h-[40px] w-full flex gap-[32px] justify-around">
      <div className="flex justify-between items-center w-[153px] gap-[40px] whitespace-nowrap">
        <button>All Blog</button>
        <button>Featured</button>
      </div>

      {/* قائمة الاختيارات */}
      <div className="flex items-center space-x-2 -mr-96">
        <select
          id="sort"
          name="sort"
          className="px-3 py-2 focus:outline-none hidden md:block"
          onChange={(e) => setLayout(e.target.value)}
        >
          <option value="3x3">3 X 3</option>
          <option value="2x2">2 X 2</option>
          <option value="1x1">1 X 1</option>
        </select>
      </div>

      {/* أيقونات العرض */}
      <div className="hidden md:block">
        <div className="flex justify-between gap-3  md:max-w-[184px] ">
          <button onClick={() => setLayout("3x3")}>
            <img
              alt="3X3"
              src="/images/3x3.png"
              className="bg-white hover:bg-background_50"
            />
          </button>
          <button onClick={() => setLayout("2x2")}>
            <img
              alt="2X2"
              src="/images/2x2.png"
              className="bg-white hover:bg-background_50"
            />
          </button>
          <button onClick={() => setLayout("1x1")}>
            <img
              alt="1X1"
              src="/images/1x1-1.png"
              className="bg-white hover:bg-background_50"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogNav;
