import React, { useReducer } from "react";
import productReducer, { initialProductState } from "./reducers/productReducer";
import types from "./types";

const ProductApp = () => {
  const [productState, productDispatch] = useReducer(
    productReducer,
    initialProductState
  );
  const { products, cart, activeProduct } = productState;

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <span>{product.title}</span>
            <button
              onClick={() =>
                productDispatch({
                  type: types.productShow,
                  payload: product,
                })
              }
            >
              Show
            </button>
            <button
              onClick={() =>
                productDispatch({
                  type: types.productAddToCart,
                  payload: product,
                })
              }
            >
              Add to cart
            </button>
          </li>
        ))}
      </ul>

      <h2>Cart</h2>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            <span>
              {product.title} - quantity: {product.quantity}
            </span>
            <button
              onClick={() =>
                productDispatch({
                  type: types.productRemoveOneFromCart,
                  payload: product.id,
                })
              }
            >
              Remove one
            </button>
            <button
              onClick={() =>
                productDispatch({
                  type: types.productRemoveFromCart,
                  payload: product.id,
                })
              }
            >
              Remove all
            </button>
          </li>
        ))}
      </ul>

      <h2>Preview</h2>
      <p>{activeProduct.title}</p>
    </div>
  );
};

export default ProductApp;
