import Link from 'next/link'
import React, { useState, useEffect } from 'react';
import axios from "axios";
import Image from 'next/image'
import logo from '../img/logo.jpg'
import styles from '../styles/footer.module.css'




const Footer  = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // axios.get('https://ecommerce-unid.000webhostapp.com/categories')
        axios.get('https://ecommerunid.sistemasdelcaribe.com/all_categories')
          .then(response => {
            setCategories(response.data.rows);
          })
          .catch(error => {
          console.log(error);
          });
      }, []);
      
    return(
        <footer>
            <div className={styles.container_footer}>
                <div className="row">
                    <div className="col-sm-6 futer">
                        <div >
                            <Link href="/">
                                <Image 
                                className={styles.imgen}
                                src={logo} 
                                alt="logo"
                                width={100}
                                height={40}
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="col-sm-2 seccion">
                        <div className={styles.columna}>
                            <h5 className={styles.titulo} i>INICIO</h5>
                            <p><Link className={styles.item} href="/">Inicio</Link></p>
                            <p><Link className={styles.item} href="/aboutpage">About Us</Link></p>
                            <p><Link className={styles.item} href="/Contact_us">Contacto</Link></p>
                            <p><Link className={styles.item} href="/Productos">Productos</Link></p>  
                        </div>
                    </div>
                    <div className="col-sm-2 seccion">
                        <div className={styles.columna}>
                            <h5 className={styles.titulo_1}>CATEGORIAS</h5>
                            <div className={styles.lista}>
                                {categories.map(category => (
                                    <p key={category.id}>
                                        <Link href={`/CategoriesP/${category.id}`} className={styles.item_1}>
                                            {category.name}
                                        </Link>
                                    </p>
                                ))}
                            </div>
                            
                        </div>
                    </div>

                </div>
            </div>
            <div className={styles.copyright}>
                <p>Copyright &copy; 2023</p>
            </div>
        </footer>
    )
}

export default Footer