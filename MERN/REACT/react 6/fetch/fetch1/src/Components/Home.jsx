import React from 'react';
import { useState, useEffect } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = ({search}) => {
    const [products, setProducts] = useState([]);
    const [cat, setCat] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData =async () => {
        fetch("https://dummyjson.com/products")
            .then((res) => {
                console.log("response", res);
                return res.json();
            })
            .then((data) => {
                console.log("parsed Data", data);
                setProducts([...data.products]);
            })
            .catch((error) => console.error("fetch error", error));
            const rescat=await fetch("https://dummyjson.com/products/categories")
            const cats=await rescat.json()
            setCat([...cats])
    };
    console.log(products);
    if(products.length===0){
        return <div>Loading...</div>
    }

    const truncateDescription = (description, maxLength) => {
        if (description.length > maxLength) {
            return description.substring(0, maxLength) + '...';
        }
        return description;
    };
    
    console.log(products);

    return (
        <div>
            <div style={{marginTop:60}}>
                <button onClick={()=>setFilter("")}>all</button>
              {
                cat.map((ct)=> <button onClick={()=>setFilter(ct.name)}>{ct.name}</button>)
              }
            </div>
            <div className="main-card" >

                {products.filter((i)=>i.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())).filter((i)=>i.category.includes(filter.toLocaleLowerCase())).map((product) => (
                    <div key={product.id} className="product-card">
                        <Link to={`/detail/${product.id}`}>
                            <img src={product.thumbnail} alt={product.title} />
                        </Link>
                        <p className="title">{product.title}</p>
                        <p className="description">{truncateDescription(product.description, 100)}</p>
                        <p className="price">${product.price}</p>
                        <p className="rating">⭐ {product.rating ? product.rating.toFixed(1) : "N/A"}</p>
                        <Link to={`/buy/${product.id}`} className="add-to-cart">
                            Add to Cart
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;