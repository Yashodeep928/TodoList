import { useState } from 'react'
import './Addtodo.css'

function AddTodo() {

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    duedate: "",
    priority: "low"
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
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
    </div>
  )
}

export default AddTodo
