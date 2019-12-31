/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import PropTypes from "prop-types";

// import styles from "./TodoForm.module.css";
import * as styles from "./TodoForm.styles";

const TodoForm = ({ addTodo, showAdd }) => {
  const [value, setValue] = React.useState("");

  const handleFormSubmit = e => {
    e.preventDefault();

    if (!value) {
      alert("No blank Todo!");
      return; // to stop JS to execute next line of code
    }

    if (value.length > 40) {
      alert("Please create a shorter todo text!");
      setValue("");
      return;
    }

    addTodo(value);
    setValue("");
  };

  if (showAdd) {
    return (
      <section css={styles.add}>
        <form css={styles.addForm} onSubmit={handleFormSubmit}>
          <input
            css={styles.addInput}
            type="text"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <button css={styles.addBtn}>Add</button>
        </form>
      </section>
    );
  } else {
    return null;
  }
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired
};

export default TodoForm;
