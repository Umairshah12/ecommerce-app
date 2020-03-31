import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
// import { storeProducts, detailProduct } from "../data";
class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { id, title, company, img, price, info, inCart } = value.detail;
          return (
            <div className="container py-4">
              <div className="row">
                <div className="col-10 text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* end title */}
              {/* prduct image */}
              <div className="row">
                <div className="col-10 col-md-6 my-3">
                  <img src={img} className="img-fluid" alt="product" />
                </div>
                <div className="col-10 col-md-6 my-5 text-capitalize">
                  <h2>model:{title}</h2>
                  <h4 className="text-capitalize text-muted mt-3 mb-2 text-uppercase">
                    made by:<span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      price:<span>$</span>
                      {price}
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-2">
                    some info about product
                  </p>
                  <p className="text-muted lead">{info}</p>
                  <div>
                    <Link to="/">
                      <button className="btn btn-primary  ">
                        Back to home
                      </button>
                    </Link>

                    <button
                      className="btn btn-success ml-3"
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModel(id);
                      }}
                    >
                      {inCart ? "inCart" : "Add to cart"}
                    </button>
                  </div>
                </div>

                {/* button */}
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
export default Details;
