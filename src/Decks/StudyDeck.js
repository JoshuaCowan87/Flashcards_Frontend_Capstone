import React, {useState} from "react";
import {useParams, useHistory, Link} from "react-router-dom";
import CardList from "../Cards/CardList";

function StudyDeck({deckId, deck, cards, setCards}) {


const card = cards.find(card => )

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
        <h5>Card</h5>    
    </div>  
    
</div>
    )
}

export default StudyDeck;