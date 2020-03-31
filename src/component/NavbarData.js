import React, { Component } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
export default class NavbarData extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <Link to="/">
              <img src={logo} alt="ecommerce" className="navbar-brand" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto mx-4">
              <Nav.Link href="#home">Product</Nav.Link>
            </Nav>
            <Link to="/cart">
              <Button variant="outline-success">
                <i className="fa fa-cart-plus mx-1" />
                My Cart
              </Button>
            </Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
