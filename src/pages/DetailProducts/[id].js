import Layout from '../../components/Layouts/Layout'
import ImgProducts from '../../components/componentsDetaillProducts/imgProducts'
import DescriptionProdicts from '../../components/componentsDetaillProducts/descriptionProducts'
import styles from '../../styles/butomSelectProducts.module.css';

// Importamos el hook useRouter para poder obtener el id del query string de la URL
import { useRouter } from "next/router";
import fetch from 'isomorphic-fetch'
import React, { useContext } from 'react'
import { Store } from '../../../utils/Store';

const DetaillProducts = ({ user }) => {
    console.log(user)

    // inicializar el estado
    const { state, dispatch } = useContext(Store)

    // Usamos el hook useRouter para obtener el id del query string de la URL
    const router = useRouter();
    console.log(router)
    const { id } = router.query;

    if (!user) {  //aqui ya no se usa el props
        router.reload();
        return null;
    }

    // funcion para agregar al carrito
    // donde enviamos a guardar en nuestra variable de estado global
    const addToCartHandler = () => {
        const existItem = state.cart.cartItems.find(x => x.id === user.id)
        const quantity = existItem ? existItem.quantity + 1 : 1

        if (user.stock < quantity) {
            alert("sorry. Product is out of stock")
            return;
        }

        dispatch({ type: 'CARD_ADD_ITEM', payload: { ...user, quantity } })
        // router.push('/cart')
    }

    return (
        // Renderizamos el componente Layout
        <Layout>
            <div className='container-fluid' id={styles.FeatContainer}>
                <div className='row'>
                    <div className='col-md-6'>
                        <ImgProducts />
                    </div>
                    <div className='col-md-6'>
                        <h1 id='StyleTextHeader' >{user.product_name}</h1>
                        <h1 className={styles.Letterh1}>$ {user.price} MNX</h1>
                        <p className={styles.LetterP}>{user.description}</p>
                        <hr className={styles.HrBlak}></hr>
                        <div className='container-fluid'>
                            <div className='row'>
                                <DescriptionProdicts />
                                <div class="col">
                                    <p>{user.stock > 0 ? "In stock" : "Unavailable"}</p>
                                    <p>{user.creation_date}</p>
                                </div>
                            </div>
                            <div class="container">
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <a class="btn btn-dark" id={styles.bottomSpace} tipe="button" href="javascript:history.back()">Go back</a>
                                    </div>
                                    <div className='col-md-6'>
                                        <button class="btn btn-dark" id={styles.bottomSpace} onClick={addToCartHandler}>ADD</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

DetaillProducts.getInitialProps = async (ctx) => {
    try {
        // Hacemos una petición al API para obtener los detalles del producto con el id especificado en el query string de la URL
        const res = await fetch(`https://ecommerce-unid.000webhostapp.com/products/${ctx.query.id}`)
        const resJSON = await res.json();
        // Retornamos los detalles del producto como props
        return { user: resJSON }
    } catch (error) {
        console.error(error)
        // Si hay algún error, retornamos un mensaje de error
        return { errorMessage: 'Hubo un problema al cargar los datos' }
    }
}

export default DetaillProducts;