// To-Do page index
import { useContext } from "react";
import NewTask from "./components/NewTask";
import TaskList from "./components/TaskList";
import { TaskContext } from "../../contexts/TasksContext";

const Todo = () => {
    
    const {tasks, setTasks} = useContext(TaskContext)

    // console.log(tasks)

    return (
        <div>
            <NewTask tasks={tasks} setTasks={setTasks}/>
            <TaskList tasks={tasks}/>
        </div>
    );
};


export default Todo;