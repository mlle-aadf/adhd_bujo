import { useContext, useState } from "react";
import NavBar from "../../pages/HOME/NavBarMobile";
import Priorities from "../../pages/HOME/Priorities";
import Schedule from "./Schedule";
import ToDo from "../TODO/ToDo";

import {NoteTitleCont, NoteIcon, NoteTitle} from "../../pages/NOTES/Styles"
import NewNote from "../../pages/NOTES/NewNote.js"
import { Collapse } from "react-collapse";
import { Link } from "react-router-dom";


import HomeLink from "../HOME/HomeBTN";
import { TaskContext } from "../../contexts/TasksContext";


const Day = () => {
    
    const {addNewTask} = useContext(TaskContext)
    const [isOpened, setIsOpened] = useState(false)

    return (
        <div>
            <NavBar/>
            <Priorities intialExpanded={true}/>
            <Schedule/>
            <ToDo addNewTask={addNewTask}/>
            
            <NoteTitleCont>
                    <NoteIcon style={{color:`${isOpened===true? "var(--blue)" : "white"}`}} onClick={()=> setIsOpened(!isOpened)}/>
                    <NoteTitle><Link to={"/notes"} style={{textDecoration:"none", color:"white"}}>NOTES</Link></NoteTitle>
            </NoteTitleCont>
            <Collapse isOpened={isOpened}>
                <NewNote/>
            </Collapse>

            <HomeLink/>
        </div>
    );
};



export default Day;