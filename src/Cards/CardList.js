

import React, {useEffect, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import { listCards, deleteCard, readDeck } from "../utils/api";


function CardList ({deck, setDecks, deckId}) {
// set variables
const [cards, setCards] = useState();
//const [deck, setDeck] = useState();
const history = useHistory();
console.log("cards", deckId)

// fetch cards
useEffect(() => {
    async function getDeck () {
        const gettingDeck = await readDeck(deckId);
       // setDeck(gettingDeck);
    }
    getDeck();
}, [deckId]);
console.log("deck", deck)

// delete card handler
function deleteCardHandler (CardId) {
    if(window.confirm("Are you super duper sure you want to delete? Once deleted, no take backs")) {
      deleteCard(CardId);
      history.push("/");     
    }
  }

// map cards into format
const cardLayout = deck.cards.map((card) => {
    return (
        <div className="container">
            <div className="card" key={card.id}>
                <div>
                    <p>{card.front}</p>
                </div>
                <div>
                    <p>{card.back}</p>
                </div>
                <Link to={`/decks/${deck.id}/cards/${card.id}/edit`}>
                    Edit
                </Link>
                <button type="button" onClick={deleteCardHandler}>
                    Delete
                </button>

            </div>
        </div>
    )
})

   

    return (
<p>hello</p>
    )
}


export default CardList;