import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="container">
      <div className="frame">
        <section className="header">
          <button className="header-btn main-black-color">Add</button>
          <h1 className="header-title">Todo Lists</h1>
          <button className="header-btn main-red-color">Clear</button>
        </section>

        <section className="add">
          <div className="add-form">
            <input className="add-input" type="text" />
            <button className="add-btn main-black-color">Add</button>
          </div>
        </section>

        <section className="todos">
          <div className="todo">
            <span className="todo-text">Learning React</span>
          </div>
          <div className="todo">
            <span className="todo-text">Learning React</span>
          </div>
          <div className="todo">
            <span className="todo-text">Learning React</span>
          </div>
          <div className="todo">
            <span className="todo-text">Learning React</span>
          </div>
          <div className="todo">
            <span className="todo-text">Learning React</span>
          </div>
          <div className="todo">
            <span className="todo-text">Learning React</span>
          </div>
          <div className="todo">
            <span className="todo-text">Learning React</span>
          </div>
          <div className="todo">
            <span className="todo-text">Learning React</span>
          </div>
          <div className="todo">
            <span className="todo-text">Learning React</span>
          </div>
          <div className="todo">
            <span className="todo-text">Learning React</span>
          </div>
        </section>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
