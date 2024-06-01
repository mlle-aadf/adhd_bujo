import { useContext } from "react";
import NavBar from "../../pages/HOME/NavBarMobile";
import Priorities from "../../pages/HOME/Priorities";
import Schedule from "./Schedule";
import ToDo from "../TODO/ToDo";
import HomeLink from "../HOME/HomeBTN";
import { TaskContext } from "../../contexts/TasksContext";

const Day = () => {
    
    const {addNewTask} = useContext(TaskContext)
    
    return (
        <div>
            <NavBar/>
            <Priorities intialExpanded={true}/>
            <Schedule/>
            <ToDo addNewTask={addNewTask}/>
            <HomeLink/>
        </div>
    );
};



export default Day;