/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";

// import Todo from "../todo/Todo";
// import Todo from "../todo/TodoNoJSX";
import Todo from "../todo/TodoClass";
import Container from "../../layout/Container";

// import styles from "./Todos.module.css";
import * as styles from "./Todos.styles";

const Todos = ({ todos, completeTodo }) => {
  return (
    <section className="todos-component">
      <Container flexDirection="column" minHeight="500px">
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
          <div css={styles.todoPlaceholderText}>
            Add todo by clicking{" "}
            <span css={styles.addButtonPlaceholderText}>Add</span> button on the
            top left corner
          </div>
        )}
      </Container>
    </section>
  );
};

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  completeTodo: PropTypes.func.isRequired
};

export default Todos;
