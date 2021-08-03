import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import "./App.scss";
import TodoList from "./components/TodoList";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [todos, setTodos] = useState([
    {
      text: "React Hooks in Depth",
      isCompleted: false,
    },
    {
      text: "Write Articles @ Medium",
      isCompleted: false,
    },
    {
      text: "Share article at Reddit",
      isCompleted: false,
    },
  ]);
  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <Navbar />
      <div className="container">
        <TodoList
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          todos={todos}
        />
        <TodoForm addTodo={addTodo} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
