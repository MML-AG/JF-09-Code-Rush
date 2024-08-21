import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Add a new task
  const handleAddTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, { text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  // Toggle the completion status of a task
  const handleToggleTask = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  // Delete completed tasks
  const handleDeleteCompleted = () => {
    const incompleteTasks = tasks.filter(task => !task.completed);
    setTasks(incompleteTasks);
  };

  // Handle input change
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md mt-5">
      <h1 className="text-2xl font-bold mb-4 text-black">Todo List</h1>

      <div className="mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Add a new task"
          className="border border-gray-300 rounded p-2 w-full mb-2 text-black"
        />
        <button
          onClick={handleAddTask}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      <ul className="list-disc pl-5 mb-4">
        {tasks.map((task, index) => (
          <li
            key={index}
            onClick={() => handleToggleTask(index)}
            className={`cursor-pointer p-2 ${task.completed ? 'line-through text-gray-500' : 'text-black'}`}
          >
            {task.text}
          </li>
        ))}
      </ul>

      <button
        onClick={handleDeleteCompleted}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Delete Completed
      </button>
    </div>
  );
};

export default TodoList;
