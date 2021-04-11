import React, {useState} from "react";
import {useParams, useHistory, Link} from "react-router-dom";
import CardList from "../Cards/CardList";

function StudyDeck({deckId, deck, cards, setCards}) {





console.log("study deckId", deckId, deck, cards)

    return (
<div className="container">
    <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                    </li>
                <li className="breadcrumb-itme">
                    <Link to={`/decks/${deckId}`}>
                        {deck.name}
                    </Link>
                <li className="breadcrumb-active">
                    Study
                </li>
                </li>
            </ol>
    <h3> Study: {deck.name}</h3>  
    <div className="container">
        <h5>Card {cards.id} of {cards.length}</h5>    
        <p></p>
    </div>  
    
</div>
    )
}

export default StudyDeck;