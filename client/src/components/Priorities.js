import { useContext } from "react";
import { TaskContext } from "../contexts/TasksContext";
// import { FaRegStar } from "react-icons/fa";
import { useState } from "react";
import {useCollapse} from 'react-collapsed';

import { PrioriTitleCont, StarIcon, PriorityTitle, PrioritiesContainer } from "./Styles";


const Priorities = () => {
    
    const [isExpanded, setExpanded] = useState(true);
    const { getCollapseProps, getToggleProps} = useCollapse({isExpanded})

    const clickHandler = () => {
        setExpanded((prevExpanded) => !prevExpanded)
    }
    
    const {priorities} = useContext(TaskContext)

    return (
        <>
            <PrioriTitleCont>
                <StarIcon {...getToggleProps({onClick:clickHandler})} style={{color:`${isExpanded? "var(--priority1)" : "white"}`}}/>
                <PriorityTitle>PRIORITIES</PriorityTitle>
            </PrioriTitleCont>

            <PrioritiesContainer {...getCollapseProps()}>
                {priorities.length > 0 ?
                <div>
                    <p>{`${priorities[0].description}`}</p>
                    <p>{`${priorities[1].description}`}</p>
                    <p>{`${priorities[2].description}`}</p>
                </div>
                : <p>...</p>}
            </PrioritiesContainer>
        </>
    );
};

export default Priorities;