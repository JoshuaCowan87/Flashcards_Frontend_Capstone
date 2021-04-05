import React from "react"
import {useParams, useState, useRouteMatch, Route, Link} from "react-router-dom"


const Decks = ({decks, setDecks}) => {
// set variables
const {deckId} = useParams();
const {path, url} = useRouteMatch();
const deck = decks.find(deck => deck.id === `${deckId}`) 

    return (
<div className="container">
    <div>
    <ol className="breadcrumb">
        <li className="breadcrumb-item">
            <Link to="/">Home</Link>
        </li>
        <li className="breadcrumb-active">{deck.name}</li>
    </ol>
    </div>
    <div className="deck-info">
     <h3>{deck.name}</h3>   
     <p>{deck.description}</p>
     <Link to="/decks/:deckId/edit">Edit</Link>
     <Link to="/decks/:deckId/study">Study</Link>
     <Link to="/decks/:deckId/cards/new">Add Cards</Link>
     <button>Delete Deck</button>
    </div>
    <div className="cards">
{/* add cards here */}
    </div>

</div>

    )
}

export default Decks





{/*    /decks/:deckId       */}