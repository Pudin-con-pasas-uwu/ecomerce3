import React from 'react';
import { useRouter } from "next/router";
import Link from 'next/link';

const CategoriesPr = (props) => {
  if (!props.CategoriesP) {
    return null;
  }

  var CatProductsFilter = props.CategoriesP.rows.filter(function (category) {
    return category.category_id === props.category_id;
  })

  if (CatProductsFilter.length === 0) {
    return(
    <div className='NoProductsTitle'>
     <h3>No hay productos</h3>
    </div>
  )}

  return (
    <main>
     <div className='container obo'>
      {CatProductsFilter.map(category => (
        <div key={category.id}>
          <Link className='noline' href={`/DetailProducts/${category.id}`} >
              <div className='card'>
                <img src={`/imgs/${category.id}.jpg`}/>
                 <h4 id='product_title'>{category.product_name}</h4>
                 <p id='medium'>{category.short_desc}</p>
                 <div className='abajito'><p>${category.price} MXN</p></div>
              </div>
          </Link>
        </div>
      ))}
      </div>
    </main>
  );
}

export default CategoriesPr;
