import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <div className="todo-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          rows="1"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder=" Enter your task"
          required
        />
        <button type="submit" onClick={handleSubmit}>
          {" "}
          <FaPlusCircle />
        </button>
      </form>
    </div>
  );
}

export default TodoForm;