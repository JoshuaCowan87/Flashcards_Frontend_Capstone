import React from "react";
import {Link, useHistory} from "react-router-dom";

function ViewDecks ({decks, deleteDeckHandler}) {

// map decks into format
const deckLayout = decks.map((deck) => {
      return (
        <div className="container">
<div>
          
            </div>
        <div className="deck" key={deck.id}>

          <div>
            <h3>{deck.name}</h3>
          </div>
          <div>
            <p>{deck.description}</p>
          </div>
          <div>
            {deck.cards.length} cards
          </div>         
          <Link className="m-2 btn btn-primary" to={`/decks/${deck.id}/`}>
            View
          </Link>
          <Link className="m-2 btn btn-primary" to={`/decks/${deck.id}/study`}>
            Study
          </Link>
          <button className="m-2 btn btn-primary type=button" onClick= {() => deleteDeckHandler(deck.id)}>
            Delete
          </button>
        </div> 
        </div>
    )
    })    
 
    return (
<div>
  {deckLayout}
</div>
    )
}


export default ViewDecks;