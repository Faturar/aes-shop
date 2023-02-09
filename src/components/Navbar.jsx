import React from 'react'

// image
import logo from '../assets/img/Logo.png';

// icon
import cartIcon from '../assets/icon/ic_cart.svg';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="logo" height="50px" />
        </a>
        <div>
          <a href="#" className="me-5 d-lg-none">
              <img src={cartIcon} alt="" height="35px" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto ms-lg-5 ms-2 mb-2 mb-lg-0">
            <li className="nav-item me-xl-3 me-0">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item me-xl-3 me-0">
              <a className="nav-link" href="/shop.html">Shop</a>
            </li>
            <li className="nav-item me-xl-3 me-0">
              <a className="nav-link" href="#">Blog</a>
            </li>
            <li className="nav-item me-xl-3 me-0">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
          <a href="/#" className="me-5 d-lg-block d-none">
            <img src={cartIcon} alt="" height="35px" />
          </a>
          <button className="ms-lg-0 ms-2 btn btn-outline-success secondary-btn px-4">Login</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar