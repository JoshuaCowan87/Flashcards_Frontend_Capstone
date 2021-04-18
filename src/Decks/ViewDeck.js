import React from "react";
import CardList from "../Cards/CardList";
import {Link} from "react-router-dom";

// does not rerender appropriate number of cards
const ViewDeck = ({ deck, decks, setDecks, cards, deleteDeckHandler}) => {



    if (!deck) return null;
    return (
      <div className="container">
        <div>
          <ol className="breadcrumb">
            <li className="breadcrumb-item" key="0">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" key="1">{deck.name}</li>
          </ol>
        </div>
        <div className="deck-info">
          <h3>{deck.name}</h3>
          <p>{deck.description}</p>
          <Link className="m-2 btn btn-primary" to={`/decks/${deck.id}/edit`}>Edit</Link>
          <Link className="m-2 btn btn-primary" to={`/decks/${deck.id}/study`}>Study</Link>
          <Link className="m-2 btn btn-primary" to={`/decks/${deck.id}/cards/new`}>Add Cards</Link>
          <button className="btn btn-primary m-2" onClick={() => deleteDeckHandler(deck.id)}>Delete Deck</button>
        </div>
        <div>
          <h4> {deck.cards.length} Cards</h4>
          <CardList
            deck={deck}
            decks={decks}
            setDecks={setDecks}
            deckId={deck.id}
            cards={deck.cards}
          />
        </div>
      </div>
    );
  };


  export default ViewDeck;