import React, { memo } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { FaHeart } from "react-icons/fa";
//import { FcRating } from "react-icons/fc";
import { Link } from "react-router-dom";

const Cards = memo(({ image, title, paragraph, price, renderRatingIcons ,rating}) => {
  return (
    <div className="col-sm-6 col-lg-4 col-xl-3 mb-4">
      <div className="card h-100 shadow-sm">
        <div className="overflow-hidden">
          <img src={image} alt={title} className="card-img-top" />
        </div>
        <div className="card-body">
          <div className="d-flex align-items-center justify-content-between">
            <div className="item_rating">{ renderRatingIcons(rating
            )}</div>
            <div className="wishlist" role="button" aria-label="Add to Wishlist">
              <FaHeart />
            </div>
          </div>

          <h5 className="card-title">{title}</h5>
          <p className="card-text">{paragraph}</p>

          <div className="d-flex align-items-center justify-content-between">
            <div className="menu_price">
              <h5 className="mb-0">${price}</h5>
            </div>
            <div className="add_to_card">
              <Link to="/" className="btn btn-warning">
                <i className="bi bi-bag me-2"></i>
                Add To Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Cards;
