import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  return (
    <div className="bg-semiWhite flex flex-col justify-around h-48 xl:h-64 w-72 xl:w-3/4 mx-auto my-5 rounded-xl shadow-md p-3 transition duration-200 transform hover:-translate-y-1">
      {/* Title */}
      <div className="text-center text-lg font-semibold" text->
        {category}
      </div>
      {/* Progress elements */}
      <div className="p-4 flex items-center space-x-4">
        {/* Container bar */}
        <div className="flex-grow border-2 h-11">
          {/* Filling bar */}
          <div
            className="bg-blueCrayola bg-opacity-80 h-full"
            style={{ width: "80%" }}
          ></div>
        </div>
        {/* Progress number */}
        <div className="ml-auto">
          <p className="font-bold">2/8</p>
        </div>
      </div>
      {/* Word list */}
      <div className="text-center">
        <Link to={`progress/${category.toLowerCase()}`}>
          <button className="text-white font-bold py-4 px-6 shadow-md rounded bg-blueCrayola">
            Word List
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
