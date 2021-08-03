import React, { useState, useEffect } from "react";

import TodoForm from "../components/todos/TodoForm";
import TodoList from "../components/todos/TodoList";
import Filters from "../components/todos/Filters";
import { firestore, createTodo } from "../services/firebase";

function Todos() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Newest");
  const currentUser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    firestore
      .collection("todos")
      .where("user", "==", currentUser.uid)
      .onSnapshot((querySnapshot) => {
        const todos = [];
        querySnapshot.forEach((doc) => todos.push(doc.data()));
        setTodos(todos);
      });
  }, []);

  const addTodo = (text) => {
    createTodo({
      text,
      isCompleted: false,
      isUrgent: false,
      createdAt: Date.now(),
      user: currentUser?.uid,
    });
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
  );
}

export default Todos;
