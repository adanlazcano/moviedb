import styles from "./styles.module.css";
const CartItem = ({ data, deleteFromCart }) => {
  const { id, name, price, quantity } = data;

  return (
    <div className={styles["cartItem"]}>
      <h5>{name}</h5>
      <h5>
        ${price}.00 x {quantity} = {price * quantity}.00
      </h5>
      <button className={styles["button"]} onClick={(_) => deleteFromCart(id)}>
        Eliminar
      </button>
      <button
        className={styles["button"]}
        onClick={(_) => deleteFromCart(id, true)}
      >
        Eliminar Todos
      </button>
    </div>
  );
};

export default CartItem;
