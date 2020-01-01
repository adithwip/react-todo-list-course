import React, { useState } from "react";

// import Paper from "../components/paper/Paper";
import Paper from "../components/paper/PaperNoJSX";
// import Header from "../components/header/Header";
import Header from "../components/header/HeaderNoJSX";
// import TodoForm from "../components/todoForm/TodoForm";
import TodoForm from "../components/todoForm/TodoFormNoJSX";
// import Todos from "../components/todos/Todos";
import Todos from "../components/todos/TodosNoJSX";

import Container from "../layout/Container";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: "Learning React!", isCompleted: false },
    { text: "Learning React Hooks!", isCompleted: false },
    { text: "Learning styling in React!", isCompleted: false }
  ]);
  const [showAdd, setShowAdd] = useState(false);

  const addTodo = value => {
    if (todos.length < 10) {
      const addedTodos = [...todos, { text: value }];

      setTodos(addedTodos);
    } else {
      alert("Only 10 todos is allowed!");
    }
  };

  const completeTodo = index => {
    const addedTodos = [...todos];
    addedTodos[index].isCompleted = !addedTodos[index].isCompleted;
    setTodos(addedTodos);
  };

  // const clearTodos = () => !showAdd && setTodos([]);
  const clearTodos = () => {
    if (showAdd) {
      alert("Finish add todo before clear");
      return;
    }
    setTodos([]);
  };
  const showAddToggle = () => setShowAdd(!showAdd);

  return (
    <Paper>
      <Container
        flexDirection="column"
        justifyContent="space-between"
        height="100%"
      >
        <Header
          showAddToggle={showAddToggle}
          showAdd={showAdd}
          clearTodos={clearTodos}
        />
        <TodoForm addTodo={addTodo} showAdd={showAdd} />
        <Todos todos={todos} completeTodo={completeTodo} />
      </Container>
    </Paper>
  );
};

export default TodoList;
