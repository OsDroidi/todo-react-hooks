// ToDo Next
// * Add Local Storge
// * Dark Mode
// * click to put storke inside text

import React, { useState } from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";

import "./App.css";
import Header from "./Components/Header";
import TodoList from "./Components/TodoList";
import SubmitForm from "./Components/SubmitForm";

function App() {
  const [state, setState] = useState({ tasks: ["task1", "task2", "task3"] });
  const handleDelete = (index) => {
    const newArr = [...state.tasks];
    newArr.splice(index, 1);
    setState({ tasks: newArr });
  };
  const handleSubmit = (task) => {
    setState({ tasks: [...state.tasks, task] });
  };
  return (
    <>
      <div className="wrapper">
        <div className="card frame">
          <Header numTodos={state.tasks.length} />
          <TodoList tasks={state.tasks} onDelete={handleDelete} />
          <SubmitForm onFormSubmit={handleSubmit} />
        </div>
      </div>
    </>
  );
}

export default App;
