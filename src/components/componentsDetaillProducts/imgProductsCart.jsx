import Image from "next/image";
import Ejemplo from "../../img/Ejemplo.jpg";
import styles from '../../styles/butomSelectProducts.module.css';

const ImgProductsCart = () => {
    return (
        <Image src={Ejemplo} class="img-fluid" alt="imagen del producto" width={70} height={70} id={styles.featImgCart}/>        
    );
  }
  
  export default ImgProductsCart