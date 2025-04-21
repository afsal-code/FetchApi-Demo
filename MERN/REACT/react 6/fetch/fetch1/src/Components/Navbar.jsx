import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';




const Navbar = ({setSearch}) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">MyBrand</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">Services</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                  More
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/about">About</Link></li>
                  <li><Link className="dropdown-item" to="/contact">Contact</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="/support">Support</Link></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control search-bar" type="search" placeholder="Search" onChange={((e)=>setSearch(e.target.value))} />
              <button className="btn btn-search" type="submit">Go</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;