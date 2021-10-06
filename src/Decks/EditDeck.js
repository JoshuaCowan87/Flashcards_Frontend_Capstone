import React, { useState, useEffect } from "react";
import { readDeck, updateDeck } from "../utils/api/index";
import { Link, useHistory } from "react-router-dom";

const EditDeck = ({ deck, deckId }) => {
  // assign variables
  const history = useHistory();
  //const {deckId} = useParams();

  const initialDeckState = {
    id: " ",
    name: " ",
    description: " ",
  };
  const [editDeck, setEditDeck] = useState(initialDeckState);

  // retrieve deck
  useEffect(() => {
    async function getDeck() {
      const gettingDeck = await readDeck(deckId);
      setEditDeck(gettingDeck);
    }
    getDeck();
  }, [deckId]);

  // change handler
  const changeHandler = (e) => {
    e.preventDefault();
    setEditDeck({ ...editDeck, [e.target.name]: e.target.value });
  };

  // submit handler
  async function submitHandler(e) {
    e.preventDefault();
    await updateDeck(editDeck);
    history.push("/");
  }

  // cancel handler
  const cancelHandler = (e) => {
    history.push("/");
  };
  
  if (!deck) {
    return <p>Loading</p>;
  }
  return (
    <div className="container">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link className="b-crumb" to="/">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link className="b-crumb" to={`/decks/${deckId}`}>{editDeck.name}</Link>
        </li>
        <li className="breadcrumb-item active">Edit Deck</li>
      </ol>
      <div>
        <div className="col">
      <form>
        <label className="edit-card-front-back-title">Deck Name</label>
        <input
          type="textarea"
          id="name"
          name="name"
          onChange={changeHandler}
          value={editDeck.name}
          className="row edit-card-textbox"
        ></input>

        <label className="edit-card-front-back-title">Description</label>
        <textarea
          rows="3"
          id="description"
          name="description"
          onChange={changeHandler}
          value={editDeck.description}
          className="row edit-card-textbox"
        ></textarea>
         </form>
        </div>
        
        <button
          className="m-2 edit-card-cancel buttons-all"
          type="submit"
          onClick={submitHandler}
        >
          Submit
        </button>
        <button
          className="m-2 edit-card-submit buttons-all"
          type="cancel"
          onClick={cancelHandler}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditDeck;
