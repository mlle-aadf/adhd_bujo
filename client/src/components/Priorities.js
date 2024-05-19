// import { useContext } from "react";
// import { TaskContext } from "../../contexts/TasksContext";
import { FaRegStar } from "react-icons/fa";
import { useState } from "react";
import {useCollapse} from 'react-collapsed';

import { PrioritiesContainer } from "./Styles";


const Priorities = () => {
    
    const [isExpanded, setExpanded] = useState(true);
    const { getCollapseProps, getToggleProps} = useCollapse({isExpanded})

    const clickHandler = () => {
        setExpanded((prevExpanded) => !prevExpanded)
    }
    // const {priorities, updatePriorities} = useContext(TaskContext)

    return (
        <div>
            
            <h3><FaRegStar {...getToggleProps({onClick:clickHandler})} style={{marginRight:"1rem", color:`${isExpanded? "var(--priority1)" : "white"}`, height:"1.75rem"}}/>PRIORITIES</h3>
            <PrioritiesContainer {...getCollapseProps()}>
                <p>i am important</p>
                <p>i am also important</p>
                <p>and so am i</p>
            </PrioritiesContainer>
        </div>
    );
};

export default Priorities;