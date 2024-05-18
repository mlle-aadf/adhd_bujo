// import styled from "styled-components";
import { useContext } from "react";
import { TaskContext } from "../../contexts/TasksContext";

import { TasksContainer, Task, Tick} from "./Styles";

import CheckBoxMenu from "./CheckBoxMenu";

const TaskList = () => {

    const {tasks, updateTask} = useContext(TaskContext)

    const tickHandler = () => {
        console.log("you clicked me")
    // expand checkBox menu
    }

    return (
        
        <TasksContainer>
            { (!tasks || tasks === undefined || tasks.length === 0) ?
            <p>loading...</p> :
                tasks.map(
                    (task) => 
                        <Task key={task._id}>
                            <Tick onClick={tickHandler} style={{background: `linear-gradient(90deg, var(--priority${task.importance}) 0%, var(--priority${task.urgency}`} }/>
                            <CheckBoxMenu updateTask={updateTask} taskId={task._id}/>
                            <p style={{maxWidth:"85%"}}>{task.description}</p>
                        </Task>
                    
                )
            }
        </TasksContainer>
    );
};


export default TaskList;