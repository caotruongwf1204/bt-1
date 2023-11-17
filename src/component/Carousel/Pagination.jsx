import React from "react";

const Pagination = ({ items, currentIndex, onClick }) => {
  return (
    <div className="carousel-pagination">
      {items.map((item, index) => (
        <div
          key={index}
          className={`carousel-pagination-item ${
            currentIndex === index ? "active" : ""
          }`}
          onClick={() =>onClick(index)}
        ></div>
      ))}
    </div>
  );
};

export default Pagination;
