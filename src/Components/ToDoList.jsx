import React, { useState, useEffect } from 'react';

function ToDoList() {

  
  // State for tasks and new task input
  const [tasks, setTasks] = useState(["WakeUpp!!", "Breakfast", "Walk"]);
  const [newTask, setNewTask] = useState("");

//   Error Throw
   if (tasks.some(task => task.toLowerCase() === "error")) {
  throw new Error("Simulated crash 😵");
}


  // Handle input change
  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  // Add a new task
  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTask("");
      alert("Task successfully added!");
    }
  }

  // Delete a task by index
  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  // Move a task up by index
  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  // Move a task down by index
  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  // Reset all tasks
  function reset() {
    setTasks([]);
  }

  return (
    <div className="to-do-list">
      <h1 className="title animate__animated animate__bounceIn">To-Do-List</h1>
      <p className="taskCount">Task Count: {tasks.length}</p>

      {/* Input field with add task functionality */}
      <div>
        <input
          className="searchBar"
          type="text"
          placeholder="Enter a task ..."
          value={newTask}
          onChange={handleInputChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTask();
            }
          }}
        />

        {/* Add task button */}
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>

      {/* Ordered list of tasks */}
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>

            {/* Delete button with confirmation */}
            <button
              className="del-button"
              onClick={() => {
                if (window.confirm("Are you sure you want to delete this?")) {
                  deleteTask(index);
                }
              }}
            >
              Delete
            </button>

            {/* Move up button */}
            <button className="moveTask-Up" onClick={() => moveTaskUp(index)}>
              Up
            </button>

            {/* Move down button */}
            <button className="moveTask-Down" onClick={() => moveTaskDown(index)}>
              Down
            </button>
          </li>
        ))}
      </ol>

      {/* Reset button (only visible when tasks exist) */}
      {tasks.length > 0 && (
        <button className="reset-btn" onClick={reset}>
          Reset
        </button>
      )}
    </div>
  );
}

export default ToDoList;
