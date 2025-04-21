import React, { useState, useEffect } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { useCart } from "../CartContext";  

const Home = ({ search }) => {
    const [products, setProducts] = useState([]);
    const [cat, setCat] = useState([]);
    const [filter, setFilter] = useState("");
    const { addToCart } = useCart();  

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const res = await fetch("https://dummyjson.com/products");
            const data = await res.json();
            setProducts(data.products);

            const rescat = await fetch("https://dummyjson.com/products/categories");
            const cats = await rescat.json();
            setCat([...cats]);
        } catch (error) {
            console.error("Fetch error:", error);
        }
    };

    if (products.length === 0) {
        return <div>Loading...</div>;
    }

    const truncateDescription = (description, maxLength) => {
        return description.length > maxLength ? description.substring(0, maxLength) + '...' : description;
    };

    return (
        <div>
            <div style={{ marginTop: 60 }}>
                <button onClick={() => setFilter("")}>All</button>
                {cat.map((ct, index) => (
                    <button key={index} onClick={() => setFilter(ct.name)}>{ct.name}</button>
                ))}
            </div>

            <div className="main-card">
                {products
                    .filter((i) => i.title.toLowerCase().includes(search.toLowerCase()))
                    .filter((i) => i.category.includes(filter.toLowerCase()))
                    .map((product) => (
                        <div key={product.id} className="product-card">
                            <Link to={`/detail/${product.id}`}>
                                <img src={product.thumbnail} alt={product.title} />
                            </Link>
                            <p className="title">{product.title}</p>
                            <p className="description">{truncateDescription(product.description, 100)}</p>
                            <p className="price">${product.price}</p>
                            <p className="rating">⭐ {product.rating ? product.rating.toFixed(1) : "N/A"}</p>
                            
                             <button 
                                className="add-to-cart" 
                                onClick={() => addToCart(product)}
                            >
                                Add to Cart
                            </button>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Home;
