import { useContext } from "react";
import { TaskContext } from "../../contexts/TasksContext";

const Priorities = () => {
    
    const {priorities, updatePriorities} = useContext(TaskContext)

    return (
        <div>
            I am important {priorities}
        </div>
    );
};

export default Priorities;