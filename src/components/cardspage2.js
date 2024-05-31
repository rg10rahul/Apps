import React from 'react';
import Card from './card';
import img1 from "../assets/goa.png";
import img2 from "../assets/india2.png";
import img3 from "../assets/india1.png";
import './cardspage2.css';

const Cardspage = () => (
    <div className="cardspage">
        <h1>Our Featured Adventures</h1>
        <div className="cardcontainer">
            <Card imgSrc={img1} title="Goa" description="This is 1st picture" />
            <Card imgSrc={img2} title="Taj Mahal" description="This is 2nd picture" />
            <Card imgSrc={img3} title="India Gate" description="This is 3rd picture" />
        </div>
    </div>
);

export default Cardspage;
