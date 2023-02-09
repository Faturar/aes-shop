import React from 'react'
import { Link } from 'react-router-dom';

// image
import logo from '../assets/img/Logo.png';

// icon
import cartIcon from '../assets/icon/ic_cart.svg';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="logo" height="50px" />
        </Link>
        <div>
          <Link to="#" className="me-5 d-lg-none">
              <img src={cartIcon} alt="" height="35px" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto ms-lg-5 ms-2 mb-2 mb-lg-0">
            <li className="nav-item me-xl-3 me-0">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item me-xl-3 me-0">
              <Link className="nav-link" to="/shop.html">Shop</Link>
            </li>
            <li className="nav-item me-xl-3 me-0">
              <Link className="nav-link" to="#">Blog</Link>
            </li>
            <li className="nav-item me-xl-3 me-0">
              <Link className="nav-link" to="#">Contact</Link>
            </li>
          </ul>
          <Link to="/#" className="me-5 d-lg-block d-none">
            <img src={cartIcon} alt="" height="35px" />
          </Link>
          <button className="ms-lg-0 ms-2 btn btn-outline-success secondary-btn px-4">Login</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar