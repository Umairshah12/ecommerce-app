import React from "react";

export default function CartColums() {
  return (
    <div className="container-fluid d-none d-lg-block  text-center">
      <div className="row">
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">Products</p>
        </div>

        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">Name of Product</p>
        </div>

        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">price</p>
        </div>

        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">Quantity</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">remove</p>
        </div>

        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">Total</p>
        </div>
      </div>
    </div>
  );
}
