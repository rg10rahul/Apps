import React from 'react';
import Card from './card';
import img1 from "../assets/img1.png";
import img2 from "../assets/kashmir.png";
import img3 from "../assets/india3.png";
import './cardspage1.css';

const Cardspage = () => (
    <div className="cardspage">
        <h1>Our Featured Adventures</h1>
        <div className="cardcontainer">
            <Card imgSrc={img1} title="Himachal Pradesh" description="This is 1st picture" />
            <Card imgSrc={img2} title="Kashmir" description="This is 2nd picture" />
            <Card imgSrc={img3} title="Rajasthan" description="This is 3rd picture" />
        </div>
    </div>
);

export default Cardspage;
