import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import TodoForm from "../components/todos/TodoForm";
import TodoList from "../components/todos/TodoList";
import Filters from "../components/todos/Filters";
import { firestore, saveTodo, deleteTodo } from "../services/firebase";

function Todos() {
  const location = useLocation();
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Newest");
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const isWorldsTodo = location.pathname === "/" ? true : false;

  useEffect(
    () => {
      const querySign = isWorldsTodo ? "!=" : "==";
      firestore
        .collection("todos")
        .where("user", querySign, currentUser?.uid)
        .get()
        .then((querySnapshot) => {
          const todos = [];
          querySnapshot.forEach((doc) => todos.push(doc.data()));
          setTodos(todos);
        });
    },
    // eslint-disable-next-line
    [isWorldsTodo]
  );

  const addTodo = (text) => {
    const newTodo = {
      text,
      isCompleted: false,
      isUrgent: false,
      createdAt: Date.now(),
      user: currentUser?.uid,
    };
    saveTodo(newTodo).then((todo) => {
      setTodos((oldTodos) => [todo, ...oldTodos]);
    });
  };

  const removeTodo = (todo) => {
    deleteTodo(todo).then(() => {
      setTodos((oldTodos) => [...oldTodos.filter((t) => t.id !== todo.id)]);
    });
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  const handleSort = (e) => {
    setSort(e.target.value);
  };

  const updateTodo = (todo) => {
    saveTodo(todo).then(() => {
      setTodos((oldTodos) => [
        ...oldTodos.map((t) => {
          console.log(t.id === todo.id);
          if (t.id === todo.id) return todo;
          else return t;
        }),
      ]);
    });
  };

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
        isWorldsTodo={isWorldsTodo}
      />
      <TodoList
        removeTodo={removeTodo}
        updateTodo={updateTodo}
        todos={filteredTodos}
        isWorldsTodo={isWorldsTodo}
      />
      <TodoForm handleSubmit={addTodo} isWorldsTodo={isWorldsTodo} />
    </div>
  );
}

export default Todos;
