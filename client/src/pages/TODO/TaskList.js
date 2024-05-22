// import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { TaskContext } from "../../contexts/TasksContext";

import { TasksContainer, Task, Tick} from "./Styles";

import CheckBoxMenu from "./CheckBoxMenu";

const TaskList = () => {


    const {tasks, updateTask} = useContext(TaskContext)
    const [taskCheckBoxes, setTaskCheckBoxes] = useState([])


    // expand checkBox menu
    useEffect(()=> {
        if (tasks.length) {
            const checkBoxesInitialState = tasks.map(()=>{
                return false
            })
            setTaskCheckBoxes(checkBoxesInitialState)
        } 
    }, [tasks])

    const tickHandler = (index) => {
        
        const updated = taskCheckBoxes.map((taskCheckBox, i)=> index === i ? !taskCheckBox : taskCheckBox)
        setTaskCheckBoxes(updated)
    }

    return (
        
        <>
            <TasksContainer>
                { (!tasks || tasks === undefined || tasks.length === 0 || taskCheckBoxes.length === 0) ?
                <p>loading...</p> :
                    tasks.map(
                        (task, i) =>
                            <Task key={task._id}>
                                <CheckBoxMenu active={taskCheckBoxes[i]} updateTask={updateTask} taskId={task._id} />
                                <Tick onClick={()=>tickHandler(i)}
            
                                style={{background: `linear-gradient(90deg, var(--priority${task.importance}) 0%, var(--priority${task.urgency}`} }/>
                                {/* <CheckBoxMenu updateTask={updateTask} taskId={task._id}/> */}
                                <p style={{maxWidth:"85%"}}>{task.description}</p>
                            </Task>
            
                    )
                }
            </TasksContainer>
        </>
    );
};


export default TaskList;