import React from "react";
import { Link } from "react-router-dom";

function NotEnoughCards({ deck, deckId, cards }) {
  return (
    <div className="container">
      <nav className="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item" key="0">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item" key="1">
            <Link to={`/decks/${deckId}`}>{deck.name}</Link>
          </li>
          <li className="breadcrumb-item-active" key="2">Study</li>
        </ol>
      </nav>
      <div>
        <h3> Study: {deck.name}</h3>
        <p>
          Not Enough Cards! You need at least 3 cards to study. There are{" "}
          {cards.length} in this deck
        </p>
      </div>
      <button>
        <Link to={`/decks/${deck.id}/cards/new`}>Add Cards</Link>
      </button>
    </div>
  );
}

export default NotEnoughCards;
