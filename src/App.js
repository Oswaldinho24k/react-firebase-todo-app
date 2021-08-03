import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import "./App.scss";
import TodoList from "./components/TodoList";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Filters from "./components/Filters";

function App() {
  const [todos, setTodos] = useState([
    {
      text: "React Hooks in Depth",
      isCompleted: false,
      isUrgent: true,
      createdAt: new Date(2021, 5, 28),
    },
    {
      text: "Write Articles @ Medium",
      isCompleted: false,
      isUrgent: false,
      createdAt: new Date(2021, 5, 29),
    },
    {
      text: "Share article at Reddit",
      isCompleted: false,
      isUrgent: true,
      createdAt: new Date(2021, 5, 30),
    },
  ]);
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Newest");

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

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  const handleSort = (e) => {
    setSort(e.target.value);
  };

  //changeUrgency

  //updateTodo

  const filteredTodos = todos.filter((todo) => {
    if (filter === "Urgent") return todo.isUrgent;
    if (filter === "Not Urgent") return !todo.isUrgent;
    return true;
  });

  filteredTodos.sort((todoA, todoB) => {
    if (sort === "Oldest")
      return new Date(todoA.createdAt) - new Date(todoB.createdAt);
    if (sort === "Urgent") return todoB.isUrgent - todoA.isUrgent;
    if (sort === "Not Urgent") return todoA.isUrgent - todoB.isUrgent;
    return new Date(todoB.createdAt) - new Date(todoA.createdAt);
  });

  return (
    <div className="app">
      <Navbar />
      <div className="container">
        <Filters
          handleFilter={handleFilter}
          handleSort={handleSort}
          filter={filter}
          sort={sort}
        />
        <TodoList
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          todos={filteredTodos}
        />
        <TodoForm addTodo={addTodo} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
