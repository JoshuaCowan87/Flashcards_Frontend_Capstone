import React, {useState, useEffect, useParams} from "react"
import {readDeck, listDecks} from "../../utils/api/index"
import DeckLayout from "./DeckLayout"

const ViewDecks = () => {
// set variables
    const [decks, setDecks] = useState([]);
   
// retrieve decks


useEffect(() => {
  async function loadDecks() {
    const loadedDecks = await listDecks();
    setDecks(loadedDecks);
  }
  loadDecks();
}, []);
/*
useEffect(() => {
  async function getDecks() {
    const receivedDecks = await listDecks();
    setDeck(receivedDecksDeck);
  }
  getDecks();
}, []);
*/

   

    return (
<div>
  <DeckLayout decks={decks} />
</div>
    )
}


export default ViewDecks;