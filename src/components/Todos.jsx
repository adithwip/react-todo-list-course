import React from "react";

import Todo from "./Todo";

const Todos = () => {
  const todos = [
    {
      text: "Learning React!"
    },
    {
      text: "Learning Props in React"
    },
    {
      text: "Learning React Hooks!"
    },
    {
      text: "Learning React!"
    },
    {
      text: "Learning Props in React"
    },
    {
      text: "Learning React Hooks!"
    },
    {
      text: "Learning Props in React"
    },
    {
      text: "Learning React Hooks!"
    },
    {
      text: "Learning Props in React"
    },
    {
      text: "Learning React Hooks!"
    }
  ];
  return (
    <section className="todos">
      {todos.map(todo => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};

export default Todos;
