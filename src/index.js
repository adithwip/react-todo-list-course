import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "emotion-theming";

import "./styles.css";

import TodoList from "./pages/TodoList";
// import TodoList from "./pages/TodoListClass";

const theme = {
  color: {
    primary: {
      black: "#484848",
      red: "#e06262"
    }
  }
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TodoList />
    </ThemeProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
