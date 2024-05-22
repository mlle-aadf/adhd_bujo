import { useState } from 'react';
import {useCollapse} from 'react-collapsed';

import { CheckBoxIcon, TodoTitle, TodoContainer, TitleContainer} from "./Styles"
import NewTask from "./NewTask";
import TaskList from "./TaskList";

const ToDo = ({addNewTask, tasks, titleLink, cursor}) => {
    
    const [isExpanded, setExpanded] = useState(false);
    const { getCollapseProps, getToggleProps} = useCollapse({isExpanded})

    const clickHandler = () => {
        setExpanded((prevExpanded) => !prevExpanded)
    }
    
    return (
        <TodoContainer>
            <TitleContainer>
                    <CheckBoxIcon style={{color:`${isExpanded? "var(--mint)" : "white"}`}} {...getToggleProps({onClick:clickHandler})}/>
                    <TodoTitle to={titleLink===false? null : "/todo"} style={{cursor: `${cursor!==false ? "pointer" : "auto"}`}}>TO DO</TodoTitle>
            </TitleContainer>
            <div {...getCollapseProps()}>
                <NewTask addNewTask={addNewTask}/>
                <TaskList tasks={tasks}/>
            </div>
        </TodoContainer>
    );
};

export default ToDo;