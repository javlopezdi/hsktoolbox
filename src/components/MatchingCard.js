import React, { useState } from "react";
import "../MatchingCard.css";

const MatchingCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div onClick={handleClick} className="flip-card h-96 w-64 my-8">
      <div className={`${isFlipped ? "flipped " : ""}flip-card-inner`}>
        <div className="flip-card-front bg-blueCrayola rounded-xl border-8 border-platinum flex items-center justify-center">
          <p className="text-4xl font-semibold text-white">HSK 1</p>
        </div>
        <div className="flip-card-back bg-platinum rounded-xl">
          <p>Back of the card</p>
        </div>
      </div>
    </div>
  );
};

export default MatchingCard;
