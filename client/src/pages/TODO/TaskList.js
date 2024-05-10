import styled from "styled-components";
import { useContext } from "react";
import { TaskContext } from "../../contexts/TasksContext";

const TaskList = () => {

    const {tasks} = useContext(TaskContext)

    return (
        
        <TasksContainer>
            { (!tasks || tasks === undefined || tasks.length === 0) ?
            <p>loading...</p> :
                tasks.map(
                    (task) => 
                        <Task key={task._id}>
                            <Tick style={{background: `linear-gradient(90deg, var(--priority${task.importance}) 0%, var(--priority${task.urgency}` }}></Tick>
                            <p>{task.description}</p>
                        </Task>
                    
                )
            }
        </TasksContainer>
    );
};


export default TaskList;

const TasksContainer = styled.div`
    color: white;
    height: 50vh;
    width: 50vw;
    margin: 0 auto;
    /* border: 1px solid fuchsia; */
    font-size: 1rem;
    `

const Task = styled.div`
    display: flex;
    align-items: center;
    height: 1.5rem;
    /* border: 2px solid aqua; */
`

const Tick = styled.div`
    height: 1rem;
    width: 1rem;
    margin-right: 0.5rem;
    border-radius: 5px;
`