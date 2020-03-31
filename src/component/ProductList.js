import React, { Component } from "react";
import Title from "./Title";
import { ProductConsumer } from "../context";
import Product from "./Product";

export default class ProductList extends Component {
  render() {
    // console.log(this.state.product);
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="product" />
          </div>
        </div>

        <div className="row">
          <ProductConsumer>
            {value => {
              return value.product.map(prd => {
                return <Product key={prd.id} product={prd} />;
              });
            }}
          </ProductConsumer>
        </div>
      </React.Fragment>
    );
  }
}
