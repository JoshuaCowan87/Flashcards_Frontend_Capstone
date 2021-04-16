

import React from "react";
import {Link, useHistory} from "react-router-dom";
import {deleteCard} from "../utils/api";


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
        <div className="container" key={card.id}>
            <div className="card" >
                <p>Front:</p>
                <div className="container">
                    <p>{card.front}</p>
                </div>
                <p>Back:</p>
                <div className="container">
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