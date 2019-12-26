import React from "react";

import Todo from "./Todo";

const Todos = ({ todos }) => {
  return (
    <section className="todos">
      {todos.map(todo => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};

export default Todos;
