// To-Do page index
import NavBarMobile from "../../components/NavBarMobile"
// import {TodoTitle, TodoContainer} from "./Styles"
// import NewTask from "./NewTask";
// import TaskList from "./TaskList";
import ToDo from "./ToDo";

import Completed from "./Completed";
import Deleted from "./Deleted";

import HomeLink from "../../components/HomeLink";


import { useContext } from "react";
import { TaskContext } from "../../contexts/TasksContext";

const TodoPage = () => {

    const {tasks, completed, deleted, addNewTask} = useContext(TaskContext)

    return (
        <>
            <NavBarMobile/>
            {/* <TodoContainer>
                <TodoTitle>TO DO</TodoTitle>
                <NewTask addNewTask={addNewTask}/>
                <TaskList tasks={tasks}/>

            </TodoContainer> */}
            <ToDo addNewTask={addNewTask} tasks={tasks}/>
            <Completed completed={completed}/>
            <Deleted deleted={deleted}/>
            <HomeLink style={{position: "fixed", bottom: "5%", right: "5%"}}/>
        </>
    );
};



export default TodoPage;