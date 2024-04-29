import React, { useState } from 'react';
import './ToDoList.css';

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, {text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    }));
  };

  return (
    <div className="todo-list">
      <h2>ToDo List</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Ajouter une tâche"
      />
      <button onClick={addTask}>Ajouter</button>
      <ul>
        {tasks.map(task => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            <span>{task.text}</span>
            <div>
              <button onClick={() => deleteTask(task.id)}>Supprimer</button>
              <button onClick={() => toggleTaskCompletion(task.id)}>
                {task.completed ? 'Rétablir' : 'Terminer'}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
