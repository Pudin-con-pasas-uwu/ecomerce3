import Layout from '@/components/Layouts/Layout'
import { Store } from '../../utils/Store'
import React, { useContext } from 'react'
import Link from 'next/link'
import styles from '../styles/butomSelectProducts.module.css';

export default function Cart() {

  const { state, dispatch } = useContext(Store)
  const { cart: { cartItems } } = state

  const removeCartHandler = (item) => {
    dispatch({ type: 'CART_REMOVE_ITEM', payload: item })
  }

  //funcion para actualizar el carrito
  const updateCartHandler = (item, qty) => {
    const quantity = Number(qty)
    dispatch({ type: 'CARD_ADD_ITEM', payload: { ...item, quantity } })
  }



  return (
    <Layout>
      <h2 className="text-center">Shopping Cart</h2>
      <div className="container" id={styles.ContainerSize}>
        {cartItems.length === 0 ? (
          <div className='text-center'>
            <h3>
              Cart is empty. <Link href="/">Go Store</Link>
            </h3>
          </div>
        ) : (
          <div className='table-responsive-xxl'>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">Item</th>
                  <th scope="col">product name</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td id={styles.ContentImg}>
                      {/* <img src={item.image} width={70} height={70} alt="" /> */}
                    </td>
                    <td className='ContentImg'>{item.product_name}</td>
                    <td>
                      {item.stock > 0 ? "In stock" : "Unavailable"}
                      {/* <select
                        value={item.quantity}
                        onChange={(e) => updateCartHandler(item, e.target.value)}
                      >
                        {[...Array(item.stock).keys()].map(x => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select> */}
                    </td>

                    <td>{item.price}$</td>
                    <td>
                      <button className="btn btn-danger" onClick={() => removeCartHandler(item)} >X</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div>
              <div>
                Subtotal: ({cartItems.reduce((a, c) => a + c.quantity, 0)}) : $
                {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}
              </div>
            </div>
            <div className='text-center'>
              <a class="btn btn-dark" id={styles.ButtonCheckout} tipe="button" href="/checkout">Proceed to payment</a>
            </div>
            {/* <Link href={`/checkout`} type="button" class="btn btn-dark" id={styles.bottomSpace}>pay</Link> */}
            {/* <Link href={`/checkout`} type="button" class="btn btn-dark" onClick={} id={styles.bottomSpace}>pay</Link> */}
          </div>
        )}
      </div>
    </Layout>
  )
}

