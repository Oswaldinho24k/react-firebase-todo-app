import React from "react";
import Todo from "./Todo";

function TodoList({ completeTodo, removeTodo, todos }) {
  return (
    <div>
      {todos.map((todo, index) => (
        <Todo
          key={index}
          index={index}
          todo={todo}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
