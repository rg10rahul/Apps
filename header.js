import React from 'react';
import './header.css';

const Header = ({onExploreClick}) => (
    <div className="header">
        <div className="col">
            <h2>Welcome to Tripadvisor</h2>
            <h1>Explore the beautiful world</h1>
            <button className="button" onClick={onExploreClick}>
                Explore
            </button>
        </div>
    </div>
);

export default Header;
