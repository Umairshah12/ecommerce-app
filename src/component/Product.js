import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";

export default class Product extends Component {
  render() {
    const { id, img, title, price, inCart } = this.props.product;
    return (
      <ProductConsumer>
        {value => (
          <div className="col-lg-4 col-md-4 mb-4">
            <div
              className="card h-100"
              onClick={() => {
                value.handleChangeEvent(id);
              }}
            >
              <Link to="/details">
                <img className="card-img-top" src={img} alt="product" />
              </Link>
              <div className="img-container">
                <button
                  className="cart-btn"
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.addToCart(id);
                    value.toggle(id);
                  }}
                >
                  {inCart ? (
                    <p className="text-capitalize  mb-0" disabled>
                      in inCart
                    </p>
                  ) : (
                    <i className="fa fa-cart-plus" />
                  )}
                </button>
              </div>

              <div className="card-body">
                <h4 className="card-title">
                  <Link to="/details">{title}</Link>
                </h4>
                <h5>${price}</h5>
              </div>
              <div className="card-footer">
                <small className="text-muted">★ ★ ★ ★ ☆</small>
              </div>
            </div>
          </div>
        )}
      </ProductConsumer>
    );
  }
}
