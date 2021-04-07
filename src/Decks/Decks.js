import React, {useState, useEffect} from "react";
import {useParams, useHistory, Link} from "react-router-dom";
import {deleteDeck, listDecks, readDeck, deleteCard} from "../utils/api/index";
import CardList from "../Cards/CardList"

function Decks({decks, setDecks, deleteDeckHandler}) {
// set variables
const {deckId} = useParams();
const history = useHistory();
const [cards, setCards] = useState();

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

// fetch cards
useEffect(() => {
    async function getDeck () {
        const gettingDeck = await readDeck(deckId);
        setDecks(gettingDeck);
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

//find deck
const deck =decks.find(deck => `${deck.id}` === deckId)

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
        <button onClick={() => deleteDeckHandler(deckId)}>Delete Deck</button>
    </div>
    <div className="cards">
        <CardList />
    </div>

</div>

    )
}
return <p>Deck Not Found</p>
}

export default Decks





