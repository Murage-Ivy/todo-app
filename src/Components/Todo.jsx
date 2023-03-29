import React from 'react'
import '../Styles/Task.css'
import TaskCard from './TaskCard'

function Todo() {
    return (
        <div id='todo'>
            <h3 className='todo-heading'>Todo</h3>
            <TaskCard />

        </div>
    )
}

export default Todo