// To-Do page index
import NavBarMobile from "../../components/NavBarMobile"
import {TodoTitle, TodoContainer} from "./Styles"
import NewTask from "./NewTask";
import TaskList from "./TaskList";

import Completed from "./Completed";
import Deleted from "./Deleted";

import { useContext } from "react";
import { TaskContext } from "../../contexts/TasksContext";

const Todo = () => {

    const {tasks, completed, deleted, addNewTask} = useContext(TaskContext)

    return (
        <>
            <NavBarMobile/>
            <TodoContainer>
                <TodoTitle>TO DO</TodoTitle>
                <NewTask addNewTask={addNewTask}/>
                <TaskList tasks={tasks}/>
            </TodoContainer>
            <Completed completed={completed}/>
            <Deleted deleted={deleted}/>
        </>
    );
};



export default Todo;