import React from 'react';
import Layout from '@/components/Layouts/Layout'
import { useRouter } from "next/router";
import CategoriesPr from '@/components/Products/categoriesPr';
import Menunav from '@/components/Products/menunav';
import ProductsTitle from '@/components/Products/Products_title';

const CategoriesP = (props) => {
    const router = useRouter();
    console.log(router);
    const { id } = router.query;

    if (!props) {
        router.reload();
        return null;
    }

    if (typeof window !== 'undefined') {
        const token = sessionStorage.getItem("token");
    };

    return (
        <Layout>
            <ProductsTitle />
            <Menunav />
        <CategoriesPr  CategoriesP={props.CategoriesP} category_id={id}/>
    </Layout>
  )

}

CategoriesP.getInitialProps = async (ctx) => {
    // const URL = 'https://ecommerce-unid.000webhostapp.com/products/'
    const URL = 'https://ecommerunid.sistemasdelcaribe.com/all_products'
        const res = await fetch(URL)
        const data = await res.json()
        return {
          CategoriesP: data   
        };
}

export default CategoriesP;
