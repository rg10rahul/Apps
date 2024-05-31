import React from 'react';
import './card.css';

const Card = ({ imgSrc, title, description }) => (
    <div className="cards">
        <img src={imgSrc} alt={title} />
        <div className="content">
            <h3>{title}</h3>
            <p>{description}</p>
            <a href="#" className="btn">Read More</a>
        </div>
    </div>
);

export default Card;
