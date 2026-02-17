import styles from "./ProductCard.module.css";

export default function ProductCard({ product, onAdd }) {
    return (
        <div className={styles.card}>
            <div className={styles.productImage}>
                <img src={product.image} alt="product image" />
            </div>
            <div className={styles.namePrice}>
                <p className={styles.productTitle}>{product.title}</p>
                <p className={styles.productPrice}>${product.price}</p>
                <button className="addToCartButton" onClick={() => onAdd(product)}>Add to Cart</button>
            </div>
        </div>
    );
}