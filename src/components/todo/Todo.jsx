import React from "react";
import PropTypes from "prop-types";

import styles from "./Todo.module.css";

const Todo = ({ text, completeTodo, index, isCompleted }) => {
  return (
    <div className={styles.todo} onClick={() => completeTodo(index)}>
      <span
        className={styles.todoText}
        style={{ textDecoration: isCompleted ? "line-through" : "initial" }}
      >
        {text}
      </span>
    </div>
  );
};

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool,
  completeTodo: PropTypes.func,
  index: PropTypes.number
};

export default Todo;
