import React from 'react';

function TaskItem(props){
 

    const task = props.task;

    return (
        <div className="row">
           <p>{task.name}</p>
        </div>
    )
}

export default TaskItem