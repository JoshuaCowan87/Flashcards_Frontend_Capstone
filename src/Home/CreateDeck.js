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
          <Link to="/">Home</Link>
        </li>
        <li className="breadcrumb-item active">Create Deck</li>
      </ol>
      <form onSubmit={submitHandler}>
        <label>Deck Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={changeHandler}
          value={newDeck.name}
        ></input>

        <label>Description</label>
        <textarea
          id="description"
          name="description"
          onChange={changeHandler}
          value={newDeck.description}
        ></textarea>

        <button type="cancel" onClick={cancelHandler}>
          Cancel
        </button>
        <button type="submit" onSubmit={submitHandler}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateDeck;
