import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

function TodoForm({ handleSubmit, defaultValue = "" }) {
  const [value, setValue] = useState(defaultValue);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(value);
    if (!value) return;
    handleSubmit(value);
    setValue("");
  };

  return (
    <div className="todo-form">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="input"
          rows="1"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder=" Enter your task"
          required
        />
        <button type="submit" onClick={onSubmit}>
          {" "}
          <FaPlusCircle />
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
