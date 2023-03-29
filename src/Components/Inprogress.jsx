import React from 'react'
import '../Styles/Task.css'
import TaskCard from './TaskCard'

function Inprogress() {
  return (
    <div id='inprogress'>
      <h3 className='todo-heading'>Inprogress</h3>
      <TaskCard />
    </div>
  )
}

export default Inprogress