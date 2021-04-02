import React, {useState, useEffect} from "react"
import {readDeck, listDecks} from "../../utils/api/index"
import DeckLayout from "./DeckLayout"

export const ViewDecks = () => {
// set variables
    const [decks, setDecks] = useState();

// retrieve decks
    useEffect (() => {
      async function getDecks() {
          const abortController = new AbortController()
          try {
              const deckResponse = await listDecks(abortController.signal)
              setDecks(deckResponse)
          } catch (error) {
              console.error('Something went wrong', error)
          }
          return() => {
              abortController.abort()
          }
      }
      fetchData()
  }, [])

    return (
<div>
  <DeckLayout decks={decks} setDecks={setDecks} />
</div>
    )
}