import React, {useState, useEffect} from "react";
import {readDeck, updateDeck} from "../utils/api/index";
import {Link, useHistory, useParams} from "react-router-dom"

const EditDeck = ({setDecks, decks, deckId}) => {

// assign variables
const history = useHistory();
//const {deckId} = useParams();

const initialDeckState = {
    id: " ",
    name: " ",
    description: " ",
}
const [editDeck, setEditDeck] = useState(initialDeckState);


// retrieve deck
useEffect(() => {
    async function getDeck() {
      const gettingDeck = await readDeck(deckId);
      setEditDeck(gettingDeck);
    }
    getDeck()
  }, [deckId]);

   
// change handler
    const changeHandler = (e) => {
        e.preventDefault();
        setEditDeck({...editDeck, [e.target.name]: e.target.value})
    }
       
// submit handler    
     async function submitHandler(e) {
        const response = await updateDeck(editDeck);
        return response;
        history.push("/");
    }

// cancel handler   
    const cancelHandler = (e) => {
        history.push("/");
    }

    return (
        <div className="container">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                    </li>
                <li className="breadcrumb-item">
                    <Link to="/decks/:deckId">{editDeck.name}</Link>
                </li>
                <li className="breadcrumb-item-active">
                    Edit Deck
                </li>
            </ol>
            <form>
                <label>Deck Name</label>
                <input
                type="text"
                id="name"
                name="name"
                onChange={changeHandler}
                value={editDeck.name}               
                ></input>

                <label>Description</label>
                <input
                type="textArea"
                id="description"
                name="description"
                onChange={changeHandler}
                value={editDeck.description}         
                ></input>
                <button type="cancel" onClick={cancelHandler}>Cancel</button>
                <button type="submit" onClick={submitHandler}>Submit</button>
            </form>
        </div>
    )
}


export default EditDeck;