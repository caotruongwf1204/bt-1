import React from "react";
import { FcPrevious, FcNext } from "react-icons/fc";
const Navigation = ({onPrevClick, onNextClick}) => {
  return (
    <div className="carousel-navigation">
      <div className="carousel-navigation-prev" onClick={onPrevClick}>
        <FcPrevious></FcPrevious>
      </div>
      <div className="carousel-navigation-next" onClick={onNextClick}>
        <FcNext></FcNext>
      </div>
    </div>
  );
};

export default Navigation;
