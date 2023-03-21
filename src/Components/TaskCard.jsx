import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Styles/TaskCard.css'

function TaskCard() {
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
    return (
        <div className='task-card' draggable>
            <div className='task-card-title'>
                <h3>Task Title</h3>
            </div>
            <div className='task-card-header'>
                <div className='task-card-date'>
                    <p>10/12/2023</p>
                </div>
                <div className='task-card-status'>
                    <p>Start</p>
                </div>
            </div>


            <div className='task-card-body'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus vitae dolorum deserunt aliquam. </p>
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