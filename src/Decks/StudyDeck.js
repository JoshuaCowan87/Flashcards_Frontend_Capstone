import React, {useState} from "react";
import Decks from "./ViewDeck";
import {useParams, useHistory, Link} from "react-router-dom";
import CardList from "../Cards/CardList";

function StudyDeck({deckId, deck}) {




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
    {/* study cards here */}
</div>
    )
}

export default StudyDeck;