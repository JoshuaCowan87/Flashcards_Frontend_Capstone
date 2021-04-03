import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import ViewDecks from "./Decks/ViewDecks";
import {Route, Switch} from "react-router";

function Layout() {

  return (
    <div>
      <Header />
      {/*<CreateDeck />*/}
      <div className="container">
        <Switch>
        <Route exact path="/">
          <ViewDecks />
        </Route>
          <NotFound />
        </Switch>
      </div>
    </div>
  );
}

export default Layout;
