import React from 'react';
import Navbar from './navbar';
import Header from './header';
import './Home.css';

const Homepage = ({onExploreClick}) => ( 
    <div className="container">
        <Navbar></Navbar>
        <Header onExploreClick={onExploreClick} />
    </div>
);

export default Homepage;
