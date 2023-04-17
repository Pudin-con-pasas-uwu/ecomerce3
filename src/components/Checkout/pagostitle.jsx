import { useRouter } from 'next/router';

const Pagostitle = () => {
        // obtener la consulta de URL
        const router = useRouter();
        const subtotal = router.query.subtotal;
    return (
        <div>
            <div className="container checktitle">
                <h1 id='StyleTextHeader'>CHECKOUT</h1>
                <p>el total a pagar va a ser de : ${subtotal}</p>
            </div>
        </div>
    );
}

export default Pagostitle;
