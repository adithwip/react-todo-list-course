import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import TodoList from "./pages/TodoList";

function App() {
  return <TodoList />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
