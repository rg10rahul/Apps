import React, {useState} from 'react';
import Cardspage1 from './Components/cardspage1';
import Cardspage2 from './Components/cardspage2';
import Homepage from './Components/Home';
import './App.css';

const App = () => {
    const [showCards, setShowCards] = useState(false);

    const handleExploreClick = () => {
        setShowCards(true);
    };
    return(
        <div className="container">
            <Homepage onExploreClick={handleExploreClick}/>
            {showCards && (
                <>
                    <Cardspage1 />
                    <Cardspage2 />
                </>
            )}
        </div>
    );
};

export default App;