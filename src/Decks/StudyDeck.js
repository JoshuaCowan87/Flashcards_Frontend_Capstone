import React, { useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import CardList from "../Cards/CardList";

function StudyDeck({ deckId, deck, cards, setCards }) {
  const [studyState, setStudyState] = useState({
    cards: [],
    currentCard: 0,
    front: true,
    flipped: false,
  });

  
  // flip hander
  const flipHandler = (e) => {
    setStudyState({
      ...studyState,
      front: !studyState.front,
      flipped: !studyState.flipped,
    });
  };

  // next handler
  const nextHandler = (e) => {
    setStudyState({ ...studyState, front: true, currentCard: studyState.currentCard + 1 });
  };

  const display = () => {
    if (studyState.front) {
      return studyState.front;
    }
    return studyState.back;
  };
  console.log("study deck", deck);
  console.log("study cards", cards);
  console.log("study state", studyState);

  if (!studyState || !deck) {
    return <p>Loading...</p>;
  }
  return (
    <div className="container">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        <li className="breadcrumb-itme">
          <Link to={`/decks/${deckId}`}>{deck.name}</Link>
          <li className="breadcrumb-item-active">Study</li>
        </li>
      </ol>
      <h3> Study: {deck.name}</h3>
      <div className="container">
        <h5>
          Card {cards.id} of {cards.length}
        </h5>
        <p></p>
      </div>
      <div>{display}</div>
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
