import React, { createContext, useState } from 'react'
import TaskPage from '../Pages/TaskPage';

export const TaskPageContext = createContext();

export function TaskPageContextProvider() {
    const [trigger, setTrigger] = useState(false)
    const values = {
        trigger,
        setTrigger

    }

    return (
        <TaskPageContext.Provider value={values}>
            <TaskPage />
        </TaskPageContext.Provider>
    )
}


