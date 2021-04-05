import React, {useState} from "react"
import Decks from "./Decks"
import {useParams, useHistory} from "react-router"

function StudyDeck({}) {
const deckId = useParams();
const history = history();
const [deck, setDeck] = useState();

    return (
<div className="container">
    <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                    </li>
                <li className="breadcrumb-itme">
                    <Link to={`/decks/${deckId}`}>
                        {deck.name}
                    </Link>
                <li className="breadcrumb-active">
                    Study
                </li>
                </li>
            </ol>
    <h3> Study: {deck.name}</h3>    
    {/* study cards here */}
</div>
    )
}