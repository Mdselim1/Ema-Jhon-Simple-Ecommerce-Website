import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props
   
    let totalPrice = 0;
    let totalQuantity = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        totalPrice = totalPrice + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

    const deliveryCharge = (totalPrice / 100) * 2;
    const totalTax = (totalPrice / 100) * 10;
    const grandTotal = deliveryCharge + totalTax + totalPrice;
    

    return (
        <div className="price__cart__design">
            <div className="total__price">
            <h3>Order Summury</h3>
            </div>
            <div className="price__list total__price">
                <h3>Items ordered :</h3>
                <span>{totalQuantity}</span>
            </div>
            <div className="price__list total__price">
                <h3>Product Price :</h3>
                <span>$ {totalPrice.toFixed(2)}</span>
            </div>
            <div className="price__list total__price">
            <h3>Delivery Charge :</h3>
            <span>$ {deliveryCharge.toFixed(2)}</span>
            </div>
            <div className="price__list total__price">
                <h3>Total Tax :</h3>
                <span>$ {totalTax.toFixed(2)}</span>
            </div>
            <div className="price__list">
                <h3>Total Price :</h3>
                <span>$ {grandTotal.toFixed(2)}</span>
            </div>
            <div style={{
                margin: '20px 0',
                textAlign:'center'
            }}>
                {props.children}
            </div>
            
            
            
        </div>
    );
};

export default Cart;