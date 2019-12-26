import React from "react";
import PropTypes from "prop-types";

const Todo = ({ text, completeTodo, index, isCompleted }) => {
  return (
    <div className="todo" onClick={() => completeTodo(index)}>
      <span
        className="todo-text"
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
