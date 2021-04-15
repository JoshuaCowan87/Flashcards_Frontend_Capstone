import React from "react";
import {Link, useHistory} from "react-router-dom";





function ViewDecks ({decks, setDecks, deleteDeckHandler}) {
// set variables
    const history = useHistory();


// map decks into format
const deckLayout = decks.map((deck) => {
      return (
        <div className="container">
<div>
            <button type="button" onClick={() => history.push("/decks/new")}>            
            Create Deck
            </button>
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
          <Link to={`/decks/${deck.id}/`}>
            View
          </Link>
          <Link to={`/decks/${deck.id}/study`}>
            Study
          </Link>
          <button type="button" onClick= {() => deleteDeckHandler(deck.id)}>
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