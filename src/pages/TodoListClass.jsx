import React from "react";

import Paper from "../components/paper/PaperClass";
import Header from "../components/header/HeaderClass";
import TodoForm from "../components/todoForm/TodoFormClass";
import Todos from "../components/todos/TodosClass";

import Container from "../layout/ContainerClass";

class TodoList extends React.Component {
  state = {
    todos: [
      { text: "Learning React!", isCompleted: false },
      { text: "Learning React Hooks!", isCompleted: false },
      { text: "Learning styling in React!", isCompleted: false }
    ],
    showAdd: false
  };

  addTodo = value => {
    if (this.state.todos.length < 10) {
      const addedTodos = [
        ...this.state.todos,
        { text: value, isCompleted: false }
      ];

      this.setState({
        todos: addedTodos
      });
    } else {
      alert("Only 10 todos is allowed!");
    }
  };

  completeTodo = index => {
    const addedTodos = [...this.state.todos];
    addedTodos[index].isCompleted = !addedTodos[index].isCompleted;

    this.setState({
      todos: addedTodos
    });
  };

  clearTodos = () => {
    if (this.state.showAdd) {
      alert("Finish add todo before clear");
      return;
    }

    this.setState({
      todos: []
    });
  };

  showAddToggle = () =>
    this.setState(prevState => ({ showAdd: !prevState.showAdd }));

  render() {
    return (
      <Paper>
        <Container
          flexDirection="column"
          justifyContent="space-between"
          height="100%"
        >
          <Header
            showAddToggle={this.showAddToggle}
            showAdd={this.state.showAdd}
            clearTodos={this.clearTodos}
          />
          <TodoForm addTodo={this.addTodo} showAdd={this.state.showAdd} />
          <Todos todos={this.state.todos} completeTodo={this.completeTodo} />
        </Container>
      </Paper>
    );
  }
}

export default TodoList;
