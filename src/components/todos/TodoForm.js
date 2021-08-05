import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

function TodoForm({
  handleSubmit,
  defaultValue = "",
  submitIcon,
  isWorldsTodo,
}) {
  const [value, setValue] = useState(defaultValue);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    handleSubmit(value);
    setValue("");
  };

  return (
    <div className="todo-form">
      <form onSubmit={onSubmit}>
        <input
          disabled={isWorldsTodo}
          type="text"
          className="input"
          rows="1"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder=" Enter your task"
          required
          className={`${isWorldsTodo && "isDisabled"}`}
        />
        <button
          type="submit"
          onClick={onSubmit}
          disabled={isWorldsTodo}
          className={`${isWorldsTodo && "isDisabled"}`}
        >
          {" "}
          {submitIcon ? submitIcon : <FaPlusCircle />}
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
