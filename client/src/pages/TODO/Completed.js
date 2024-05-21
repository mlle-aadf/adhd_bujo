import { CheckMark, CompletedContainer, CompletedTitle } from "./Styles";
// import { FaCheck } from "react-icons/fa";

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
            <CompletedTitle style={{display:"flex", alignItems:"center"}}><CheckMark {...getToggleProps({onClick:clickHandler})} style={{color:`${isExpanded? "var(--mint)" : "white"}`}}/> COMPLETED</CompletedTitle>
            <div {...getCollapseProps()}>{completed.map((task) => <li key={task._id}>{task.description}</li>)}</div>
        </CompletedContainer>
    );
};

export default Completed;