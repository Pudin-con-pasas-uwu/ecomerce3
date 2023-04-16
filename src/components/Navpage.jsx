// import React from 'react';
// import React from 'react';
import Link from 'next/link';
// import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import React, { useContext, useEffect, useState } from 'react'
import { Store } from '../../utils/Store'

const Navpage = () => {

  const { state, dispatch } = useContext(Store)

  const { cart } = state

  const [cartItemsCount, setcartItemsCount] = useState(0)

  useEffect(() => {
    setcartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0))
  }, [cart.cartItems])

    const router = useRouter();
    const [login, setLogin] = useState();
    const [loginhref, setLoginhref] = useState("/LogoutPage");
    
    
      useEffect(() => {
        const token = localStorage.getItem('token');
      
        if (token) {
          setLogin("LOGOUT");
          setLoginhref("/LogoutPage2")
          console.log(loginhref)
        } if (!token) {
          setLogin("LOGIN")
          setLoginhref("/LoginPage")
        }
      }, [router]);



  return (
    <div>
      <div className="sectionavb">
        <header className="headernav">
          <Link href="/" className="logonav">Store</Link>

          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
          <ul className="menu" >
            <li><Link href="/aboutpage" className="mt-4" id='StyleUl'>Sobre Nosotros</Link></li>
            <li><Link href="/Contact_us" className="mt-4" id='StyleUl'>Contactanos</Link></li>
            <li><Link href="/Productos" className="mt-4" id='StyleUl'>Productos</Link></li>
            <li><Link href="/cart" className="mt-4" id='StyleUl' >
              Tu Carrito
              <span className='text-white bg-danger rounded p-1'>{cartItemsCount}</span>
            </Link>
            </li>
            <li><Link href={loginhref} className="mt-4" id='StyleUl'>{login}</Link></li>
          </ul>
        </header>
      </div>
    </div>
  );

}

export default Navpage;
