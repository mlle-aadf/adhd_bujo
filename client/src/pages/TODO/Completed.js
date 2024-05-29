import styled from "styled-components";
import { FiDelete } from "react-icons/fi";

import { CheckMark, CompletedContainer, CompletedTitleCont } from "./Styles";
import { useState } from "react";
import { Collapse } from "react-collapse";

const Completed = ({completed}) => {
    
    // toggle COMPLETED list visibility
    const [isOpened, setIsOpened] = useState(false)

    const emptyCompletedHandler = () => {
        console.log("complete empttyyy")
    }

    return (
        <CompletedContainer>
            <CompletedTitleCont>
                <CheckMark onClick={()=> setIsOpened(!isOpened)} style={{color:`${isOpened? "var(--mint)" : "white"}`}}/>
                 <h2 onClick={()=> setIsOpened(!isOpened)} style={{width:"80%"}}>COMPLETED</h2>
                <CompletedDeleteBTN style={{display:`${isOpened === true ? "block" : "none"}`}} onClick={emptyCompletedHandler}/>
            </CompletedTitleCont>
           
            <Collapse isOpened={isOpened}>
                {completed.length===0 ? <p style={{paddingLeft:"0.5rem"}}>YOUR BIN IS EMPTY</p> :
                completed.map((task) => <li key={task._id}>{task.description}</li>)}
            </Collapse>
                       
        </CompletedContainer>
    );
};

export default Completed;

const CompletedDeleteBTN = styled(FiDelete)`
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  
  &:active{
        color: var(--priority3);
    }
`;