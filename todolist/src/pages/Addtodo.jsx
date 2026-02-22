import { useState } from "react";
import "./Addtodo.css";

function AddTodo() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    duedate: "",
    priority: "low",
  });

  const [tasks, setTasks] = useState([]);

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      alert("Title is required!");
      return;
    }

    const newTask = {
      id: Date.now(),
      ...formData,
    };

    setTasks((prev) => [...prev, newTask]);

    // Reset form
    setFormData({
      title: "",
      description: "",
      duedate: "",
      priority: "low",
    });
  };

  return (
    <div className="container">
      <div className="card form-card">
        <h2>Add Todo</h2>

        <form onSubmit={handleSubmit} className="formData">
          <label>
            Title
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </label>

          <label>
            Description
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </label>

          <label>
            Due Date
            <input
              type="date"
              name="duedate"
              value={formData.duedate}
              onChange={handleChange}
            />
          </label>

          <label>
            Priority
            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </label>

          <button type="submit">Add Task</button>
        </form>
      </div>

      <div className="card todo-card">
        <h2>Todo List</h2>

        {tasks.length === 0 ? (
          <p className="empty">No tasks added yet </p>
        ) : (
          <ul className="listofitems">
            {tasks.map((task) => (
              <TodoItem key={task.id} task={task} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

// Separate Component (Cleaner Structure)
function TodoItem({ task }) {
  return (
    <li className={`todo-item ${task.priority}`}>
      <div className="todo-header">
        <h3>{task.title}</h3>
        <span className="priority">{task.priority}</span>
      </div>

      <p>{task.description}</p>

      {task.duedate && (
        <small>Due: {task.duedate}</small>
      )}
    </li>
  );
}

export default AddTodo;