import React from "react";

import { FaTrash, FaPen, FaCheck, FaList } from "react-icons/fa";

function Todo({ todo, index, completeTodo, removeTodo, updateTodo }) {
  const { isCompleted, text, isUrgent, createdAt } = todo;
  return (
    <div className={`todo ${isCompleted && "todo-completed"}`}>
      {isUrgent && <span className="tag" />}
      <div className="todoContent">
        <p className="todoText">{text}</p>
        <span className="todoDate">{createdAt.toDateString()}</span>
      </div>
      <div>
        <button onClick={() => completeTodo(index)}>
          {isCompleted ? <FaList /> : <FaCheck />}
        </button>
        <button onClick={() => updateTodo(index)}>
          <FaPen />
        </button>
        <button onClick={() => removeTodo(index)}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
}

export default Todo;
