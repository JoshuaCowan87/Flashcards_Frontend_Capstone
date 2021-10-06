import React from "react";
import CardList from "../Cards/CardList";
import {Link} from "react-router-dom";

// does not rerender appropriate number of cards
const ViewDeck = ({ deck, decks, setDecks, cards, deleteDeckHandler}) => {



    if (!deck) return null;
    return (
      <div className="container" style={{marginTop:"40px"}}>
        <div>
          <ol className="breadcrumb">
            <li className="breadcrumb-item" key="0">
              <Link to="/" className="breadcrumb-home">Home</Link>
            </li>
            <li className="breadcrumb-item active" key="1">{deck.name}</li>
          </ol>
        </div>
        <div className="deck-info">
          <h2 className="deck-name">{deck.name}</h2>
          <h4 className="deck-description">{deck.description}</h4>
          <Link className="m-2 deck-buttons" to={`/decks/${deck.id}/edit`}>Edit</Link>
          <Link className="m-2 deck-buttons" to={`/decks/${deck.id}/study`}>Study</Link>
          <Link className="m-2 deck-buttons" to={`/decks/${deck.id}/cards/new`}>Add Cards</Link>
          <button className="m-2 create-deck" onClick={() => deleteDeckHandler(deck.id)}>Delete Deck</button>
        </div>
        <br />
        <div>
          <h4 className="deck-description"> {deck.cards.length} Cards</h4>
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