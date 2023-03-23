import { faCalendar, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { TaskPageContext } from '../context/TaskPageContext'
import './Styles/AddTaskForm.css'

function AddTaskForm() {

  const { setTrigger } = useContext(TaskPageContext)

  const handleChange = () => {
    setTrigger(false)
  }
  return (
    <div className='task-form'>
      <div className='task-form-header'>
        <h2 className='task-form-title'>Add Task</h2>
        <FontAwesomeIcon icon={faPlus} className='close-icon' />
      </div>
      <form>
        <div className="task-form-group">
          <label htmlFor="title">Title</label>
          <input type="text" placeholder="Add Title" />
        </div>
        <div className="task-form-group">
          <label htmlFor="description">Description</label>
          <input type="text" placeholder="Add Description" />
        </div>

        <div className="task-form-group-date">
          <div className="start-date">
            <label htmlFor="date">  Start Date</label>
            <br />
            <input type="date" />
          </div>

          <div className="end-date">
            <label htmlFor="date">   End Date </label>
            <br />
            <input type="date" />
          </div>
        </div>
        <div className="task-form-group">
          <label htmlFor="status">Status</label>
          <select name="status" id="status">
            <option selected hidden value="status">Status</option>
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