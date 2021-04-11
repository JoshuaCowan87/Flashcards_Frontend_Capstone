import React, { useState, useEffect } from "react";
import { createCard, readDeck } from "../utils/api/index";
import { useHistory, Link, useParams } from "react-router-dom";




// deck is undefined, troubleshoot


//  deck, cards, setCards, deckId
const AddCard = ({ deck, deckId}) => {
//assign variables
  const history = useHistory();
 // const {deckId} = useParams();
  //const [deck, setDeck] = useState();
  const [newCard, setNewCard] = useState({
    front: " ",
    back: " ",
    deckId
  });

// fetch deck, need to finish
/* useEffect(() => {
    async function getDeck() {
      const gettingDeck = await readDeck(deckId);
      setDeck(gettingDeck);
    }
    getDeck();
  }, [deckId]);
*/

const cardFrontChangeHandler = (e) => {
    e.preventDefault();
    setNewCard({...newCard, front: e.target.value})
}

const cardBackChangeHandler =(e) => {
    e.preventDefault();
    setNewCard({...newCard, back: e.target.value})
}

  async function cardSubmitHandler(e) {
    const response = await createCard(deckId, newCard);
    history.push("/");
    return response;
  }

  const cardCancelHandler = () => {
    history.push("/decks/:deckId");
  };


  console.log("addCards deck", deck)
  
  console.log("addCards deckId", deckId)
  return (
    <div className="container">
      <ol className="breadcrumb">
        <li className="breacrumb-item">
          <Link to="/">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/decks/:deckId">deck.name</Link>
        </li>
        <li className="breadcrumb-item-active"> Add Card</li>
      </ol>
      <h3>deck.name: Add Card</h3>
      <form onSubmit={cardSubmitHandler}>
        <label>Front</label>
        <input
          type="text"
          id="front"
          name="front"
          onChange={cardFrontChangeHandler}
          value={newCard.front}
        ></input>
        <label>Back</label>
        <input
          type="text"
          id="back"
          name="back"
          onChange={cardBackChangeHandler}
          value={newCard.back}
        ></input>
        <button type="canel" onClick={cardCancelHandler}>
          Cancel
        </button>
        <button type="submit" onClick={cardSubmitHandler}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddCard;
