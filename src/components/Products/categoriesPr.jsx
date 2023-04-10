import React from 'react';
import { useRouter } from "next/router";
import Link from 'next/link';

const CategoriesPr = (props) => {
  if (!props.CategoriesP) {
    return null; // or you can display a loading message or redirect to an error page
  }

  var CatProductsFilter = props.CategoriesP.rows.filter(function (category) {
    return category.category_id === props.category_id;
  })
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter()

  if (CatProductsFilter.length === 0) {
    return(
    <div className='NoProductsTitle'>
     <h3>No hay productos</h3>
    </div>
  )}

  return (
    <>
     <div className='card-containerProducts'>
      {CatProductsFilter.map(category => (
        <div key={category.id} className='col-md-3'>
          <Link href={`/DetailProducts/${category.id}`} >
            <div className="card" id="cardProduct">
              <div className="card-bodyProducts">
                <h2 className="claro">{category.product_name}</h2>
                <p className="desc_corta">{category.short_desc}</p>
                <p className="precio">${category.price} MXN</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
      </div>
    </>
  );
}

export default CategoriesPr;
