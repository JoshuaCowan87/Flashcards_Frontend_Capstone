import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import {readCard} from "../utils/api/index"

const EditCard = ({deckId}) => {
    // assign variables
  const initialCardState = {
      front: " ",
      back: " "
  }
const [editCard, setEditCard] = useState(initialCardState);
const {cardId} = useParams();

// fetch card
useEffect(() => {
    async function getCard() {
        const response = await readCard(cardId);
        setEditCard(response)
    }
    getCard();
}, [cardId]) 

console.log("editCard card", editCard)
    return (
        <div>
            <form >
        <label>Front</label>
        <input
          type="text"
          id="front"
          name="front"
        //  onChange={/*cardFrontChangeHandler*/}
          value={editCard.front}
        ></input>
        <label>Back</label>
        <input
          type="text"
          id="back"
          name="back"
         
          value={editCard.back}
        ></input>
        <button type="canel">
          Cancel
        </button>
        <button type="submit" >
          Submit
        </button>
      </form>
        </div>
    )
}


export default EditCard;