import React, { useState } from "react";

import Paper from "../components/Paper";
import Header from "../components/Header";
import TodoForm from "../components/TodoForm";
import Todos from "../components/Todos";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: "Learning React!", isCompleted: false },
    { text: "Learning React Hooks!", isCompleted: false },
    { text: "Learning styling in React!", isCompleted: false }
  ]);
  const [showAdd, setShowAdd] = useState(false);

  const addTodo = value => {
    const addedTodos = [...todos, { text: value }];

    setTodos(addedTodos);
  };

  const completeTodo = index => {
    const addedTodos = [...todos];
    addedTodos[index].isCompleted = true;
    setTodos(addedTodos);
  };
  const showAddToggle = () => setShowAdd(!showAdd);

  return (
    <Paper>
      <Header showAddToggle={showAddToggle} showAdd={showAdd} />
      <TodoForm addTodo={addTodo} showAdd={showAdd} />
      <Todos todos={todos} completeTodo={completeTodo} />
    </Paper>
  );
};

export default TodoList;
