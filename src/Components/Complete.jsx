import React from 'react'
import '../Styles/Task.css'
import TaskCard from './TaskCard'

function Complete() {
    return (
        <div id='complete'>
            <h3 className='todo-heading'>Complete</h3>
            <TaskCard />
        </div>
    )
}

export default Complete