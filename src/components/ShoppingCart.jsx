import {
  shoppingInitialState,
  shoppingReducer,
} from "../reducers/shoppingReducer";
import { useReducer } from "react";
import styles from "./styles.module.css";
import Product from "./Product";
import CartItem from "./CartItem";
import { TYPES } from "../actions/shoppingActions";

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const { products, cart } = state;
  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };

 

  const deleteFromCart = (id, all = false) => {
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
    }
  };

  const clearCart = (_) => {
    dispatch({ type: TYPES.CLEAR_CART });
  };

  return (
    <>
      <img
        className={styles["img"]}
        src="https://previews.123rf.com/images/gmast3r/gmast3r1706/gmast3r170600624/79995338-shopping-cart-discount-tag-sale-special-offer-banner-flat-vector-illustration.jpg"
        alt="sc"
      />

      <article className={[styles["box"], styles["box1"]].join(" ")}>
        {products.map((product) => (
          <Product key={product.id} data={product} addToCart={addToCart} />
        ))}
      </article>

      <article className={styles["box"]}>
        {cart.length > 0 && (
          <div className={styles["clear"]}>
            <h3>Cart</h3>
            <button onClick={clearCart} className={styles["button"]}>
              Clean Cart
            </button>
          </div>
        )}

        {cart.map((item, i) => (
          <CartItem key={i} data={item} deleteFromCart={deleteFromCart} />
        ))}
      </article>
    </>
  );
};

export default ShoppingCart;
