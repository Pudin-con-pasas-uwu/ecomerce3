import Link from "next/link"; 
import React, { useState, useEffect } from 'react';
import axios from "axios";

const Menunav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('https://ecommerce-unid.000webhostapp.com/categories')
      .then(response => {
        setCategories(response.data.rows);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

return (
    <ul className="nav categoriesNav">
      {categories.map(category => (
        <li key={category.id}>
          <Link href={`/CategoriesP/${category.id}`} className="MenuCategory">
            {category.name}
            </Link>
        </li>
      ))}
    </ul>
  );
};

export default Menunav;