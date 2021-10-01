import React from 'react';
import useCart from '../../hooks/useCart';
import useProduct from '../../hooks/useProduct';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart'
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [products] = useProduct();
    const [cart , setCart] = useCart(products);
    
    
    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key);
    }

    return (
        <div>
            
            <div className="shop__container">
                
            <div className="product__container">
                <h1 className="title">See Our Products</h1>
                    {
                        cart.map(produ => <ReviewItem key={produ.key} products={produ} handleRemove={handleRemove}></ReviewItem>)
                    }
                </div>
                
            <div className="cart__container">
                <Cart cart={cart}></Cart>
            </div>
                
            </div>
        </div>
    );
};

export default OrderReview;