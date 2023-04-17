import Layout from '@/components/Layouts/Layout';
import Link from 'next/link';
import { useContext } from 'react';
import { Store } from '../../utils/Store';
import styles from '../styles/butomSelectProducts.module.css';
// id={styles.ContentImg}

export default function Cart() {

  
  
  const {state, dispatch} = useContext(Store)
  const {cart : {cartItems}} = state
  
  const removeCartHandler = (item)=>{
    dispatch({type: 'CART_REMOVE_ITEM', payload: item})
  }
  
  //funcion para actualizar el carrito
  const updateCartHandler = (item, qty)=>{
    const quantity = Number(qty)
    dispatch({type: 'CARD_ADD_ITEM', payload:{...item, quantity}})
    console.log(dispatch)
  }
  
  
  // obtener el valor del subtotal
  const subtotal = cartItems.reduce((a, c) => a + c.quantity * c.price, 0);

  // crear la consulta de URL
  const queryParams = new URLSearchParams();
  queryParams.append('subtotal', subtotal);

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
                    <td > 
                    <img src={`/imgs/${item.id}.jpg` } width={50} height={50} alt="" />
                    </td>
                    <td className='ContentImg'>{item.product_name}</td>
                    <td>
                    <div>
                    <td id={styles.ContentCenter}>
                      {/* <button className="btn btn-sm btn-outline-secondary mx-2" onClick={() => updateCartHandler(item, item.quantity+1)}>+</button> */}
                     {item.quantity}
                      {/* <button className="btn btn-sm btn-outline-secondary" onClick={() => updateCartHandler(item, item.quantity-1)}>-</button> */}
                    </td>
              </div>
                      {/* {item.stock > 0 ? "In stock" : "Unavailable"} */}
                    {/* <select value={item.quantity} onChange={(e) => updateCartHandler(item, e.target. value)} >
                      {
                        [...Array(item.Stock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))
                      }
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
              <Link href={{ pathname: '/checkout', search: queryParams.toString() }} className="btn btn-dark" id={styles.ButtonCheckout} type="button">Proceed to payment</Link>
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}

