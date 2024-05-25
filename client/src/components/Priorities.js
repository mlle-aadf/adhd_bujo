import { useContext, useState } from "react";
import { TaskContext } from "../contexts/TasksContext";
// import { FaRegStar } from "react-icons/fa";

import {Collapse} from 'react-collapse';
// import {useCollapse} from 'react-collapsed';

import { PrioriTitleCont, StarIcon, PriorityTitle, PrioritiesContainer } from "./Styles";


const Priorities = () => {
    
    const [isOpened, setIsOpened] = useState(false)
    const clickHandler = () => {
        setIsOpened(!isOpened)
    }
    
    // const [isExpanded, setExpanded] = useState(false);
    // const { getCollapseProps, getToggleProps} = useCollapse({isExpanded})

    // const clickHandler = () => {
    //     setExpanded((prevExpanded) => !prevExpanded)
    // }

    
    const {priorities} = useContext(TaskContext)

    return (
        <>
            <PrioriTitleCont>
                <StarIcon onClick={clickHandler} style={{color:`${isOpened? "var(--priority1)" : "white"}`}}/>
                {/* <StarIcon {...getToggleProps({onClick:clickHandler})} style={{color:`${isExpanded? "var(--priority1)" : "white"}`}}/> */}
                <PriorityTitle>PRIORITIES</PriorityTitle>
            </PrioriTitleCont>

            <Collapse isOpened={isOpened}>
                {/* <PrioritiesContainer {...getCollapseProps()}> */}
                <PrioritiesContainer>
                    {priorities.length > 0 ?
                    <div>
                        <p>{`${priorities[0].description}`}</p>
                        <p>{`${priorities[1].description}`}</p>
                        <p>{`${priorities[2].description}`}</p>
                    </div>
                    : <p>...</p>}
                </PrioritiesContainer>
            </Collapse>
        </>
    );
};

export default Priorities;