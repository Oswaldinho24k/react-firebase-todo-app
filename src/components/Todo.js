import React, { useState } from "react";
import {
  IoIosTrash,
  IoIosCheckmarkCircle,
  IoMdBackspace,
} from "react-icons/io";

function Todo({ todo, index, completeTodo, removeTodo }) {
  const { isCompleted, text } = todo;
  return (
    <div className={`todo ${isCompleted && "todo-completed"}`}>
      <p>{text}</p>
      <div>
        <button onClick={() => completeTodo(index)}>
          {isCompleted ? <IoMdBackspace /> : <IoIosCheckmarkCircle />}
        </button>
        <button onClick={() => removeTodo(index)}>
          <IoIosTrash />
        </button>
      </div>
    </div>
  );
}

export default Todo;
