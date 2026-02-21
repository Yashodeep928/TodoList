import { useState } from 'react'
import './Addtodo.css'

// const tasks = [
//   {
//     id: 1,
//     title: "Quant Practice",
//     description: "Maths, English, Reasoning",
//     priority: "Low"
//   },
//   {
//     id: 2,
//     title: "DSA Practice",
//     description: "Solve 3 array problems and 2 string problems",
//     priority: "High"
//   },
//   {
//     id: 3,
//     title: "React Revision",
//     description: "Revise useState, useEffect and build small project",
//     priority: "Medium"
//   },
//   {
//     id: 4,
//     title: "System Design Basics",
//     description: "Learn about load balancing and caching",
//     priority: "Medium"
//   },
//   {
//     id: 5,
//     title: "Mock Interview",
//     description: "Practice coding interview questions for 1 hour",
//     priority: "High"
//   },
//   {
//     id: 6,
//     title: "English Speaking Practice",
//     description: "30 minutes English conversation practice",
//     priority: "Low"
//   }
// ];

function AddTodo() {

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    duedate: "",
    priority: "low"
  })

  const [Tasks,setTasks] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
  e.preventDefault()

  const newTask = {
    id: Date.now(),
    ...formData
  }

  setTasks(prev => [...prev, newTask])
}

  return (
    <div className="container">
      <h4>Add todo</h4>

      <form onSubmit={handleSubmit} className="formData">

        <label htmlFor="title">
          Title
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="description">
          Description
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="duedate">
          Due Date
          <input
            type="date"
            id="duedate"
            name="duedate"
            value={formData.duedate}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="priority">
          Priority
          <select
            id="priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>

        <button type="submit">Submit</button>

      </form>

       <div className="listoftodos">

        <div className="listoftodosheader">
          <h2>List of Todos</h2>
        </div>

        <ul className='listofitems'>
        

      {Tasks.map(Task => (
      <li key={Task.id}>
      <h3>{Task.title}</h3>
      <p>{Task.description}</p>
      <span>Priority:{Task.priority}</span>
    </li>
  ))}
        </ul>



       </div>



    </div>
  )
}

export default AddTodo
