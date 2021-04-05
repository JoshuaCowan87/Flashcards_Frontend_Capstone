import React, {useState} from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Decks from "../Decks/Decks"
import ViewDecks from "./ViewDecks"


export default function Home({decks}) {
const history = useHistory();

    return (
        <div className="container">
            <div>
                {/* how does "/decks/new" go to CreateDeck.js */}
            <button type="button" onClick={() => history.pushState("/decks/new")}>
            Create Deck
            </button>
            </div>
            
            <Switch>
                <Route exact path="/">
                    <ViewDecks decks={decks}/>
                </Route>
                <Route path="/decks/:deckId">
                    <Decks decks={decks} />
                </Route>
            </Switch>
        </div>
    )
}