import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import CategoryCard from "./CategoryCard";

const Progress = ({ selectedHsk }) => {
  return (
    <div>
      <div className="container mx-auto px-5">
        {/* Title */}
        <div className="pt-24 pb-8">
          <h2 className="text-6xl text-center">Your Progress</h2>
        </div>
        {/* Overall progress */}
        <div className="py-8">
          <h5 className="text-center text-lg">
            Excellent, you already know ...% of the vocabulary!
          </h5>
        </div>
        <div className="text-center items-center text-lg font-semibold">
          <h5 className="">Pump those numbers</h5>
          <Link to={`/${selectedHsk}/practice`}>
            <button className="my-4 py-2 px-4 font-bold rounded bg-verdigris text-white transition duration-200 transform hover:-translate-y-1">
              Practice now!
            </button>
          </Link>
        </div>
        {/* Categories progress */}
        <div className="grid md:grid-cols-2">
          <CategoryCard category="Nouns" />
          <CategoryCard category="Verbs" />
          <CategoryCard category="Numbers" />
          <CategoryCard category="Classifiers" />
          <CategoryCard category="Adjectives" />
          <CategoryCard category="Adverbs" />
          <CategoryCard category="Pronouns" />
          <CategoryCard category="Other" />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { selectedHsk: state.hsk.selectedHsk };
};

export default connect(mapStateToProps)(Progress);
