import React, { useRef, useEffect } from "react";
import Todo from "./Todo";

function TodoList({ completeTodo, removeTodo, todos }) {
  const todosRef = useRef(null);

  const scrollToBottom = () => {
    todosRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(
    () => {
      scrollToBottom();
    },
    [todos]
  );

  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <Todo
          key={index}
          index={index}
          todo={todo}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
        />
      ))}
      <div ref={todosRef} />
    </div>
  );
}

export default TodoList;
