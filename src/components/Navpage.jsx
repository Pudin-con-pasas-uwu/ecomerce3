import React from 'react';

import Link from 'next/link';



const Navpage = () => {
    return (
        <div>
            <div className="sectionavb">
    <header className="headernav">
    <Link href="/" className="logonav">Store</Link>
  
  <input className="menu-btn" type="checkbox" id="menu-btn" />
  <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
  <ul className="menu">
    <li><Link href="/aboutpage" className="mt-4">Sobre Nosotros</Link></li> 
    <li><Link href="/Contact_us" className="mt-4">Contactanos</Link></li>
    <li><Link href="/LoginPage" className="mt-4">LOGIN</Link></li>
    <li><Link href="/Productos" className="mt-4">Productos</Link></li>
    <li><Link href="/cart" className="mt-4">Tu Carrito</Link></li>
  </ul>
</header>
</div>
        </div>
    );
}

export default Navpage;
