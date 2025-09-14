import React from "react";
import ToDoList from "./ToDoList";



function TaskCounter({tasks}){
    return(
        <div>
            <p className="taskCounter">Total Taks: {tasks.length}</p>
        </div>
    );
}

export default TaskCounter;