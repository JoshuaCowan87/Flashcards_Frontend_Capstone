import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import DeckHome from "../Decks/DeckHome";
import { deleteDeck, listDecks } from "../utils/api/index";
import CreateDeck from "../Home/CreateDeck";
import ViewDecks from "../Home/ViewDecks";

import "./styles.css"

function Layout() {
  //assign variables
  const [decks, setDecks] = useState([]);
  const history = useHistory();

  // retrieve decks
  useEffect(() => {
    async function getDecks() {
      const gettingDecks = await listDecks();
      console.log("gettingDecks", gettingDecks)
      setDecks(gettingDecks);
    }
    getDecks();
  }, [setDecks]);
console.log("decks", decks)

  // delete deck
  function deleteDeckHandler(deckId) {
    if (
      window.confirm(
        "Are you super duper sure you want to delete? Once deleted, no take backs"
      )
    ) {
      deleteDeck(deckId);
      history.push("/");
    }
  }
  return (
    <div className="background-color">
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <ViewDecks
              decks={decks}
              setDecks={setDecks}
              deleteDeckHandler={deleteDeckHandler}
            />
          </Route>
          <Route path="/decks/new">
            <CreateDeck />
          </Route>
          <Route path="/decks/:deckId">
            <DeckHome
              decks={decks}
              setDecks={setDecks}
              deleteDeckHandler={deleteDeckHandler}
            />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Layout;
