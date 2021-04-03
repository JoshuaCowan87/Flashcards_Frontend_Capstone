import React from "react"
import {readDeck, listDecks, deleteDeck} from "../../utils/api/index"
import {Link, useHistory} from "react-router-dom"


function DeckLayout({decks}) {
  const history = useHistory();
console.log(decks)
  function deleteDeckHandler () {
    if(window.confirm("Are you super duper sure you want to delete? Once deleted, no take backs")) {
      deleteDeck(deckId).then(history.go(0))
    }
  }

    return (
<div className="containter">
<p>hello</p>
    {decks.map((deck) => {
      return (
        
        <div className="deck" key={deck.id}>
<p>hello1</p>
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
          <button type="button" onClick={deleteDeckHandler}>
            Delete
          </button>
        </div> 
    )
    })}    
    
</div> 
    )
}

export default DeckLayout;