import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
export default function CartTotal({ value }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;

  return (
    <div>
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 mt-2 ml-sm-5 col-sm-8 ml-md-auto text-right text-capitalize">
              <Link to="/">
                <button
                  onClick={() => {
                    clearCart();
                  }}
                  className="btn btn-primary mb-3 px-5"
                >
                  Clear Cart
                </button>
              </Link>
              <h5>
                <span className="text-title">SubTotal:</span>
                <strong>${cartSubTotal}</strong>
              </h5>
              <h5>
                <span className="text-title">Cart Tax:</span>
                <strong>${cartTax}</strong>
              </h5>
              <h5>
                <span className="text-title">Cart Total:</span>
                <strong>${cartTotal}</strong>
              </h5>
            </div>
          </div>
        </div>
      </React.Fragment>
    </div>
  );
}
