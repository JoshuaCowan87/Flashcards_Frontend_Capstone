import React, { useState, useEffect } from "react";
import { createCard, readDeck } from "../utils/api/index";
import { useHistory, Link, useParams } from "react-router-dom";







// ={name: "Loading..."}
const AddCard = ({deck, setDeck, deckId}) => {
//assign variables
  const history = useHistory();
  const [newCard, setNewCard] = useState({
    front: " ",
    back: " ",
    deckId
  });

  console.log("add card deckID", deckId)
  console.log("add card deck", deck)

// fetch deck
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
    e.preventDefault();
    const response = await createCard(deckId, newCard);
    history.push("/");
    {/* find deck
        add card to deck 
        setDecks(new version of deck, with new card)
    */}
    return response;
  }

  const cardCancelHandler = () => {
    history.push("/decks/:deckId");
  };


 if (!deck) {return <p>Loading...</p>}
  return (
      
    <div className="container">
      <ol className="breadcrumb">
        <li className="breacrumb-item">
          <Link to="/">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/decks/:deckId">{deck.name}</Link>
        </li>
        <li className="breadcrumb-item-active"> Add Card</li>
      </ol>
      <h3>{deck.name}: Add Card</h3>
      <form >
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
