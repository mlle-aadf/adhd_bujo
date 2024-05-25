import { CheckMark, CompletedContainer, CompletedTitle } from "./Styles";
import { useState } from "react";
import { Collapse } from "react-collapse";

const Completed = ({completed}) => {
    
    // toggle COMPLETED list visibility
    const [isOpened, setIsOpened] = useState(false)
    const clickHandler = () => {
        setIsOpened(!isOpened)
    }

    return (
        <CompletedContainer>
            <CompletedTitle onClick={clickHandler} style={{display:"flex", alignItems:"center"}}><CheckMark  style={{color:`${isOpened? "var(--mint)" : "white"}`}}/> COMPLETED</CompletedTitle>
            <Collapse isOpened={isOpened}>{completed.map((task) => <li key={task._id}>{task.description}</li>)}</Collapse>
        </CompletedContainer>
    );
};

export default Completed;