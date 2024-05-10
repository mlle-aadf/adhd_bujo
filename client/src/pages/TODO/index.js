// To-Do page index
import { useContext } from "react";
import NewTask from "./NewTask";
import TaskList from "./TaskList";
import { TaskContext } from "../../contexts/TasksContext";

const Todo = () => {

    const {tasks, updateTasks} = useContext(TaskContext)

    return (
        <div>
            <h3>TO DO</h3>
            <NewTask updateTasks={updateTasks}/>
            <TaskList tasks={tasks}/>
        </div>
    );
};


export default Todo;