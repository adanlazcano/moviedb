import styles from './styles.module.css'
const Product = ({data,addToCart}) => {

    const {id,name,price} = data;
    return (
        <div className={styles["product"]}>
          <h4>{name}</h4>
          <h5>${price}.00</h5>
          <button className={styles["button"]} onClick={_=>addToCart(id)}>Add Cart</button>
        </div>
    )
}

export default Product
