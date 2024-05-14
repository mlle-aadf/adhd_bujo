// To-Do page index
import { useContext } from "react";

import NavBarMobile from "../../components/NavBarMobile";
import {TodoTitle, TodoContainer} from "./Styles"
import NewTask from "./NewTask";
import TaskList from "./TaskList";
import { TaskContext } from "../../contexts/TasksContext";

const Todo = () => {

    const {tasks, addNewTask} = useContext(TaskContext)

    return (
        <>
            <NavBarMobile/>
            <TodoContainer>
                <TodoTitle>TO DO</TodoTitle>
                <NewTask addNewTask={addNewTask}/>
                <TaskList tasks={tasks}/>
            </TodoContainer>
        </>
    );
};



export default Todo;