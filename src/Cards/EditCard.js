import React, { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { readCard, updateCard } from "../utils/api/index";

const EditCard = ({ deck, deckId }) => {
  // assign variables
  const initialCardState = {
    front: " ",
    back: " ",
  };
  const [editCard, setEditCard] = useState(initialCardState);
  const { cardId } = useParams();
  const history = useHistory();

  // fetch card
  useEffect(() => {
    async function getCard() {
      const response = await readCard(cardId);
      setEditCard(response);
    }
    getCard();
  }, [cardId]);

  // card change handler
  const cardFrontChangeHandler = (e) => {
    e.preventDefault();
    setEditCard({ ...editCard, front: e.target.value });
  };
  const cardBackChangeHandler = (e) => {
    e.preventDefault();
    setEditCard({ ...editCard, back: e.target.value });
  };

  // cancel handler
  function cancelHandler(e) {
      e.preventDefault();
    history.push("/decks/:deckId");
  }

  // submit handler
  async function cardSubmitHandler(e) {
      e.preventDefault();
    const response = await updateCard(editCard);
    history.push("/decks/:deckId");
  }

  console.log("editCard card", editCard);
  console.log("edit card cardId", cardId);
  if (!deck) {
    return <p>Loading...</p>;
  }
  return (
    <div className="container">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/decks/:deckId">{deck.name}</Link>
        </li>
        <li className="breadcrumb-item-active">Edit Card</li>
      </ol>
      <form>
        <label>Front</label>
        <input
          type="text"
          id="front"
          name="front"
          onChange={cardFrontChangeHandler}
          value={editCard.front}
        ></input>

        <label>Back</label>
        <input
          type="text"
          id="back"
          name="back"
          onChange={cardBackChangeHandler}
          value={editCard.back}
        ></input>
        <button type="cancel" onClick={cancelHandler}>
          Cancel
        </button>
        <button type="submit" onClick={cardSubmitHandler}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditCard;
