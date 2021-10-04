

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
        <div className="card" key={card.id}>
            <div className="container" >
                <div className="row">
                <div className="col front-back-card">
                <p>Front:</p>
                <div>
                    <p>{card.front}</p>
                </div>
                </div>
                <div className="col front-back-card">
                <p>Back:</p>
                <div>
                    <p>{card.back}</p>
                </div>
                </div>
                </div>
                </div>
                <Link to={`/decks/${deck.id}/cards/${card.id}/edit`}>
                    Edit
                </Link>
                
                 
                   

            
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