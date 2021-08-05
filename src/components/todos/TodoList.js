import React from "react";
import Todo from "./Todo";

function TodoList({ removeTodo, updateTodo, todos, isWorldsTodo }) {
  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <Todo
          key={index}
          index={index}
          todo={todo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
          isWorldsTodo={isWorldsTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
