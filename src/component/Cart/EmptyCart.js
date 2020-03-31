import React, { Component } from "react";

class EmptyCart extends Component {
  render() {
    return (
      <div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-10 mx-auto text-title text-center">
              <h1>your cart is empty</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default EmptyCart;
