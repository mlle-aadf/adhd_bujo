import {NewTaskContainer, PriorityInputs, Desc, Importance, ImportanceIcon, Urgency, UrgencyIcon, Add, AddIcon  } from "./Styles"

import { useState, useEffect } from "react";
const { v4: uuidv4 } = require('uuid');

const NewTask = ({addNewTask, getTasks}) => {
    
    const [newTask, setNewTask] = useState({
        _id: uuidv4(),
        description: "",
        importance: 0,
        urgency: 0,
        priority: 0,
        completed: false,
        deleted: false
    })

    const [descPlaceholder, setDescPlaceholder] = useState("...")

  
    
    
    // disable Add ("+") button if new task field is empty or importance === 0 || urgency === 0 
    const [allCompleted, setAllCompleted] = useState(false)
    
    useEffect(()=> {
            const hasDescription = newTask.description.length > 0
            const hasImportance = newTask.importance !== 0
            const hasUrgency = newTask.urgency !== 0
            const complete = hasDescription && (hasImportance && hasUrgency)
            setAllCompleted(complete)
            // console.log("completed? : ", complete, allCompleted)
    }, [newTask])
    
    // set task description
    const handleDesc =(e) => {
        setNewTask({...newTask, description: e.target.value})
    }
    
    // set task importance
    const handleImportance = (e) => {
        newTask.importance !== 3 ? setNewTask({...newTask, importance: newTask.importance+1}) : setNewTask({...newTask, importance: 0})    
    }
    
    // set task urgency
    const handleUrgency = (e) => {
        newTask.urgency !== 3 ? setNewTask({...newTask, urgency: newTask.urgency+1}) : setNewTask({...newTask, urgency: 0})
    }
    
    // set task priority
    useEffect(()=>{
        const setPriority = async () => {
            const newPriority = newTask.importance+newTask.urgency
            await setNewTask({...newTask, priority: newPriority})
        }
        setPriority()
    }, [newTask.importance, newTask.urgency])


    const resetInputs = () => {
        setNewTask({...newTask, 
        _id: uuidv4(),
        description: "",
        importance: 0,
        urgency: 0,
        priority: 0,
        completed: false,
        deleted: false})
        setDescPlaceholder("...")
    }
    
    const saveNewTask = async (e) => {
        e.preventDefault()
        document.getElementById("taskInput").value=""
        setDescPlaceholder("saving...")
        setNewTask({...newTask,  priority: newTask.importance+newTask.urgency})
        await addNewTask(newTask)
        
        resetInputs()
    }

        return (
            <NewTaskContainer>
                    <PriorityInputs id="newTaskForm">
                        <Desc id="taskInput" type="text" name="Desc" onChange={handleDesc} placeholder={descPlaceholder}/>
                        <Importance name="importance" onClick={handleImportance} style={{ backgroundColor: `var(--priority${newTask.importance})` }}><ImportanceIcon/></Importance>
                    
                        <Urgency name="urgency" onClick={handleUrgency} style={{ backgroundColor: `var(--priority${newTask.urgency})` }}><UrgencyIcon/></Urgency>
                    </PriorityInputs>
                    <Add type="submit" onClick={saveNewTask} disabled={!allCompleted} style={allCompleted? EnabledStyle : DisabledStyle}><AddIcon/></Add>
            </NewTaskContainer>
        );
}

export default NewTask;


const DisabledStyle = {
    backgroundColor: "transparent",
    cursor: "not-allowed"
}

const EnabledStyle = {
    backgroundColor: "var(--faded)",
    color:"var(--mint)",
    cursor: "pointer"
}