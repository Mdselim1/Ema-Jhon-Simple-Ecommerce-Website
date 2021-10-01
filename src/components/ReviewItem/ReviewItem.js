import React from 'react';
import Rating from 'react-rating';


const ReviewItem = (props) => {
    const { name, img, seller, price, star,key,quantity } = props.products
    const { handleRemove } = props;
    return (
        <div>
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
                            <h4>Quantity : {quantity}</h4>
                <button onClick={()=>handleRemove(key)} className="purchase__now__btn"> Remove Item</button>
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
        </div>
    );
};

export default ReviewItem;