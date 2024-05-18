import { CompletedContainer, CompletedTitle } from "./Styles";

import { useContext } from "react";
import { TaskContext } from "../../contexts/TasksContext";

const Completed = () => {
    
    const {completed} = useContext(TaskContext)
    
    

    return (
        <CompletedContainer>
            <CompletedTitle>COMPLETED</CompletedTitle>
            {completed.map((task) => <li>{task.description}</li>)}
        </CompletedContainer>
    );
};

export default Completed;