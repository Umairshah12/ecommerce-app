import React, { Component } from "react";

export default class Default extends Component {
  render() {
    // console.log(this.props);
    return (
      <div>
        <div className="container">
          <div className="row">
            <div
              className="col-10 text-center text-capitalize text-uppercase 
          mt-5"
            >
              <h2>Error 404!</h2>
              <h3>
                The Requested URL
                <strong className="text-danger">
                  {this.props.location.pathname}
                </strong>
                was not found
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
