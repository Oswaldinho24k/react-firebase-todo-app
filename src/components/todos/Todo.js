import React, { useState } from "react";

import { FaTrash, FaPen, FaCheck, FaList, FaSave } from "react-icons/fa";
import TodoForm from "./TodoForm";

function Todo({ todo, removeTodo, updateTodo }) {
  const [isUpdating, setIsUpdating] = useState(false);
  const { isCompleted, text, isUrgent, createdAt } = todo;
  const date = new Date(createdAt).toDateString();

  const handleUpdateText = (text) => {
    updateTodo({ ...todo, text });
    setIsUpdating(false);
  };

  const changeTodoStatus = () => {
    updateTodo({ ...todo, isCompleted: !isCompleted });
  };

  const changeTodoUrgency = () => {
    updateTodo({ ...todo, isUrgent: !isUrgent });
  };

  return (
    <div className={"todo"}>
      {isUrgent && <span className="tag">Urgent</span>}
      <div className="todoContent">
        {isUpdating ? (
          <div className="editTodo">
            <div>
              <input
                onChange={changeTodoUrgency}
                className="checkbox"
                type="checkbox"
                id="isUrgent"
                name="isUrgent"
                checked={isUrgent}
              />
              <label htmlFor="isUrgent"> Urgent</label>
            </div>
            <TodoForm
              handleSubmit={handleUpdateText}
              defaultValue={text}
              submitIcon={<FaSave />}
            />
          </div>
        ) : (
          <>
            <p className={`todoText ${isCompleted && "todo-completed"}`}>
              {text}
            </p>
            <span className="todoDate">{date}</span>
          </>
        )}
      </div>
      <div className="actions">
        <button
          className={`greenButton ${isUpdating && "isDisabled"}`}
          disabled={isUpdating}
          onClick={changeTodoStatus}
        >
          {isCompleted ? <FaList /> : <FaCheck />}
        </button>
        <button
          className={`${isUpdating && "isDisabled"}`}
          disabled={isUpdating}
          onClick={() => setIsUpdating(true)}
        >
          <FaPen />
        </button>
        <button
          className={`redButton ${isUpdating && "isDisabled"}`}
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
