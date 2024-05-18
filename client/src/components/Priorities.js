// import { useContext } from "react";
// import { TaskContext } from "../../contexts/TasksContext";
import { PrioritiesContainer } from "./Styles";

const Priorities = () => {
    
    // const {priorities, updatePriorities} = useContext(TaskContext)

    return (
        <div>
            <h3>PRIORITIES</h3>
            <PrioritiesContainer>
                <p>i am important</p>
                <p>i am also important</p>
                <p>and so am i</p>
            </PrioritiesContainer>
        </div>
    );
};

export default Priorities;