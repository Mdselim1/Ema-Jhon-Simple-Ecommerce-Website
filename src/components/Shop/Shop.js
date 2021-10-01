import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';


const Shop = () => {

    const [product, setProduct] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);


    useEffect(() => {
        fetch(('./products.JSON'))
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                setDisplayProducts(data);
            }
                )
    }, [])

    useEffect(() => {
        if (product.length) {
            const savedCart = getStoredCart();
            const storeCart = [];
            for (const key in savedCart) {
                const addProduct = product.find(produ => produ.key === key);
                if (addProduct) {
                    const quantity = savedCart[key];
                    addProduct.quantity = quantity;
                    storeCart.push(addProduct);
                }
            }
            setCart(storeCart);    
        }
    },[product])
    
    const addPriceBtnValue = (product) => {
        const newCart = [...cart, product]
        setCart(newCart);
        addToDb(product.key)
    };

    const productSearch = (event) => {
        const searchText = (event.target.value).toLowerCase();
        const matchedProduct = product.filter(pro => pro.name.toLowerCase().includes(searchText));
        setDisplayProducts(matchedProduct);
        console.log(matchedProduct.length);
    }

    return (
        <div>
            <div className="search__box">
                <input placeholder="Search Your Product" type="search" onChange={productSearch} name="search" className="search__type" />
                <button className="search__btn">Search</button>
            </div>

            <div className="shop__container">
                
            <div className="product__container">
                <h1 className="title">See Our Products</h1>
                {
                    displayProducts.map(data => <Product
                        product={data}
                        key={data.key}
                        button={()=>addPriceBtnValue(data)}
                    ></Product>)
                }
                </div>
                
            <div className="cart__container">
                <Cart cart={cart}></Cart>
            </div>
                
            </div>
            
        </div>
    );
};

export default Shop;