import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/Carrito.module.css';

const Carrito = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://ecommerce-unid.000webhostapp.com/order_detail')
      .then(response => response.json())
      .then(data => setItems(data.rows))
      .catch(error => console.error(error));
  }, []);

  return (
    <main>
            <div className="container">
        {items.length > 0 ? (
          items.map((item) => (
            <div key={item.id} className="mb-4">
              <p>Product ID: {item.product_id}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price}</p>
            </div>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
        <Link href="/checkout" passHref>
          <button className={styles.checkoutButton}>Go to checkout</button>
        </Link>
      </div>
    </main>
  );
};

export default Carrito;