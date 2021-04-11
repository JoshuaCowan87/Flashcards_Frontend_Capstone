

import React, {useEffect, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import { listCards, deleteCard, readDeck } from "../utils/api";


function CardList ({deck, cards}) {
// set variables

const history = useHistory();






// delete card handler
function deleteCardHandler (cardId) {
    if(window.confirm("Are you super duper sure you want to delete? Once deleted, no take backs")) {
      deleteCard(cardId).then(() => history.push("/"));     
    }
  }


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
                
                 
                   

            </div>
            <button type="delete" onClick={ () => deleteCardHandler(card.id)}>Delete Card</button>
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