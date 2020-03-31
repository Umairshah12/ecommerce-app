import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "react-bootstrap";

class Model extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { showModal, toggle } = value;
          const { id, img, title, price } = value.ModelDetail;
          if (!showModal) {
            return null;
          } else {
            return (
              <ModelContainer>
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-8 col-md-6 col-lg-4 p-5 mx-auto text-capitalize text-center"
                    >
                      <h5>cart ITEM ADDED</h5>
                      <img src={img} alt="product" className="img-fluid" />
                      <h5>{title}</h5>
                      <h5 className="text-muted">price: ${price}</h5>
                      <Link to="/">
                        <Button
                          onClick={() => toggle(id)}
                          className="btn btn-success mx-2"
                        >
                          Shop
                        </Button>
                      </Link>
                      <Link to="/cart">
                        <Button
                          onClick={() => toggle(id)}
                          className="btn btn-info"
                        >
                          Go to Cart
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModelContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

const ModelContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`;

export default Model;
