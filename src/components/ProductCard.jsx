import React from "react";
import { Link } from "react-router-dom";

// image
import fullStarIcon from '../assets/icon/ic_full-star.svg'
import halfStarIcon from '../assets/icon/ic_half-star.svg'
import starIcon from '../assets/icon/ic_star.svg'

function ProductCard({product}) {
    let starEl = [];

    const starRating = (rating) => {
        starEl = [];

        for(let i = 1; i <= rating; i++) {
            starEl.push(fullStarIcon)
        }

        if((rating - Math.floor(rating)) !== 0) {
            starEl.push(halfStarIcon)
        }

        if(rating < 4.1) {
            starEl.push(starIcon)
        }

        if(starEl.length < 5) {
            while(starEl.length < 5) {
                starEl.push(starIcon)
            }
        }
    }

    return (
        <div className="col-6 col-lg-3 mt-3 mt-lg-4 rounded-3" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200" data-aos-easing="ease-in-out">
            <div className="card">
                
                <img src={product.image} className="m-3 border" alt="" />
                
                <div className="card-body">
                    <h5 className="card-title">
                        <Link href="#" className="card-link">{product.name}</Link>
                    </h5>
                    <div className="d-flex align-items-center">
                        {starRating(product.rating)}

                        {starEl.map(item => (
                            <span>
                                <img src={item} alt="" className="star-img" />
                            </span>
                        ))}
                        <span className="ms-2 text-muted text-middle">({product.review})</span>
                    </div>
                    <div className="mt-3 d-flex justify-content-between align-items-center">
                        <div className="d-flex flex-column">
                            <small>Price</small>
                            <h4 className="price-tag text-danger">{product.price}$</h4>
                        </div> 
                        
                        <Link href="#" className="btn btn-outline-success secondary-btn">Add to cart</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;