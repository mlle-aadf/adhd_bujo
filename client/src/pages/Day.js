import { useContext } from "react";
import NavBar from "../components/NavBarMobile";
import Priorities from "../components/Priorities";
import ToDo from "./TODO/ToDo";
import HomeLink from "../components/HomeLink";
import { TaskContext } from "../contexts/TasksContext";

const Day = () => {
    
    const {addNewTask} = useContext(TaskContext)
    
    return (
        <div>
            <NavBar/>
            <Priorities/>
            <ToDo addNewTask={addNewTask}/>
            <HomeLink/>
        </div>
    );
};



export default Day;