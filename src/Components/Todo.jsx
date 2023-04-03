import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTasks } from '../reducers/taskSlice'
import '../Styles/Task.css'
import TaskCard from './TaskCard'

function Todo() {

    const { tasks, status } = useSelector(state => state.userTasks)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTasks())
    }, [dispatch])

    console.log(tasks)

    const tasksList = tasks?.map(task => <TaskCard key={task.id} task={task} />)
    return (
        <div id='todo'>
            <h3 className='todo-heading'>Todo</h3>
            {tasksList}

        </div>
    )
}

export default Todo