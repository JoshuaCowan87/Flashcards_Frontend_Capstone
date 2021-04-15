
import React from "react";
import {Link} from "react-router-dom"

function NotEnoughCards({deck, deckId, cards}) {
    return (
        <div className="container">
            <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-itme">
            <Link to={`/decks/${deckId}`}>{deck.name}</Link>
            <li className="breadcrumb-item-active">Study</li>
          </li>
        </ol>
      </nav>
      <div>
      <h3> Study: {deck.name}</h3>
      <p>Note Enough Cards! You need at least 3 cards to study. There are {cards.length} in this deck</p>
      </div>
      <button><Link to={`/decks/${deck.id}/cards/new`}>Add Cards</Link></button>     
        </div>
    )
}

export default NotEnoughCards;