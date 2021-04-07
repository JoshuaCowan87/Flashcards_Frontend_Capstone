import React from "react"
import {useParams, useHistory, Link} from "react-router-dom"
import {deleteDeck, listDecks} from "../utils/api/index";

function Decks({decks, deleteDeckHandler}) {
// set variables
const {deckId} = useParams();
const history = useHistory();



const deck =decks.find(deck => `${deck.id}` === deckId)
console.log("deckId", deckId)
console.log("deck", deck)
console.log("decks", decks)

// delete deck 
function deleteDeckHandler (deckId) {
    if(window.confirm("Are you super duper sure you want to delete? Once deleted, no take backs")) {
      deleteDeck(deckId).then(history.go(0))
    }
  }

if (deck) {
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
        <Link to="/decks/:deckId/edit">Edit</Link>
        <Link to="/decks/:deckId/study">Study</Link>
        <Link to="/decks/:deckId/cards/new">Add Cards</Link>
        <button onClick={deleteDeckHandler}>Delete Deck</button>
    </div>
    <div className="cards">
            {/* add cards here */}
    </div>

</div>

    )
}
return <p>Deck Not Found</p>
}

export default Decks





