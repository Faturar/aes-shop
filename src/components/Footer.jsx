import React from 'react'

// image
import logo from '../assets/img/Logo.png';

function Footer() {
  return (
    <footer>
      <div className="container pt-5">
        <div className="row py-5 text-white">
          <div className="col-lg-3 col-6">
            <div className='d-flex align-items-center'>
              <img src={logo} alt="Aes plant logo" className="w-25 me-3" />
              <span className='fs-5'>Aes Plant</span>
            </div>
            <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos id voluptatibus autem.</p>
          </div>
          <div className="col-lg-3 col-12 mt-lg-0 mt-4">
            <h4>Social Media</h4>
            <ul className="mt-3 list-unstyled">
              <li className="my-3">
                <a href="#" className="text-white text-decoration-none">Instagram</a>
              </li>
              <li className="my-3">
                <a href="#" className="text-white text-decoration-none">Facebook</a>
              </li>
              <li className="my-3">
                <a href="#" className="text-white text-decoration-none">Twitter</a>
              </li>
              <li className="my-3">
                <a href="#" className="text-white text-decoration-none">Tiktok</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-12 mt-lg-0 mt-4">
            <h4>Helpful Links</h4>
            <ul className="mt-3 list-unstyled">
              <li className="my-3">
                <a href="#" className="text-white text-decoration-none">About</a>
              </li>
              <li className="my-3">
                <a href="#" className="text-white text-decoration-none">Blog</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-12 mt-lg-0 mt-4">
            <h4>Contact Information</h4>
            <ul className="mt-3 list-unstyled">
              <li className="my-3">
                <img src="./assets/icon/ic_telephone.svg" alt="" width="24" />
                <span className="ms-2">+62812345678</span>
              </li>
              <li className="my-3">
                <img src="./assets/icon/ic_envelope.svg" alt="" width="24" />
                <span className="ms-2">support@aesplant.io</span>
              </li>
              <li className="my-3">
                <img src="./assets/icon/ic_pinmap.svg" alt="" width="24" />
                <span className="ms-2">Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="m-0 bg-white" />
      <p className="text-center text-white mb-0 py-4">Copyright &copy; Aes Plant 2023</p>
    </footer>
  )
}

export default Footer