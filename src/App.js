import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Switch, Route, Redirect } from "react-router-dom";
import NavbarData from "./component/NavbarData";
import ProductList from "./component/ProductList";
import Product from "./component/Product";
import Cart from "./component/Cart/Cart";
import Default from "./component/Default";
import Details from "./component/Details";
import Model from "./component/Model";
// import { Redirect } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <NavbarData />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/product" component={Product} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
      <Model />
    </React.Fragment>
  );
}

export default App;
