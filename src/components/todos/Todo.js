import React, { useState } from "react";

import { FaTrash, FaPen, FaCheck, FaList } from "react-icons/fa";
import TodoForm from "./TodoForm";

function Todo({ todo, index, completeTodo, removeTodo, updateTodo }) {
  const [isUpdating, setIsUpdating] = useState(false);
  const { isCompleted, text, isUrgent, createdAt } = todo;
  const date = new Date(createdAt).toDateString();

  const handleUpdate = (text) => {
    updateTodo({ ...todo, text });
    setIsUpdating(false);
  };

  return (
    <div className={`todo ${isCompleted && "todo-completed"}`}>
      {isUrgent && <span className="tag" />}
      <div className="todoContent">
        {isUpdating ? (
          <>
            <TodoForm handleSubmit={handleUpdate} defaultValue={text} />
          </>
        ) : (
          <>
            <p className="todoText">{text}</p>
            <span className="todoDate">{date}</span>
          </>
        )}
      </div>
      <div>
        <button
          className={isUpdating && "isDisabled"}
          disabled={isUpdating}
          onClick={() => completeTodo(index)}
        >
          {isCompleted ? <FaList /> : <FaCheck />}
        </button>
        <button
          className={isUpdating && "isDisabled"}
          disabled={isUpdating}
          onClick={() => setIsUpdating(true)}
        >
          <FaPen />
        </button>
        <button
          className={isUpdating && "isDisabled"}
          disabled={isUpdating}
          onClick={() => removeTodo(todo)}
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
}

export default Todo;
