import styles from "./Cart.module.css"

export default function Cart({ cartItems, onUpdateQty, total }) {
    return (
        <div className={styles.cart}>
            <h2>Your Cart</h2>
            {cartItems.length === 0
                ? (
                    <p>Your cart is empty</p>
                )
                : (
                    <div className={styles.itemList}>
                        {cartItems.map((item) => (
                            <div className={styles.cartItem} key={item.id}>
                                <img src={item.image} alt="product image" />

                                <div className={styles.itemInfo}>
                                    <h4>{item.title}</h4>
                                    <p>${item.price.toFixed(2)}</p>
                                </div>

                                <div className={styles.itemUtility}>
                                    <button onClick={() => onUpdateQty(item.id, -1)}>-</button>
                                    <span className={styles.itemQuantity}>{item.qty}</span>
                                    <button onClick={() => onUpdateQty(item.id, 1)}>+</button>
                                </div>

                            </div>
                        ))}

                    </div>

                )}
            <div className={styles.footer}>
                <h3>Total: {total.toFixed(2)}</h3>
            </div>

        </div>
    )
}