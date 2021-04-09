import React, {useEffect} from "react";
import { Route, Switch, useHistory} from "react-router-dom";
import DeckHome from "../Decks/DeckHome"
import {deleteDeck, listDecks} from "../utils/api/index";
import CreateDeck from "./CreateDeck"
import ViewDecks from "./ViewDecks"

function Home({decks, setDecks}) {
const history = useHistory();

// retrieve decks
useEffect(() => {
    async function getDecks() {
      const gettingDecks = await listDecks();
      setDecks(gettingDecks);
    }
    getDecks();
  }, [setDecks]);

// delete deck 
function deleteDeckHandler (deckId) {
    if(window.confirm("Are you super duper sure you want to delete? Once deleted, no take backs")) {
      deleteDeck(deckId);
      history.push("/");     
    }
  }

    return (
        <div className="container">
            <div>
            <button type="button" onClick={() => history.push("/decks/new")}>            
            Create Deck
            </button>
            </div>           
            <Switch>               
                <Route exact path="/">
                    <ViewDecks decks={decks} setDecks={setDecks} deleteDeckHandler={deleteDeckHandler}/>
                </Route>
                <Route exact path="/decks/new">
                    <CreateDeck />
                </Route>        
                <Route path="/decks/:deckId">
                    <DeckHome decks={decks} setDecks={setDecks} deleteDeckHandler={deleteDeckHandler}/>
                </Route>                
            </Switch>
        </div>
    )
}
export default Home;