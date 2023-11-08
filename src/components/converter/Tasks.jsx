import { useRef } from "react";
import Task from "./Task";



const Tasks = (props) => {
    const tasks = props.tasks
    const tasksRef = useRef()

    const addToTasks = (task) => {


    }

    return (
        <div id="tasks" ref={tasksRef}>
            {tasks && tasks.length > 0 ? (
                tasks.map((task, index) => {
                    return <Task key={index} task={task}/>
                })
            ) : (
                <div className="no_tasks">No recent tasks</div>
            )}  
        </div>
    );
}

export default Tasks;