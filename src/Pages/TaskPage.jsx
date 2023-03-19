import React from 'react'
import Search from '../Components/Search'
import '../Components/Styles/TaskPage.css'
import TaskContainer from '../Components/TaskContainer'

function TaskPage() {
  return (
    <div id='taskpage'>
      <Search />

      <div id='taskpage__container'>
        <TaskContainer />
      </div>

    </div>
  )
}

export default TaskPage