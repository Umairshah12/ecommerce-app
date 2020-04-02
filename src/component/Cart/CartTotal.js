import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button, ThemeProvider } from "react-bootstrap";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

export default function CartTotal({ value }) {
  // console.log("thi is model detail", value.cart);

  const { cartSubTotal, cartTax, cartTotal, clearCart, cart } = value;
  const data = cart.map(item => {
    return { price: item.price, title: item.title, total: item.total };
  });

  const TotalItems = data
    .map(function(item) {
      return item.total;
    })
    .reduce(function(curval, newval) {
      return curval + newval;
    });

  // console.log(TotalItems);

  const Title = data
    .map(function(item) {
      return item.title;
    })
    .reduce(function(curval, newval) {
      return curval + newval;
    });

  // console.log(Title);

  // const Title = data.map(exp => {
  //   return { title: exp.title };
  // });

  // console.log("this is title data", Title);
  // console.log(AddItems);

  async function handelToken(token) {
    const response = await axios.post(
      "https://8s046.sse.codesandbox.io/checkout",
      {
        token,
        data,
        TotalItems,
        Title
      }
    );

    const { status } = response.data;
    if (status === "success") {
      clearCart();
      toast("success email successfull!", {
        type: "success"
      });
    } else {
      // console.log(response);
      toast("something went wrong!", {
        type: "error"
      });
    }
  }

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
              <StripeCheckout
                stripeKey="pk_test_ik94tbBkgkFCcAgqvZoUrYIn00oR37X0aE"
                token={handelToken}
                shippingAddress
                billingAddress
                amount={cartTotal * 100}
              />
              {/* <TakeMoney
                clearCart={clearCart}
                total={cartTotal}
                history={history}
              /> */}
            </div>
          </div>
        </div>
      </React.Fragment>
    </div>
  );
}
