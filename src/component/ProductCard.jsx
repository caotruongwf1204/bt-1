import React from "react";

const ProductCard = ({ thumbnail, name, price, reviews, variants, isSale }) => {
  
  let maxPrice = { originPrice: 0, salePrice: 0 };
  variants.forEach((variant) => {
    if (variant.salePrice > maxPrice.salePrice) {
      maxPrice = variant;
    }
  });
  return (
    <>
      <div className="card h-100">
        {isSale && (
          <div
            className="badge bg-dark text-white position-absolute"
            style={{ top: "0.5rem", right: "0.5rem" }}
          >
            Sale
          </div>
        )}
        <img className="card-img-top" src={thumbnail} alt={name} />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{name}</h5>
            <div className="d-flex justify-content-center small text-warning mb-2">
              <i className="fa-solid fa-star" style={{ color: "#ffd500" }}></i>
              <i className="fa-solid fa-star" style={{ color: "#ffd500" }}></i>
              <i className="fa-solid fa-star" style={{ color: "#ffd500" }}></i>
              <i className="fa-solid fa-star" style={{ color: "#ffd500" }}></i>
              <i className="fa-solid fa-star" style={{ color: "#ffd500" }}></i>
            </div>
            {isSale ? (
              <>
                <span className="text-muted text-decoration-line-through">
                  {`$${maxPrice.originPrice.toFixed(2)}`}
                </span>
                {`$${maxPrice.salePrice.toFixed(2)}`}
              </>
            ) : (
              `$${price.toFixed(2)}`
            )}
          </div>
        </div>

        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          {variants.length > 1 ? (
            <div className="text-center">
              <a className="btn btn-outline-dark mt-auto" href="#">
                View options
              </a>
            </div>
          ) : (
            <div className="text-center">
              <a className="btn btn-outline-dark mt-auto" href="#">
                Add to cart
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
