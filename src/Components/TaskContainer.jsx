import React from 'react'
import Complete from './Complete'
import Inprogress from './Inprogress'
import Todo from './Todo'

function TaskContainer() {
    return (
        <>
            <Todo />
            <Inprogress />
            <Complete />
        </>
    )
}

export default TaskContainer