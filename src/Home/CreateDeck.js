import React, { useState } from "react";
import { createDeck } from "../utils/api/index";
import { useHistory, Link } from "react-router-dom";

const CreateDeck = () => {
  const [newDeck, setNewDeck] = useState({
    name: "",
    description: "",
  });
  const history = useHistory();

  const changeHandler = (e) => {
    e.preventDefault();
    setNewDeck({ ...newDeck, [e.target.name]: e.target.value });
  };

  async function submitHandler(e) {
    const response = await createDeck(newDeck);
    history.push("/");
    return response;
  }

  const cancelHandler = (e) => {
    history.push("/");
  };

  return (
    <div className="container">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link className="b-crumb" to="/">Home</Link>
        </li>
        <li className="breadcrumb-item active">Create Deck</li>
      </ol>
      <div>
        <div className="col">
      <form onSubmit={submitHandler}>
        <label className="edit-card-front-back-title">Deck Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={changeHandler}
          value={newDeck.name}
          className="row edit-card-textbox"
        ></input>

        <label className="edit-card-front-back-title">Description</label>
        <textarea
          id="description"
          name="description"
          onChange={changeHandler}
          value={newDeck.description}
          className="row edit-card-textbox"
        ></textarea>
</form>
</div>
        
        <button className="edit-card-submit buttons-all" type="submit" onSubmit={submitHandler}>
          Submit
        </button>
        <button className="edit-card-cancel buttons-all" type="cancel" onClick={cancelHandler}>
          Cancel
        </button>
      
      </div>
    </div>
  );
};

export default CreateDeck;
