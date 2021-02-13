import React from 'react';
import logo from '../../assets/images/logo.svg';
import './Header.scss';

const Header = () => {
    return (
        <div className="header">
            <img className="header__logo" src={logo} alt="logo" />
            <h1 className="header__header">Uniform Teeth</h1>
        </div>
    );
};

export default Header;
