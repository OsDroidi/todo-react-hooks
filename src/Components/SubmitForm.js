import React, { useState } from "react";

function SubmitForm(props) {
  const [state, setState] = useState({ term: "" });
  function handleSubmit(e) {
    e.preventDefault();
    if (state.term === "") return;
    props.onFormSubmit(state.term);
    setState({ term: "" });
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        placeholder="Enter Item"
        value={state.term}
        onChange={(e) => setState({ term: e.target.value })}
      />
      <button className="button">Submit</button>
    </form>
  );
}

export default SubmitForm;
