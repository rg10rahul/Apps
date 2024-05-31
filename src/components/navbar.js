import React from 'react';
import './navbar.css';
import logo from '../assets/logo.png';
const Navbar = () => (
    <div className="navbar">
        <img src={logo} alt="Logo" className="logo" />
        <a href="#" className="Home">Home</a>
        <a href="#" className="Home">About us</a>
        <a href="#" className="Home">More</a>
        <a href="#" className="Home">Contact us</a>
    </div>
);

export default Navbar;
