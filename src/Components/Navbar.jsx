import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../CartContext"; // Import Cart Context
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";  

const Navbar = ({ setSearch }) => {
  const { cart } = useCart(); // Get cart items

  return (
    <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">MyBrand</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
          </ul>
          <form className="d-flex">
            {/* Cart Icon with Item Count */}
            <Link to="/cart" style={{ position: "relative", marginRight: "20px" }}>
              <FontAwesomeIcon icon={faShoppingCart} size="2x" />
              {cart.length > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: "-5px",
                    right: "-10px",
                    background: "red",
                    color: "white",
                    borderRadius: "50%",
                    padding: "5px 10px",
                    fontSize: "12px",
                  }}
                >
                  {cart.length}
                </span>
              )}
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
