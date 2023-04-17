import React from 'react';
import Link from 'next/link';

const Cards = (props) => {
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
                <p className='abajito'>${user.price} MXN</p>y
            </div>
          </Link>
        )) : null
      }
            </div>
        </main>
    );
}

export default Cards;
