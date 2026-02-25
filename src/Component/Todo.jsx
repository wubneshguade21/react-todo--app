import React, { useState } from "react";
import Form from "./Form";
import { TiEdit } from "react-icons/ti";
import { RiCloseCircleLine } from "react-icons/ri";

function Todo({ tasks, completeTask, deleteTask, updateTask }) {
  const [update, setUpdate] = useState({ id: null, value: "" });

  // Submit edited task
  const submitUpdate = (value) => {
    updateTask({ id: update.id, text: value });
    setUpdate({ id: null, value: "" });
  };

  // If editing a task, show Form instead of list
  if (update.id) {
    return <Form update={update} onSubmit={submitUpdate} />;
  }

  return tasks.map((task) => (
    <div
      className={task.isComplete ? "task-row complete" : "task-row"}
      key={task.id}
    >
      <div onClick={() => completeTask(task.id)}>{task.text}</div>

      <div className="icons">
        <TiEdit
          onClick={() => setUpdate({ id: task.id, value: task.text })}
          className="edit-icon"
        />
        <RiCloseCircleLine
          onClick={() => deleteTask(task.id)}
          className="delete-icon"
        />
      </div>
    </div>
  ));
}

export default Todo;