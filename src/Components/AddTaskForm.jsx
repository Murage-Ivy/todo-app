import React, { useContext } from 'react'
import { TaskPageContext } from '../context/TaskPageContext'

function AddTaskForm() {

  const { setTrigger } = useContext(TaskPageContext)

  const handleChange = () => {
    setTrigger(false)
  }
  return (
    <div>
      <h2 className='task-form-title'>Add Task</h2>
      <form>
        <div className="task-form-group">
          <label htmlFor="title">Title</label>
          <input type="text" placeholder="Add Title" />
        </div>
        <div className="task-form-group">
          <label htmlFor="description">Description</label>
          <input type="text" placeholder="Add Description" />
        </div>

        <div className="task-form-group">

          <label htmlFor="date">  Start Date</label>
          <input type="date" placeholder="Add Date" />

          <label htmlFor="date">  Start Date</label>
          <input type="date" placeholder="Add Date" />
        </div>
        <div className="task-form-group">
          <label htmlFor="status">Status</label>
          <select name="status" id="status">
            <option value="todo">Todo</option>
            <option value="inprogress">Inprogress</option>
            <option value="complete">Complete</option>
          </select>
        </div>
        <div className="submit-action-btns">
          <button type="submit" onClick={handleChange}>Cancel</button>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  )
}

export default AddTaskForm