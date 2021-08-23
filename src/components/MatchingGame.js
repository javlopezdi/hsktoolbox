import React from "react";
import MatchingCard from "./MatchingCard";

const MatchingGame = () => {
  return (
    <div className="h-screen">
      {/* Container */}
      <div className="lg:px-48 container mx-auto px-5 h-full space-y-4 pt-24 pb-8">
        <h2 className="text-2xl">
          Tap a pair of cards at a time to reveal if they are a match
        </h2>
        <p className="text-lg">Score: 9/10</p>
        {/* Grid of cards */}
        <div className="grid grid-cols-1 xl:grid-cols-4 py-8">
          <MatchingCard />
          <MatchingCard />
          <MatchingCard />
          <MatchingCard />
          <MatchingCard />
          <MatchingCard />
          <MatchingCard />
          <MatchingCard />
        </div>
      </div>
    </div>
  );
};

export default MatchingGame;
