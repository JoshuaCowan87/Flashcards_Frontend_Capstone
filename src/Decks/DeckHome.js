import React, { useState, useEffect } from "react";
import { Switch, Route, Link, useParams } from "react-router-dom";
import StudyDeck from "./StudyDeck";
import EditDeck from "./EditDeck";
import {listCards, readDeck} from "../utils/api/index";
import ViewDeck from "./ViewDeck";
import AddCard from "../Cards/AddCard";
import EditCard from "../Cards/EditCard";

const DeckHome = ({ decks, setDecks, deleteDeckHandler }) => {
  const { deckId } = useParams();
  const [cards, setCards] = useState([]);
  const [deck, setDeck] = useState();

  // fetch specific deck
  useEffect(() => {
    async function getDeck() {
      const gettingDeck = await readDeck(deckId);
      setDeck(gettingDeck);
    }
    getDeck();
  }, []);
 // const deck = decks.find((deck) => `${deck.id}` === deckId);

  // fetch cards per deck
  useEffect(() => {
    async function getCards() {
      const gettingDeck = await listCards(deckId);
      setCards(gettingDeck);
    }
    getCards();
  }, []);

console.log("deckhome deck", deck);
console.log("deckhome deck id", deckId)
  return (
    <div>
      <Switch>
        <Route exact path="/decks/:deckId">
          <ViewDeck {...{ deck, decks, setDecks, cards }}/>
        </Route>
        <Route path="/decks/:deckId/study">
          <StudyDeck
            deckId={deckId}
            deck={deck}
            deleteDeckHandler={deleteDeckHandler}
            cards={cards}
            setCards={setCards}
          />
        </Route>
        <Route path="/decks/:deckId/edit">
          <EditDeck
            deckId={deckId}
            deck={deck}
            setDecks={setDecks}
            decks={decks}
          />
        </Route>
        <Route path="/decks/:deckId/cards/:cardId/edit">
          <EditCard {...{deck, cards, setCards, deckId}}/>
        </Route>
        <Route path="/decks/:deckId/cards/new">
          <AddCard {...{deck, cards, setCards, deckId}}/>
        </Route>
        <Route>
          <p>Deck not found</p>
        </Route>
      </Switch>
    </div>
  );
};

export default DeckHome;
