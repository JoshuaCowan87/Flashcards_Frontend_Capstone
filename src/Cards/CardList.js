import React, {useEffect, useState} from "react";
import {useHistory, useParams, useRouteMatch} from "react-router-dom";
import {Link} from "react-router"
import { listCards } from "../utils/api";


export function CardList () {
const [cards, setCards] = useState();
const [deck, SetDeck] = useState();

// fetch cards
useEffect(() => {
    async function getCards () {
        const gettingCards = await listCards();
        setCards(gettingCards);
    }
    getCards();
}, []);

// delete card handler
const deleteCardHandler = () => {
    
}

// map cards into format
const cardLayout = cards.map(card => {
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