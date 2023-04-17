import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from 'react';

const Menunav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // axios.get('https://ecommerce-unid.000webhostapp.com/categories')
    axios.get('https://ecommerunid.sistemasdelcaribe.com/all_categories')
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