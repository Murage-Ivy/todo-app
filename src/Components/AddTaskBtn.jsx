import React, { useContext } from 'react'
import { TaskPageContext } from '../context/TaskPageContext'
import '../Styles/AddTaskBtn.css'

function AddTaskBtn() {
    const { setTrigger } = useContext(TaskPageContext)

    const handleChange = () => {
        setTrigger(true)
    }

    return (
        <div onClick={handleChange}>
            <button className='add-task-btn'>Add Task</button>
        </div>
    )
}

export default AddTaskBtn