import React, { useState } from "react";
import Form from "./Form";
import Todo from "./Todo";

function List() {
  const [tasks, setTasks] = useState([]);

  // Add a new task
  const addTask = (task) => {
    if (!task.text || /^\s*$/.test(task.text)) return;

    const newTask = [
      { id: Date.now(), text: String(task.text), isComplete: false },
      ...tasks,
    ];
    setTasks(newTask);
  };

  // Mark a task as complete
  const completeTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isComplete: !task.isComplete } : task
    );
    setTasks(updatedTasks);
  };

  // Delete a task
  const deleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  // Update a task's text
  const updateTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id
        ? { ...task, text: String(updatedTask.text) }
        : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="App">   {/* use App not container */}

      <h1 className="mb-3">ADD your task to the todo list!</h1>

      <Form onSubmit={addTask} />

      {/* SCROLLABLE AREA */}
      <div className="content-scroll">
        <Todo
          tasks={tasks}
          completeTask={completeTask}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />
      </div>

    </div>
  );
}

export default List;