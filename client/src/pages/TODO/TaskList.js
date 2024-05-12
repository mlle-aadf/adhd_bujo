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
    /* height: 50vh; */
    /* width: 50vw; */
    /* margin: 0 auto; */
    /* border: 1px solid fuchsia; */
    font-size: 1.5rem;
    `

const Task = styled.div`
    display: flex;
    align-items: center;
    height: 2.5vw;
    margin: 0.5rem 0;
    /* border: 2px solid aqua; */
`

const Tick = styled.div`
    height: 2vw;
    width: 2vw;
    margin-right: 0.5rem;
    border-radius: 5px;
    cursor: pointer;
`