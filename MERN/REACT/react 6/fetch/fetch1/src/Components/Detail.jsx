import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error('fetch error', error));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.thumbnail} alt={product.title} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <Link to={`/`}>
          <button>Back</button>
        </Link>
      <Link to={`/buy/${product.id}`}>
        <button style={{marginLeft:"20px"}}>Add to Cart</button>
      </Link>
    </div>
  );
};

export default Detail;