import React, { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import CardList from "../Cards/CardList";
import { listCards, readDeck } from "../utils/api/index";
import NotEnoughCards from "../Cards/NotEnoughCards";

function StudyDeck({ deckId /*deck, cards, setCards*/ }) {
  const [cards, setCards] = useState();
  const [deck, setDeck] = useState();
  const [front, setFront] = useState(true);
  const [cardIndex, setCardIndex] = useState(0);
  const history = useHistory();

  // fetch deck and cards
  useEffect(() => {
    async function getCardsAndDeck() {
      const response = await readDeck(deckId);
      setDeck(response);
      setCards(response.cards);
    }
    getCardsAndDeck();
  }, deckId);

  // flip hander
  const flipHandler = (e) => {
    setFront(!front);
  };

  // next handler
  const nextHandler = (e) => {
    if (cardIndex + 1 < cards.length) {
      setCardIndex(cardIndex + 1);
      setFront(true);
    } else {
      const result = window.confirm(
        "Do you want to restart? To return to homepage click cancel"
      );
      if (result) {
        setFront(true);
        setCardIndex(0);
      } else {
        history.push("/");
      }
    }
  };

  console.log("study deck", deck);
  console.log("study cards", cards);

  
  if (!cards) {
    return <p>Loading...</p>;
  }
  if (cards.length < 3) { 
     return <NotEnoughCards deck={deck} deckId={deckId} cards={cards} />;
    }

  return (
    
      
    <div className="container">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-itme">
            <Link to={`/decks/${deckId}`}>{deck.name}</Link>
            <li className="breadcrumb-item-active">Study</li>
          </li>
        </ol>
      </nav>
      <h3> Study: {deck.name}</h3>
      <div className="container">
        <h5>
          Card {cardIndex + 1} of {cards.length}
        </h5>
      </div>
      <div>
        <p>{front ? cards[cardIndex].front : cards[cardIndex].back}</p>
      </div>
      <button type="flip" onClick={flipHandler}>
        Flip
      </button>
      <button type="next" onClick={nextHandler}>
        Next
      </button>
    </div>
      
  );
}

export default StudyDeck;
