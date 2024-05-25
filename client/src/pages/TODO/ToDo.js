import { useState } from 'react';
import { Collapse } from "react-collapse";

import { CheckBoxIcon, TodoTitle, TodoContainer, TitleContainer} from "./Styles"
import NewTask from "./NewTask";
import TaskList from "./TaskList";

const ToDo = ({addNewTask, tasks, titleLink, cursor}) => {
    
    const [isOpened, setIsOpened] = useState(false)
    const clickHandler = () => {
        setIsOpened(!isOpened)
    }

    return (
        <TodoContainer>
            <TitleContainer onClick={clickHandler}>
                    <CheckBoxIcon style={{color:`${isOpened? "var(--mint)" : "white"}`}} />
                    <TodoTitle to={titleLink===false? null : "/todo"} style={{cursor: `${cursor!==false ? "pointer" : "auto"}`}}>TO DO</TodoTitle>
            </TitleContainer>
            <Collapse isOpened={isOpened}>
                <NewTask addNewTask={addNewTask}/>
                <TaskList tasks={tasks}/>
            </Collapse>    
        </TodoContainer>
    );
};

export default ToDo;