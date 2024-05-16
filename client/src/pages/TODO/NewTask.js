import {NewTaskContainer, PriorityInputs, Desc, Importance, Urgency, Add} from "./Styles"

import { useState, useEffect } from "react";
const { v4: uuidv4 } = require('uuid');

const NewTask = ({addNewTask}) => {
    
    // const [currentImportance, setCurrentImportance] = useState(0);
    const [newTask, setNewTask] = useState({
        _id: uuidv4(),
        description: "",
        importance: 0,
        urgency: 0,
        priority: 0,
        completed: false,
        deleted: false
    })
    
    
    // disable button if new task field is empty or importance === 0 || urgency === 0 
    const [allCompleted, setAllCompleted] = useState(true)
    useEffect(()=> {
        const checkCompletion = (e) => {
            
            // console.log(newTask)

            const hasDescription = newTask.description.length > 0
            const hasImportance = newTask.importance !== 0
            const hasUrgency = newTask.urgency !== 0

            
    // ** complete is working, setAllCompleted isn't???
            const complete = hasDescription && (hasImportance && hasUrgency)
            // complete === true ?   setAllCompleted(true) : setAllCompleted(false)
            setAllCompleted(complete)
            console.log("completed? : ", complete, allCompleted)
        }

        checkCompletion()
    }, [newTask])
    
    // set task description
    const handleDesc =(e) => {
        setNewTask({...newTask, description: e.target.value})
    }
    
    // set task importance
    const handleImportance = (e) => {
        newTask.importance !== 3 ? setNewTask({...newTask, importance: newTask.importance+1}) : setNewTask({...newTask, importance: 0})    
        // setPriority()
    }
    
    // set task urgency
    const handleUrgency = (e) => {
        newTask.urgency !== 3 ? setNewTask({...newTask, urgency: newTask.urgency+1}) : setNewTask({...newTask, urgency: 0})
        // setPriority()
    }
    
    // set task priority
    useEffect(()=>{
        const setPriority = async () => {
            const newPriority = newTask.importance+newTask.urgency
            await setNewTask({...newTask, priority: newPriority})

            console.log("newPriority: ", newPriority, "new: ", newTask)
        }
        setPriority()
    }, [newTask.importance, newTask.urgency])

    // const setPriority = () => {
    //     const newPriority = newTask.importance+newTask.urgency
    //     setNewTask({...newTask, priority: newPriority})
    //     // console.log("newPriority: ", newPriority, "new: ", newTask)
    // }
    
    const saveNewTask =() => {
        // setPriority()
        setNewTask({...newTask, priority: newTask.importance+newTask.urgency})
        addNewTask(newTask)
        console.log("newTask: 2", newTask)
    }


        return (
            <NewTaskContainer>
                    <PriorityInputs id="newTaskForm">
                        <Desc type="text" name="Desc"   onChange={handleDesc} required/>
                        <Importance name="importance" onClick={handleImportance} style={{ backgroundColor: `var(--priority${newTask.importance})` }}/>
                    
                        <Urgency name="urgency" onClick={handleUrgency} style={{ backgroundColor: `var(--priority${newTask.urgency})` }}/>
                    </PriorityInputs>
                    <Add type="submit" onClick={saveNewTask} disabled={!allCompleted}>+</Add>
                
            
            </NewTaskContainer>
        );
//     };
}

export default NewTask;


