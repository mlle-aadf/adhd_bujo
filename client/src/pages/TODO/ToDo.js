import { useState } from 'react';
import {useCollapse} from 'react-collapsed';
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

import {TodoTitle, TodoContainer} from "./Styles"
import NewTask from "./NewTask";
import TaskList from "./TaskList";

const ToDo = ({addNewTask, tasks}) => {
    
    const [isExpanded, setExpanded] = useState(false);
    const { getCollapseProps, getToggleProps} = useCollapse({isExpanded})

    const clickHandler = () => {
        setExpanded((prevExpanded) => !prevExpanded)
    }
    
    return (
        <TodoContainer>
            {/* <TodoTitle  style={{display:"flex", alignItems:"center"}}> */}
                <h3 style={{height:"1.5rem"}}>
                    <MdOutlineCheckBoxOutlineBlank style={{marginRight:"1rem", color:`${isExpanded? "var(--mint)" : "white"}`}} {...getToggleProps({onClick:clickHandler})}></MdOutlineCheckBoxOutlineBlank>
                <TodoTitle to={"/todo"} style={{height:"2rem"} }>TO DO</TodoTitle>
                </h3>
            {/* </TodoTitle> */}
            <div {...getCollapseProps()}>
                <NewTask addNewTask={addNewTask}/>
                <TaskList tasks={tasks}/>
            </div>
        </TodoContainer>
    );
};

export default ToDo;