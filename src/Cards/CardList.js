

import React, {useEffect, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import { listCards, deleteCard, readDeck } from "../utils/api";


function CardList ({deck, Decks, setDecks, deckId, cards, setCards}) {
// set variables

const history = useHistory();





/*
// delete card handler
function deleteCardHandler (cardId) {
    if(window.confirm("Are you super duper sure you want to delete? Once deleted, no take backs")) {
      deleteCard(cardId);
      history.push("/");     
    }
  }
*/

// map cards into format
const cardLayout = cards.map((card) => {
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
                
                    {/* add delete card handler */}
                   

            </div>
        </div>
    )
})

   

    return (
<div>
    {cardLayout}
</div>
    )
}


export default CardList;