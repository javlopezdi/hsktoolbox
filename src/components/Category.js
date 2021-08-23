import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const renderedWords = ["word1", "word2", "word3", "word4", "word5"].map(
    (word) => {
      return (
        <React.Fragment>
          <div className="py-2 mx-16">
            <p>{word}</p>
          </div>
          <div className="py-2 mx-16">
            <p>Excellent</p>
          </div>
        </React.Fragment>
      );
    }
  );

  return (
    <div>
      <div className="container mx-auto px-5">
        {/* Title */}
        <div className="pt-24 pb-8">
          <h2 className="text-6xl text-center">Category</h2>
        </div>
        {/* Words */}
        <div className="bg-semiWhite grid grid-cols-2 lg:mx-auto rounde shadow-md p-8 lg:w-1/2">
          <div className="py-8 text-center">
            <h3 className="font-semibold text-lg">Word</h3>
          </div>
          <div className="py-8 text-center">
            <h3 className="font-semibold text-lg">Strength</h3>
          </div>
          {renderedWords}
          <div className="col-span-2 text-center py-16">
            <Link to="/hsk1/progress">
              <button className="font-semibold bg-blueCrayola py-4 px-8 text-semiWhite text-lg">
                Return to Your Progress
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
