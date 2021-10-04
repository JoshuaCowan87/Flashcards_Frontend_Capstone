import React from "react";
import { Link } from "react-router-dom";

function ViewDecks({ decks, deleteDeckHandler }) {


  // map decks into format
  const deckLayout = decks.map((deck) => {
    return (
      <div className="decks-card col" key={deck.id}>
        <div>
          <h3>{deck.name}</h3>

          <div>
            <p>{deck.description}</p>
          </div>
          <div>{deck.cards.length} cards</div>
          <Link className="m-2 deck-buttons" to={`/decks/${deck.id}/`}>
            View
          </Link>
          <Link className="m-2 deck-buttons" to={`/decks/${deck.id}/study`}>
            Study
          </Link>
          <button
            className="m-2 create-deck"
            // type=button
            onClick={() => deleteDeckHandler(deck.id)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  });

  return (
    <div className="container">
      <h3 className="current-decks-header">Current Decks...</h3>
      <div className="all-decks row">{deckLayout}</div>
      <Link className="create-deck" to={'/decks/new'}>Create Deck</Link>
      {/* <button onclick={()}>Create Deck</button> */}
    </div>
  );
}

export default ViewDecks;
