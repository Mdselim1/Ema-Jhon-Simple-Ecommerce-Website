import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className="header__logo">
            <img className="logo" src={logo} alt="" />
            </div>
            <nav className="header__menu">
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/order">Order Review</NavLink>
                <NavLink to="/manage">Manage Inventory</NavLink>
            </nav>
            
        </div>
    );
};

export default Header;