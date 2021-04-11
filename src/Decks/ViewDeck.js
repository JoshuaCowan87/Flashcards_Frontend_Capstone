import React from "react";
import CardList from "../Cards/CardList";
import {Link} from "react-router-dom";

// does not rerender appropriate number of cards
const ViewDeck = ({ deck, decks, setDecks, cards, deleteDeckHandler }) => {
    if (!deck) return null;
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
          <Link to={`/decks/${deck.id}/edit`}>Edit</Link>
          <Link to={`/decks/${deck.id}/study`}>Study</Link>
          <Link to={`/decks/${deck.id}/cards/new`}>Add Cards</Link>
          <button onClick={() => deleteDeckHandler(deck.id)}>Delete Deck</button>
        </div>
        <div>
          <CardList
            deck={deck}
            decks={decks}
            setDecks={setDecks}
            deckId={deck.id}
            cards={cards}
          />
        </div>
      </div>
    );
  };


  export default ViewDeck;