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
    history.push("/");
  }

  // submit handler
  async function cardSubmitHandler(e) {
    e.preventDefault();
    await updateCard(editCard);
    history.go("/");
  }

  if (!deck) {
    return <p>Loading...</p>;
  }
  return (
    <div className="container">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={`/decks/${deckId}`}>{deck.name}</Link>
          </li>
          <li className="breadcrumb-item active">Edit Card</li>
        </ol>
      </nav>
      <form>
        <label>Front</label>
        <textarea
          rows="3"
          id="front"
          name="front"
          onChange={cardFrontChangeHandler}
          value={editCard.front}
        ></textarea>

        <label>Back</label>
        <textarea
          rows="3"
          id="back"
          name="back"
          onChange={cardBackChangeHandler}
          value={editCard.back}
        ></textarea>
        </form>
        <div>
        <button className="m-2 btn btn-primary" type="cancel" onClick={cancelHandler}>
          Cancel
        </button>
        <button className="m-2 btn btn-primary" type="submit" onClick={cardSubmitHandler}>
          Submit
        </button>
        </div>
      
    </div>
  );
};

export default EditCard;
