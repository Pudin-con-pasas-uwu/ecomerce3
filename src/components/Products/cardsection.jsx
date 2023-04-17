import Link from "next/link";
import PropTypes from 'prop-types'; // Importamos la librería prop-types para validar las propiedades que recibimos

const Cardsection = (props) => {
  return (
    <main>
    <div className='container obo'>
    {Array.isArray(props.users.rows) && props.users.rows.length > 0 ?
props.users.rows.map(user => (
  <Link className='noline' href={`/DetailProducts/${user.id}`} key={user.id} >
    <div className='card'>
        <img src={`/imgs/${user.id}.jpg`}/>
        <h4 id='product_title'>{user.product_name}</h4>
        <p id='medium'>{user.short_desc}</p>
        <div className='abajito'><p>${user.price} MXN</p></div>
        
    </div>
  </Link>
)) : null
}
    </div>
</main>
  );
};

Cardsection.propTypes = {
  users: PropTypes.shape({
    rows: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })).isRequired
  }).isRequired // Validamos que users sea un objeto con una propiedad "rows" que sea un array de objetos con las propiedades "id" y "name" requeridas
};

export default Cardsection; // Exportamos el componente Cardsection
