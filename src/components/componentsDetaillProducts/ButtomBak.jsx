import styles from '../../styles/butomSelectProducts.module.css';
import ButtomAddCarrito from './ButtomAddCarrito';

const ButtomBak = () => {
    return (
         <div class="container">
            <div className='row'>
                <div className='col-md-6'>
                    <a class="btn btn-dark" id={styles.bottomSpace} tipe="button" href="javascript:history.back()">Go back</a>
                </div>
                <div className='col-md-6'>
                    <ButtomAddCarrito />
                </div>
            </div>
        </div>    
    );
  }
  
  export default ButtomBak