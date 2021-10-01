import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import Rating from 'react-rating';

const Product = (props) => {
    const { name, img, seller, stock, price , star } = props.product;
    const shoppingCart = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="product">
            <div className="product__img">
            <img src={img} alt="" />
            </div>
            <div className="product__deatailes">
                <h3 className="pro_title">Product name : {name}</h3>
                <div className="product__details__container">
                    <div className="product__price">
                    <h2 className="pro_price">Price : {price} $</h2>
                <p>Seller by : {seller}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button onClick={props.button} className="purchase__now__btn"><span>{shoppingCart}</span> Add to cart</button>
                    </div>
                    <div className="product__details">
                        <h1>Rating</h1>
                        <Rating
                            initialRating={star}
                            emptySymbol="far fa-star color_rat"
                            fullSymbol="fas fa-star color_rat"
                            readonly></Rating>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;