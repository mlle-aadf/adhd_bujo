import styled from "styled-components";
import checkIcon from "../../icons/complete.png";
import deleteIcon from "../../icons/delete.png";

import { useContext } from "react";
import { TaskContext } from "../../contexts/TasksContext";

const CheckBoxMenu = ({updateTask, taskId}) => {
    
    const completeHandler = () => {        
        updateTask("complete", taskId )
    }
    
    const deleteHandler = () => {        
        updateTask("delete", taskId)
    }
    
    return (
        <CheckMenuContainer>
            <CompleteBTN onClick={completeHandler} value={"complete"}><img src={checkIcon} alt=""/></CompleteBTN>
            <DeleteBTN onClick={deleteHandler}><img src={deleteIcon} alt=""/></DeleteBTN>
        </CheckMenuContainer>
    );
};

export default CheckBoxMenu;

const CheckMenuContainer = styled.div`
    background-color: var(--faded);
    border-radius: 20px;
`

const CompleteBTN = styled.button`
    background-color:transparent;
    border: none;
    `

const DeleteBTN = styled.button`
    background-color:transparent;
    border: none;

`