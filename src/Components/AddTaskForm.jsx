import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import { TaskPageContext } from '../context/TaskPageContext'
import '../Styles/AddTaskForm.css'

function AddTaskForm() {

  const [task, setTask] = useState({
    title: '',
    description: '',
    start_date: '',
    end_date: '',
    status: '',

  })


  const { setTrigger } = useContext(TaskPageContext)

  const handleChange = () => {
    setTrigger(false)
  }


  const handleTaskChange = (event) => {
    const { name, value } = event.target
    setTask({ ...task, [name]: value })
  }

  const handleTaskSubmit = (event) => {
    event.preventDefault();
    console.log(task)

    setTask({
      title: '',
      description: '',
      start_date: '',
      end_date: '',
      status: '',
    })
  }
  return (
    <div className='task-form'>
      <div className='task-form-header'>
        <h2 className='task-form-title'>Add Task</h2>
        <FontAwesomeIcon icon={faPlus} className='close-icon' onClick={handleChange} />
      </div>
      <form onSubmit={handleTaskSubmit}>
        <div className="task-form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            placeholder="Add Title"
            value={task.title}
            name="title"
            onChange={handleTaskChange} />
        </div>
        <div className="task-form-group">
          <label htmlFor="description">Description</label>
          <textarea
            cols={100}
            rows={4}
            type="text"
            placeholder="Add Description"
            value={task.description}
            name="description"
            onChange={handleTaskChange} />

        </div>

        <div className="task-form-group-date">
          <div className="start-date">
            <label htmlFor="date">  Start Date</label>
            <br />
            <input
              type="date"
              value={task.start_date}
              name='start_date'
              onChange={handleTaskChange} />

          </div>

          <div className="end-date">
            <label htmlFor="date">   End Date </label>
            <br />
            <input
              type="date"
              value={task.end_date}
              name="end_date"
              onChange={handleTaskChange} />

          </div>
        </div>
        <div className="task-form-group">
          <label htmlFor="status">Status</label>
          <select
            name="status"
            id="status"
            value={task.status}
            onChange={handleTaskChange}>
            <option hidden value="status">Status</option>
            <option value="todo">Todo</option>
            <option value="inprogress">Inprogress</option>
            <option value="complete">Complete</option>
          </select>
        </div>
        <div className="submit-action-btns">
          <button type="submit" onClick={handleChange} className="add-task-form-btn">Cancel</button>
          <button type="submit" className="add-task-form-btn">Save</button>
        </div>
      </form >
    </div >
  )
}

export default AddTaskForm