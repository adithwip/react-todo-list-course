import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import Paper from "./components/Paper";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";

function App() {
  return (
    <Paper>
      <Header />
      <TodoForm />
      <Todos />
    </Paper>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
