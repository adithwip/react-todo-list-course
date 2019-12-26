import React from "react";
import PropTypes from "prop-types";

import Todo from "./Todo";

const Todos = ({ todos, completeTodo }) => {
  return (
    <section className="todos">
      {todos.map((todo, index) => {
        return (
          <Todo
            key={todo.text}
            text={todo.text}
            isCompleted={todo.isCompleted}
            index={index}
            completeTodo={completeTodo}
          />
        );
      })}
    </section>
  );
};

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  completeTodo: PropTypes.func.isRequired
};

export default Todos;
