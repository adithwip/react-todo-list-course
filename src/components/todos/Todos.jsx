import React from "react";
import PropTypes from "prop-types";

import Todo from "../todo/Todo";

import styles from "./Todos.module.css";

const Todos = ({ todos, completeTodo }) => {
  return (
    <section className={styles.todos}>
      {todos.length > 0 &&
        todos.map((todo, index) => {
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
      {todos.length === 0 && (
        <div className={styles.todoPlaceholderText}>
          Add todo by clicking{" "}
          <span className={styles.addButtonPlaceholderText}>Add</span> button on
          the top left corner
        </div>
      )}
    </section>
  );
};

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  completeTodo: PropTypes.func.isRequired
};

export default Todos;
