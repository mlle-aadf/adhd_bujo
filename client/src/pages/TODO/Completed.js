import { CompletedContainer, CompletedTitle } from "./Styles";
import { IoCheckboxOutline } from "react-icons/io5";

import { useState } from "react";
import {useCollapse} from 'react-collapsed';

const Completed = ({completed}) => {
    
    const [isExpanded, setExpanded] = useState(false);
    const { getCollapseProps, getToggleProps} = useCollapse({isExpanded})

    const clickHandler = () => {
        setExpanded((prevExpanded) => !prevExpanded)
    }

    return (
        <CompletedContainer>
            <CompletedTitle style={{display:"flex", alignItems:"center"}}><IoCheckboxOutline {...getToggleProps({onClick:clickHandler})} style={{marginRight:"1rem", color:`${isExpanded? "var(--mint)" : "white"}`}}/> COMPLETED</CompletedTitle>
            <div {...getCollapseProps()}>{completed.map((task) => <li key={task._id}>{task.description}</li>)}</div>
        </CompletedContainer>
    );
};

export default Completed;