
import styles from '../styles/monthly.module.css';



const Monthly  = () => {



    return(
        <div className="container-fluid Moana">
            <div className="row">
                <div className={styles.suscribe}>
                    <h2 className={styles.monthly} id>BOLETÍN MENSUAL</h2>
                    <div className={styles.phrase_news}>
                        <p className={styles.news}>¡Suscribete y unete a nuestra aldea, donde encontrarás los mejores productos a los mejores precios!</p>
                    </div>
                    <div className="col">
                        <form className={styles.email} action="https://app.us14.list-manage.com/subscribe/post?u=bf44b77a96eca4a9f0d57cc98&amp;id=95d43bddc6&amp;f_id=00d698e0f0" method="post">
                            <input type="email" className={styles.enteremail} name= "EMAIL" class="required email" id="mce-EMAIL" placeholder="Ingresa tu correo electrónico" required/>
                            <button type="submit" className={styles.submit} value="Subscribe" name="subscribe" id="mc-embedded-subscribe">ENVIAR</button>
                        </form>
                    </div>
                </div>
            </div>    
        </div>

        



    )
}

export default Monthly;