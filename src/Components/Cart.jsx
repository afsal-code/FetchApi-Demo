import React from "react";
import { useCart } from "../CartContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
    const { cart, removeFromCart } = useCart();
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="container mt-5">
            <h1 className="text-center">
                <FontAwesomeIcon icon={faShoppingCart} /> Your Shopping Cart
            </h1>

            {cart.length === 0 ? (
                <p className="text-center text-muted mt-3">Your cart is empty. 😔</p>
            ) : (
                <>
                    <div className="row">
                        {cart.map((item, index) => (
                            <div key={index} className="col-md-6 col-lg-4 mb-4">
                                <div className="card shadow-sm">
                                    <img
                                        src={item.thumbnail}
                                        alt={item.title}
                                        className="card-img-top"
                                        style={{ height: "150px", objectFit: "cover" }}
                                    />
                                    <div className="card-body text-center">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text">${item.price.toFixed(2)}</p>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => removeFromCart(item.id)}
                                        >
                                            <FontAwesomeIcon icon={faTrash} /> Remove
                                        </button>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-4 p-3 border rounded bg-light">
                        <h2>Total: ${totalPrice.toFixed(2)}</h2>
                        <button
                            className="btn btn-success btn-lg"
                            onClick={() => alert(`Proceeding to checkout for $${totalPrice.toFixed(2)}`)}
                        >
                            🛍 Buy Now
                        </button>
                    </div>
                </>
            )}

            <div className="text-center mt-3">
                <Link to="/" className="btn btn-outline-primary">
                    ⬅ Continue Shopping
                </Link>
            </div>
        </div>
    );
};

export default Cart;
