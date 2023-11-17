import React from "react";
import Content from "./Content";

const Item = ({ image, title, description, active }) => {
  return (
    <div
      className="carousel-item"
      style={{
        backgroundImage: `url(${image})`,
        display: active ? 'block' : 'none',
      }}
    >
      <Content title={title} description={description}></Content>
    </div>
  );
};

export default Item;
