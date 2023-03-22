import React, { useContext } from 'react'
import AddTaskBtn from '../Components/AddTaskBtn'
import AddTaskForm from '../Components/AddTaskForm'
import Search from '../Components/Search'
import '../Components/Styles/TaskPage.css'
import TaskContainer from '../Components/TaskContainer'
import { TaskPageContext } from '../context/TaskPageContext'

function TaskPage() {
  const { trigger } = useContext(TaskPageContext)

  console.log(trigger)
  return (
    <div id='taskpage'>
      <Search />

      <div className='taskpage__header'>
        <AddTaskBtn />
      </div>

      <div id='taskpage__container'>
        <TaskContainer />
      </div>

      {trigger ? <div className='taskpage__overlay'><AddTaskForm /></div> : null}

    </div>
  )
}

export default TaskPage