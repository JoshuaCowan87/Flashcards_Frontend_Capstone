import React, {useState, useEffect, useParams} from "react";
import {readDeck, listDecks, deleteDeck} from "../utils/api/index";
import {Link, useHistory} from "react-router-dom";
import CardList from "../cards/CardList"



const ViewDecks = ({decks}) => {
// set variables
    const history = useHistory();

// delete deck 
function deleteDeckHandler () {
  if(window.confirm("Are you super duper sure you want to delete? Once deleted, no take backs")) {
    deleteDeck(deckId).then(history.go(0))
  }
}
   
// retrieve decks
useEffect(() => {
  async function getDecks() {
    const gettingDecks = await listDecks();
    setDecks(gettingDecks);
  }
  getDecks();
}, []);

// map decks into format
const deckLayout = decks.map((deck) => {
      return (
        <div className="container">

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
          <button type="button" onClick={deleteDeckHandler}>
            Delete
          </button>
        </div> 
        </div>
    )
    })    
 
    return (
<div>
  {deckLayout}
  <h2>Cards</h2>
  <div>
    {CardList}
  </div>
</div>
    )
}


export default ViewDecks;