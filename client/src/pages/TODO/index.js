// To-Do page index
import NavBarMobile from "../../pages/HOME/NavBarMobile"
import Priorities from"../../pages/HOME/Priorities"
import ToDo from "./ToDo";
import Completed from "./Completed";
import Deleted from "./Deleted";
import HomeBTN from "../HOME/HomeBTN";

import { useContext } from "react";
import { TaskContext } from "../../contexts/TasksContext";

const TodoPage = () => {

    const {tasks, getTasks, completed, deleted, addNewTask} = useContext(TaskContext)

    return (
        <>
            <NavBarMobile/>
            <Priorities intialExpanded={false}/>
            <ToDo addNewTask={addNewTask} getTasks={getTasks} tasks={tasks} titleLink={false} cursor={false}/>
            <Completed completed={completed}/>
            <Deleted deleted={deleted}/>
            <HomeBTN style={{position: "fixed", bottom: "5%", right: "5%"}}/>
        </>
    );
};



export default TodoPage;