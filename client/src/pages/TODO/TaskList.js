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

// const TasksContainer = styled.ul`
//     list-style-type: none;
//     color: white;
//     margin: 0;
//     padding: 0;
//     font-size: 1.5rem;
//     `

// const Task = styled.div`
//     display: flex;
//     flex-wrap: wrap;
//     align-items: center;
//     height: fit-content;
//     margin: -1rem 0;
//     `

// const Tick = styled.li`
//     align-items: start;
//     align-self: center;
//     height: 4vw;
//     width: 4vw;
//     margin-right: 1rem;
//     border-radius: 5px;
//     cursor: pointer;
// `