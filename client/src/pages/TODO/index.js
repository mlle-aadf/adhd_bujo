// To-Do page index
import NavBarMobile from "../../components/NavBarMobile"
import ToDo from "./ToDo";
import Completed from "./Completed";
import Deleted from "./Deleted";
import HomeLink from "../../components/HomeLink";

import { useContext } from "react";
import { TaskContext } from "../../contexts/TasksContext";

const TodoPage = () => {

    const {tasks, getTasks, completed, deleted, addNewTask} = useContext(TaskContext)

    return (
        <>
            <NavBarMobile/>
            {/* <TodoContainer>
                <TodoTitle>TO DO</TodoTitle>
                <NewTask addNewTask={addNewTask}/>
                <TaskList tasks={tasks}/>
            </TodoContainer> */}
            <ToDo addNewTask={addNewTask} getTasks={getTasks} tasks={tasks} titleLink={false} cursor={false}/>
            <Completed completed={completed}/>
            <Deleted deleted={deleted}/>
            <HomeLink style={{position: "fixed", bottom: "5%", right: "5%"}}/>
        </>
    );
};



export default TodoPage;