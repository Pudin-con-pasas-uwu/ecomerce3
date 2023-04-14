// import { Inter } from '@next/font/google'
import Layout from '@/components/Layouts/Layout'
import Image from 'next/image'
// import Carrito from '@/components/Carrito'

import { Store } from '../../utils/Store'
import React, { useContext } from 'react'
import Link from 'next/link'
// import Ejemplo from "../img/Ejemplo.jpg";
import styles from '../styles/butomSelectProducts.module.css';
// import ImgProductsCart from '../components/componentsDetaillProducts/ImgProductsCart'
// const inter = Inter({ subsets: ['latin'] })

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
                    {/* <img src="../../public/imgs/Ejemplo" width={70} height={70} alt="img" /> */}
                      
                      {/* <ImgProductsCart /> */}
                      {/* <img src={item.image} width={70} height={70} alt="" /> */}
                    </td>
                    <td className='ContentImg'>{item.product_name}</td>
                    <td>
                      <select
                        value={item.stock}
                        onChange={(e) => updateCartHandler(item, e.target.value)}
                      >
                        {[...Array(item.stock).keys()].map(x => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
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
            {/* <Link href={`/checkout`} type="button" class="btn btn-dark" id={styles.bottomSpace}>pay</Link> */}
            {/* <Link href={`/checkout`} type="button" class="btn btn-dark" onClick={} id={styles.bottomSpace}>pay</Link> */}
          </div>
        )}
      </div>
    </Layout>
  )
}

