import React from "react";
import badamImage from "../../../assets/badam.jpg";
import { Figure } from "react-bootstrap";
import "../plp/plp.styles.scss";

const Product = (props) => {
  return (
    <div className="text-center product_card m-2">
      <Figure className="">
        <Figure.Image width={200} height={210} alt="171x180" src={badamImage} />
        <Figure.Caption>{props.product.name}</Figure.Caption>
      </Figure>
      <span className="price">$ {props.product.username} </span>
      <div className="clearfix mt-2">
        <div className="item-quantity">
          <span className="number-toggle">
            <span className="toggle-down">
              <i className="fa fa-minus"></i>
            </span>
            <input name="quantity" type="number" min="1" />
            <span className="toggle-up">
              <i className="fa fa-plus"></i>
            </span>
          </span>
        </div>
        <button type="button" className="btn btn-primary cart_btn">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
