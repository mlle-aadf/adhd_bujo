import { CheckMenuContainer, CompleteBTN, DeleteBTN, StarBTN } from "./Styles";



const CheckBoxMenu = ({updateTask, taskId, active}) => {
    
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
        
        
        <CheckMenuContainer active={active} >
            <CompleteBTN onClick={completeHandler} value={"complete"}/>
            <DeleteBTN onClick={deleteHandler}/>
            
            {/* <StarBTN/> */}
        </CheckMenuContainer>
    );
};

export default CheckBoxMenu;
