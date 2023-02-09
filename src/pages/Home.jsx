import React from 'react'
import { Link } from "react-router-dom";

// Components
import ProductCard from '../components/ProductCard'

// Image
import hero from '../assets/img/hero_img.jpg'
import hero2 from '../assets/img/hero_img2.jpg'
import makeRoom from '../assets/img/make_room.png'
import product1 from '../assets/img/image1.jpg'
import product2 from '../assets/img/image2.jpg'
import product3 from '../assets/img/image3.jpg'
import product4 from '../assets/img/image4.jpg'
import leaf1 from '../assets/img/leaf1.png'
import leaf2 from '../assets/img/leaf2.png'

// Icon
import truckIcon from '../assets/icon/ic_truck.svg'
import headsetIcon from '../assets/icon/ic_headset.svg'
import purseIcon from '../assets/icon/ic_purse.svg'


function Home() {
    const productData = [
        {
            id: 1,
            image: product1,
            name: 'Aglaonemas',
            rating: 1.5,
            review: 124,
            price: 15
        },
        {
            id: 2,
            image: product2,
            name: 'Aglaonemas',
            rating: 5,
            review: 66,
            price: 13
        },
        {
            id: 3,
            image: product3,
            name: 'Aglaonemas',
            rating: 3.5,
            review: 48,
            price: 18
        },
        {
            id: 4,
            image: product4,
            name: 'Aglaonemas',
            rating: 4.5,
            review: 10,
            price: 8
        },
    ]

  return (
    <>
        <header style={{backgroundImage: `url(${hero2})`}} className='bg-img-none'>
            <div className="container-fluid py-5 py-lg-0">
                <div className="row justify-content-lg-end flex-column-reverse flex-lg-row py-5 py-lg-0 align-items-center">
                    <div className="col-12 col-lg-5 text-header text-center text-lg-start" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200" data-aos-easing="ease-in-out">
                        <h1>Make your room <br /> more aestetic with <br /> plant</h1>
                        <p className="mt-md-3 mt-3">Choice the best plant for your room, we provide <br /> Link lot of indoor plant for you.</p>
                        <Link href="/shop.html" className="btn btn-success primary-btn px-4 py-2 mt-5">Shop Now</Link>
                    </div>
                    <div className="col-lg-6 p-0 d-none d-lg-block" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200" data-aos-easing="ease-in-out">
                        <img src={hero} className="ps-md-5 img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </header>

        <main>
            <section className="section-service">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 my-lg-0 my-5 d-flex flex-column align-items-center" data-aos="fade-up" data-aos-duration="1000"  data-aos-offset="300" data-aos-easing="ease-in-out">
                            <img src={truckIcon} alt="" />
                            <h4 className="mt-3">Free Shipping</h4>
                            <p className="text-muted">Free shipping for all order</p>
                        </div>
                        <div className="col-lg-4 my-lg-0 my-5 d-flex flex-column align-items-center" data-aos="fade-up" data-aos-duration="1000"  data-aos-offset="300" data-aos-easing="ease-in-out">
                            <img src={headsetIcon} alt="" />
                            <h4 className="mt-3">Online support</h4>
                            <p className="text-muted">Technical support 24 hours</p>
                        </div>
                        <div className="col-lg-4 my-lg-0 my-5 d-flex flex-column align-items-center" data-aos="fade-up" data-aos-duration="1000"  data-aos-offset="300" data-aos-easing="ease-in-out">
                            <img src={purseIcon} alt="" />
                            <h4 className="mt-3">Secure Payment</h4>
                            <p className="text-muted">All card accepted</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-make-room">
                <div className="container">
                    <div className="row flex-column-reverse flex-lg-row">
                        <div className="col-lg-7 col-12 d-flex justify-content-center justify-content-lg-start mt-lg-0 mt-3" data-aos="fade-right" data-aos-duration="1500" data-aos-offset="500" data-aos-easing="ease-in-out">
                            <img src={makeRoom} alt="" className="make-room-img" />
                        </div>
                        <div className="col-lg-4 col-12 text-center text-lg-start my-auto" data-aos="fade-left" data-aos-duration="1200" data-aos-offset="300" data-aos-easing="ease-in-out">
                            <h2 className="fs-1">Make your room <br /> come alive</h2>
                            <p className="text-muted">Bring your room to life by placing plants <br /> where you want them.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-featured">
                <div className="container">
                    <h2 className="text-center" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" data-aos-easing="ease-in-out">Featured Product</h2>
                    <div className="row mt-5 justify-content-center justify-content-lg-start">
                        {productData.map(product => (
                            <ProductCard product={product} key={product.id} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-subscribe">
                <div className="container">
                    <div className="position-relative subscribe-content d-flex flex-column justify-content-center align-item-center border rounded" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-offset="300" data-aos-easing="ease-in-out">
                        <img src={leaf1} className='position-absolute top-0 start-0 subscribe-content-img' alt="" />
                        <img src={leaf2} className='position-absolute bottom-0 end-0 subscribe-content-img' alt="" />
                        <p className="fs-2 text-center">Subscribe our newsletter <br /> to get 10% off!</p>
                        
                        <form className="mt-3 row justify-content-center align-items-center w-full">
                            <div className="col-4">
                                <label className="visually-hidden" for="email">Email</label>
                                <div className="input-group">
                                    <input type="email" className="form-control" id="email" placeholder="Email" />
                                </div>
                            </div>

                            <div className="col-6 w-auto">
                                <button type="submit" className="btn btn-success primary-btn">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            
            <section className="section-cta-bottom">
                <div className="container d-flex justify-content-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" data-aos-easing="ease-in-out">
                    <button className="btn primary-btn py-2 px-4">Shop Now</button>
                </div>
            </section>
        </main>
    </>
  )
}

export default Home