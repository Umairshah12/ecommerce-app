import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";
import { Link } from "react-router-dom";

const ProductContext = React.createContext();

export default class ProductProvider extends Component {
  constructor() {
    super();
    this.state = {
      product: [...storeProducts],
      detail: detailProduct,
      cart: [],
      showModal: false,
      ModelDetail: detailProduct,
      cartSubTotal: 0,
      cartTax: 0,
      cartTotal: 0
    };
  }

  //   componentDidMount() {
  //     this.setProducts();
  //   }

  //   setProducts = () => {
  //     let temProducts = [];
  //     storeProducts.forEach(item => {
  //       console.log(item);
  //       const singleProduct = { ...item };
  //       temProducts = [temProducts, singleProduct];
  //       console.log(temProducts);
  //     });
  //     this.setState(() => {
  //       return { product: temProducts };
  //     });
  //   };

  getItem = id => {
    const productItem = this.state.product.find(item => item.id === id);
    return productItem;
  };

  handleChangeEvent = id => {
    const productData = this.getItem(id);
    this.setState(() => {
      return {
        detail: productData
      };
    });
  };
  addToCart = id => {
    const tempProduct = [...this.state.product];
    const index = tempProduct.indexOf(this.getItem(id));
    const product = tempProduct[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(
      () => {
        return { product: tempProduct, cart: [...this.state.cart, product] };
      },
      () => {
        this.addTotals();
        // console.log(this.state);
      }
    );
  };

  getData = id => {
    const product = this.getItem(id);
    return product;
  };

  // closeModel = () => {
  //   this.setState(() => {
  //     return { openModel: false };
  //   });
  // };

  toggle = id => {
    this.setState(prev => ({
      ...prev,
      showModal: !prev.showModal,
      ModelDetail: this.getData(id)
    }));
  };

  // showModal = id => {
  //   this.setState(prev => ({
  //     ...prev,
  //     showModal: !prev.s,
  //     ModelDetail: this.getData(id)
  //   }));
  // };

  increment = id => {
    let tempCart = [...this.state.cart];
    const selectedItem = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedItem);
    const product = tempCart[index];
    // console.log(product);
    product.count = product.count + 1;
    product.total = product.count * product.price;

    this.setState(
      () => {
        return {
          cart: [...tempCart]
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  decrement = id => {
    let tempCart = [...this.state.cart];
    const selectedItem = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedItem);
    const product = tempCart[index];
    product.count = product.count - 1;
    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.count * product.price;
      this.setState(
        () => {
          return {
            cart: [...tempCart]
          };
        },
        () => {
          this.addTotals();
        }
      );
    }
  };

  removeItem = id => {
    let tempCart = [...this.state.cart];
    let tempProduct = [...this.state.product];

    tempCart = tempCart.filter(item => item.id !== id);
    const index = tempProduct.indexOf(this.getItem(id));
    const removeItem = tempProduct[index];
    removeItem.inCart = false;
    removeItem.total = 0;
    removeItem.count = 0;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
          product: [...tempProduct]
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  clearCart = () => {
    this.setState(
      () => {
        return {
          cart: []
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map(item => (subTotal += item.total));
    const temptax = subTotal * 0.1;
    const tax = parseFloat(temptax.toFixed(2));
    const total = subTotal + tax;
    this.setState(() => {
      return {
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total
      };
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <ProductContext.Provider
          value={{
            ...this.state,

            handleChangeEvent: this.handleChangeEvent,
            addToCart: this.addToCart,
            toggle: this.toggle, // toggle: is state and this.toggle is refrence to that function
            increment: this.increment,
            decrement: this.decrement,
            removeItem: this.removeItem,
            clearCart: this.clearCart
          }}
        >
          {this.props.children}
        </ProductContext.Provider>
      </div>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
