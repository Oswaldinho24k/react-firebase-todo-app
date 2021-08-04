import React from "react";
import Todo from "./Todo";

function TodoList({ completeTodo, removeTodo, updateTodo, todos }) {
  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <Todo
          key={index}
          index={index}
          todo={todo}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
