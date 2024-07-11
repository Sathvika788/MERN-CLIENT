import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./components/ToDoList";

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
