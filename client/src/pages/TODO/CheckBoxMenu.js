import styled from "styled-components";
import checkIcon from "../../icons/complete.png";
import deleteIcon from "../../icons/delete.png";

const CheckBoxMenu = ({updateTask, taskId}) => {
    
    // mark task as completed
    const completeHandler = () => {        
        updateTask("complete", taskId )
    }
    
    // mark task as deleted
    const deleteHandler = () => {        
        updateTask("delete", taskId)
    }

    // priority stars
        // onClick updates priorities array, clicked task becomes first, other two are shifted down, 3rd gets dropped  
            // priorities.pop, priorities.unshift(new priority task)


    
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