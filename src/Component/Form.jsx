import React, { useState, useEffect, useRef } from "react";

function Form({ onSubmit, update }) {
  const [input, setInput] = useState(update ? update.value : "");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    if (update) {
      // Update mode
      onSubmit(input);
    } else {
      // Add mode
      onSubmit({ text: input });
    }

    setInput("");
  };

  return (
    <form className="todo-form container mt-3" onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          placeholder={update ? "Update your task" : "Add a task"}
          value={input}
          name="text"
          className="form-control"
          onChange={(e) => setInput(e.target.value)}
          ref={inputRef}
        />

        <button
          type="submit"
          className={`btn ${update ? "btn-warning" : "btn-secondary"}`}
        >
        
          {update ? "Update" : "Add New"}
        </button>
      </div>
    </form>
  );
}

export default Form;