

function ViewDeck({decks, deck, setDecks, deleteDeckHandler, deckId, cards, setCards}) {

if (deck) {
    return (
<div className="container">
    <div>
    <ol className="breadcrumb">
        <li className="breadcrumb-item">
            <Link to="/">Home</Link>
        </li>
        <li className="breadcrumb-active">{deck.name}</li>
    </ol>
    </div>
    <div className="deck-info">
         <h3>{deck.name}</h3>   
        <p>{deck.description}</p>
        <Link to={`/decks/${deck.id}/edit`}>Edit</Link>
        <Link to={`/decks/${deck.id}/study`}>Study</Link>
        <Link to={`/decks/${deck.id}/addcards`}>Add Cards</Link>
        <button onClick={() => deleteDeckHandler(deckId)}>Delete Deck</button>
    </div>
    <div className="cards">
        <Switch>
            <Route exact path="/decks/:deckId">
                <CardList deck={deck} decks={decks} setDecks={setDecks} deckId={deckId} cards={cards} />
            </Route>
            
        </Switch>
        
    </div>

</div>

    )
}
return <p>Deck Not Found</p>


}






