import Link from 'next/link'
import Image from 'next/image'
import logo from '../img/logo.jpg'
import styles from '../styles/footer.module.css'



const Footer  = () => {

    return(
        <footer>
            <div className={styles.container_footer}>
                <div className="row">
                    <div className="col-sm-6 futer">
                        <div className={styles.imgen}>
                            <Link href="/">
                                <Image 
                                src={logo} 
                                alt="logo"
                                width={100}
                                height={38}
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
                            <h5 className={styles.titulo}>CATEGORIAS</h5>
                            <p><Link className={styles.item} href="/Productos">Mangas</Link></p>
                            <p><Link className={styles.item} href="/Productos">Apparel</Link></p>
                            <p><Link className={styles.item} href="/Productos">Juegos</Link></p>
                            <p><Link className={styles.item} href="/Productos">Series</Link></p>
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