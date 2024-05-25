import { CheckMark, CompletedContainer, CompletedTitle } from "./Styles";
// import { FaCheck } from "react-icons/fa";

import { useState } from "react";
import { Collapse } from "react-collapse";
// import {useCollapse} from 'react-collapsed';

const Completed = ({completed}) => {
    const testArr =["afdgafg", "sjkldhjkasfh", "adfgafgfbdfgdsh", "hgljkhgasbdvfk"]
    // const [isExpanded, setExpanded] = useState(false);
    // const { getCollapseProps, getToggleProps} = useCollapse({isExpanded})

    // const clickHandler = () => {
    //     setExpanded((prevExpanded) => !prevExpanded)
    // }
    const [isOpened, setIsOpened] = useState(false)
    const clickHandler = () => {
        setIsOpened(!isOpened)
    }

    return (
        <CompletedContainer>
            <CompletedTitle style={{display:"flex", alignItems:"center"}}><CheckMark onClick={clickHandler} style={{color:`${isOpened? "var(--mint)" : "white"}`}}/> COMPLETED</CompletedTitle>
            <Collapse isOpened={isOpened}>{completed.map((task) => <li key={task._id}>{task.description}</li>)}</Collapse>
        </CompletedContainer>
        // <CompletedContainer>
        //     <CompletedTitle style={{display:"flex", alignItems:"center"}}><CheckMark {...getToggleProps({onClick:clickHandler})} style={{color:`${isExpanded? "var(--mint)" : "white"}`}}/> COMPLETED</CompletedTitle>
        //     <div {...getCollapseProps()}>{completed.map((task) => <li key={task._id}>{task.description}</li>)}</div>
        // </CompletedContainer>
    );
};

export default Completed;