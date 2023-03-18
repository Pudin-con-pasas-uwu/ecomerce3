import React from 'react';

import Link from 'next/link';



const Navpage = () => {
    return (
        <div>
            <div className="sectionavb">
    <header className="headernav">
    <Link href="/" className="logonav">Store</Link>
  
  <input className="menu-btn" type="checkbox" id="menu-btn" />
  <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
  <ul class="menu">
    <li><Link href="/aboutpage" className="mt-4">ABOUT</Link></li> 
    <li><Link href="/Contact_us" className="mt-4">CONTACT US</Link></li>
    <li><Link href="/LoginPage" className="mt-4">LOGIN</Link></li>
    <li><Link href="/cart" className="mt-4">Carrito</Link></li>
  </ul>
</header>
</div>
        </div>
    );
}

export default Navpage;
