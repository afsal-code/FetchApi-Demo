import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const Buy = () => {
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
      <img src={product.thumbnail} alt={product.title} />
      <div>
        <h2>{product.title}</h2>
        <p>Price: ${product.price}</p>
     
        <Link to={`/detail/${product.id}`}>
          <button>Back</button>
        </Link>
        <button style={{marginLeft:"20px"}}>buy</button>
      </div>
    </div>
  );
};

export default Buy;