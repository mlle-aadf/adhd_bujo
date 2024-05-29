import { CheckMark, CompletedContainer, CompletedTitleCont } from "./Styles";
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
            <CompletedTitleCont onClick={clickHandler}>
                <CheckMark style={{color:`${isOpened? "var(--mint)" : "white"}`}}/>
                 <h2>COMPLETED</h2>
            </CompletedTitleCont>
           
            <Collapse isOpened={isOpened}>{completed.map((task) => <li key={task._id}>{task.description}</li>)}</Collapse>
                       
        </CompletedContainer>
    );
};

export default Completed;