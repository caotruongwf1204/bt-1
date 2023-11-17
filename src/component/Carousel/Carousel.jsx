import React, { useState } from "react";
import Item from "./Item";
import Pagination from "./Pagination";
import Navigation from "./Navigation";
import "./Carousel.css";

const Carousel = ({ items }) => {
  const [index, setIndex] = useState(0);
  const handlePaginationClick = (index) => {
    setIndex(index);
  };

  const handlePrevClick = () => {
    if (index === 0) {
      setIndex(items.length - 1);
    } else {
      setIndex(index - 1);
    }
  };
  const handleNextClick = () => {
    if (index === items.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  return (
    <div className="carousel">
      <Navigation
        onPrevClick={handlePrevClick}
        onNextClick={handleNextClick}
      ></Navigation>
      <div className="carousel-container">
        {items.map((item, i) => (
          <Item key={i} active={i === index} {...item}></Item>
        ))}
      </div>
      <Pagination
        items={items}
        currentIndex={index}
        onClick={handlePaginationClick}
      ></Pagination>
    </div>
  );
};

export default Carousel;
