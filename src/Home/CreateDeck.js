import React, {useState} from "react";
import {createDeck} from "../utils/api/index"
import {useHistory, Link} from "react-router-dom";


const CreateDeck = () => {
    const initialFormState = {
        name: " ",
        description: " ",
    };
const [newDeck, setNewDeck] = useState({initialFormState});
const history = useHistory();

const changeHandler = (e) => {
    e.preventDefault();
    setNewDeck({...newDeck, [e.target.name] : e.target.value})
}

const submitHandler = (e) => {
    createDeck(newDeck);
    history.push("-2");
}

const cancelHandler = (e) => {
    history.push("/");
}


    return (
        <div className="container">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                    </li>
                <li className="breadcrumb-item-active">Create Deck</li>
            </ol>
            <form>
                <label>Deck Name</label>
                <input
                type="text"
                id="name"
                name="name"
                onChange={changeHandler}
                value={newDeck.name}               
                ></input>

                <label>Description</label>
                <input
                type="textArea"
                id="description"
                name="description"
                onChange={changeHandler}
                value={newDeck.description}
                ></input>
                <button type="cancel" onClick={cancelHandler}>Cancel</button>
                <button type="submit" onSubmit={submitHandler}>Submit</button>
            </form>
        </div>
    )
}

export default CreateDeck;