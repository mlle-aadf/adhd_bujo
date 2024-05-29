import { CheckMark, CompletedContainer, CompletedTitleCont, CompletedDeleteBTN } from "./Styles";

import { Collapse } from "react-collapse";
import { useContext, useEffect, useState } from "react";
import { TaskContext } from "../../contexts/TasksContext";

const Completed = ({completed}) => {
    
    // toggle COMPLETED list visibility
    const [isOpened, setIsOpened] = useState(false)

    const {updateTask} = useContext(TaskContext)
    
    const emptyCompletedHandler = () => {
        // console.log("complete empttyyy")
        updateTask("deleteCompleted")

    }

    return (
        <CompletedContainer>
            <CompletedTitleCont>
                <CheckMark onClick={()=> setIsOpened(!isOpened)} style={{color:`${isOpened? "var(--mint)" : "white"}`}}/>
                <h2 onClick={()=> setIsOpened(!isOpened)} style={{width:"80%"}}>COMPLETED</h2>
                <CompletedDeleteBTN style={{display:`${isOpened === true ? "block" : "none"}`}} onClick={(emptyCompletedHandler)}/>
            </CompletedTitleCont>
        
            <Collapse isOpened={isOpened}>
                {completed.length===0 ? <p style={{paddingLeft:"0.5rem"}}>YOUR BIN IS EMPTY</p> :
                completed.map((task) => <li key={task._id}>{task.description}</li>)}
            </Collapse>
        </CompletedContainer>
    );
};

export default Completed;