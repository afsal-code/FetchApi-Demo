import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../CartContext";

const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Fetch error:", error));
  }, [id]);

  if (!product) {
    return <div style={{ textAlign: "center", marginTop: "80px" }}>Loading...</div>;
  }

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <img src={product.thumbnail} alt={product.title} style={styles.image} />
        <h2 style={styles.title}>{product.title}</h2>
        <p style={styles.description}>{product.description}</p>
        <p style={styles.price}>Price: ${product.price}</p>
        <div style={styles.buttonGroup}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <button style={styles.backBtn}>← Back</button>
          </Link>
          <button onClick={() => addToCart(product)} style={styles.cartBtn}>
            Add to Cart 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    paddingTop: "80px",
    display: "flex",
    justifyContent: "center",
  },
  card: {
    width: "320px",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "10px",
    marginBottom: "15px",
  },
  title: {
    fontSize: "20px",
    marginBottom: "10px",
    fontWeight: "600",
  },
  description: {
    fontSize: "14px",
    color: "#666",
    marginBottom: "10px",
  },
  price: {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "15px",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
  },
  backBtn: {
    flex: 1,
    padding: "8px",
    backgroundColor: "#ddd",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  cartBtn: {
    flex: 1,
    padding: "8px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default Detail;
