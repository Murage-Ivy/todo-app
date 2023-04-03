import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import '../Styles/TaskCard.css'

function TaskCard({ task }) {
    const taskStatus = [
        {
            status: 'todo',
            button: 'Start'

        },
        {
            status: 'inprogress',
            button: 'Inprogress'
        },
        {
            status: 'complete',
            button: 'Complete'
        }
    ]

    console.log()
    return (
        <div className='task-card' draggable>
            <div className='task-card-title'>
                <h3>{task?.title}</h3>
            </div>
            <div className='task-card-header'>
                <div className='task-card-date'>
                    <p>{task?.start_date}</p>
                </div>
                <div className='task-card-status'>
                    <p>{task?.status}</p>
                </div>
            </div>


            <div className='task-card-body'>
                <p>{task?.description} </p>
                {/* // if status is todo, show 'Start'
                // if status is inprogress, show 'Complete'
                // if status is complete, show 'Delete' */}
                <div className='task-card-buttons'>

                    <FontAwesomeIcon icon={faEdit} className="edit-icon" />

                    <FontAwesomeIcon icon={faTrash} className="delete-icon" />

                </div>

            </div>
        </div>
    )
}

export default TaskCard