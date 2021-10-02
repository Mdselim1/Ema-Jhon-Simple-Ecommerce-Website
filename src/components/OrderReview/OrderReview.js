import React from 'react';
import { useHistory } from 'react-router';
import useCart from '../../hooks/useCart';
import useProduct from '../../hooks/useProduct';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [products] = useProduct();
    const [cart, setCart] = useCart(products);
    const history = useHistory();
    
    
    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key);
    };

    const handlePlaceOrder = () => {
        if (cart.length === 0) {
            alert('Please Add Some Product');
        }
        else {
            history.push('/placeorder');
            setCart([]);
            clearTheCart();
        }
        
    };

    return (
        <div>
            
            <div className="shop__container">
                
            <div className="product__container">
                <h1 className="title">See Your Product</h1>
                    {
                        cart.map(produ => <ReviewItem key={produ.key} products={produ} handleRemove={handleRemove}></ReviewItem>)
                    }
                </div>
                
            <div className="cart__container">
                    <Cart cart={cart}>
                        <button onClick={handlePlaceOrder} className="purchase__now__btn">
                            PlaceOrder
                        </button>
                </Cart>
            </div>
                
            </div>
        </div>
    );
};

export default OrderReview;