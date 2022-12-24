import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { bandAdded } from "./bandsSlice";

function BandInput() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(bandAdded(name));
    setName("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="bandName">Band Name: </label>
        <input type="text" id="bandName" onChange={handleChange} value={name} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default BandInput;
