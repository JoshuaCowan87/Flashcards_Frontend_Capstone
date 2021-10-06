import React, { useState } from "react";
import { createCard } from "../utils/api/index";
import { useHistory, Link } from "react-router-dom";

const AddCard = ({ deck, setDeck, deckId }) => {
  //assign variables
  const history = useHistory();
  const [newCard, setNewCard] = useState({
    front: " ",
    back: " ",
    deckId,
  });

  const cardFrontChangeHandler = (e) => {
    e.preventDefault();
    setNewCard({ ...newCard, front: e.target.value });
  };

  const cardBackChangeHandler = (e) => {
    e.preventDefault();
    setNewCard({ ...newCard, back: e.target.value });
  };

  async function cardSubmitHandler(e) {
    e.preventDefault();
    await createCard(deckId, newCard);
    history.push("/");
    setDeck(deck);
  }

  // const cardCancelHandler = () => {
  //   history.push("/decks/:deckId");
  // };

  const cardCancelHandler = () => {
    history.push(`/decks/${deckId}`);
  };

  if (!deck) {
    return <p>Loading...</p>;
  }
  return (
    <div className="container">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link className="b-crumb" to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link className="b-crumb" to={`/decks/${deckId}`}>{deck.name}</Link>
          </li>
          <li className="breadcrumb-item active">Add Card</li>
        </ol>
      </nav>

     
      <div>
        <div className="col">
      <form >
        <label className="edit-card-front-back-title">Front</label>
        <textarea
          type="text"
          id="front"
          name="front"
          onChange={cardFrontChangeHandler}
          value={newCard.front}
          className="row edit-card-textbox"
        ></textarea>
        <label className="edit-card-front-back-title">Back</label>
        <textarea
          type="text"
          id="back"
          name="back"
          onChange={cardBackChangeHandler}
          value={newCard.back}
          className="row edit-card-textbox"
        ></textarea>
        </form>
        </div>
        <button className="m-2 edit-card-submit buttons-all" type="submit" onClick={cardSubmitHandler}>
          Submit
        </button>
        <button className="m-2 edit-card-cancel buttons-all" type="canel" onClick={cardCancelHandler}>
          Cancel
        </button>
        </div>
    </div>
  );
};

export default AddCard;
