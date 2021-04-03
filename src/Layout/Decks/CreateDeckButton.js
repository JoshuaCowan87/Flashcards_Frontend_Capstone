import React from "react";


const CreateDeckButton = () => {
const [newDeck, setNewDeck] = useState();

const changeHandler = (e) => {
    setNewDeck({...newDeck, [e.target.name] : target.value})
}

const submitHandler = () => {

}


    return (
        <div>
            <form>
                <label>Deck Name</label>
                <input
                type="text"
                id="name"
                name="name"
                onChange={changeHandler}               
                ></input>

                <label>Description</label>
                <input
                type="textArea"
                id="description"
                name="description"
                onChange={changeHandler}
                ></input>

                <button type="submit" onSubmit={submitHandler}>Submit</button>
            </form>
        </div>
    )
}