import React from "react";
import "../../assets/scss/index.scss";
import { Link } from "react-router-dom";

const ProductCard = ({ title, price, img, id }) => {
  return (
    <Link to={`/${id}`} className="main__card">
      <img className="main__card--img" src={img} alt={title} />
      <span className="main__card-price">{price} ₽</span>
      <p className="main__card-title">{title}</p>
    </Link>
  )
};

export default ProductCard;
