"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/ProductCard/ProductCard";
import Cart from "@/Cart/Cart";
import styles from "./page.module.css";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.log("error");
      }
    }
    fetchItems();
  }, []);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existing = prevCart.find((product) => product.id === item.id);
      if (existing) {
        return prevCart.map((product) => {
          return product.id === item.id ? { ...product, qty: product.qty + 1 } : product
        });
      }
      else {
        return [...prevCart, { ...item, qty: 1 }];
      }
    });
  }

  const updateQty = (id, amount) => {
    setCart((prevCart) => {
      return prevCart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + amount } : item
      ).filter((item) => item.qty > 0);
    });
  }

  const calculateTotal = () => {
    return cart.reduce((total, item) =>
      total + item.price * item.qty
      , 0)
  }

  return (
    <div className={styles.mainDiv}>
      <div className={styles.productsDiv}>
        {products.map((item) => (
          <div className={styles.cardDiv} key={item.id}>
            <ProductCard
              product={item}
              onAdd={addToCart}
            />
          </div>
        ))
        }
      </div>
      <Cart
        cartItems={cart}
        onUpdateQty={updateQty}
        total={calculateTotal()}
      />
    </div>
  )

}
