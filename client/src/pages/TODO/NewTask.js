import {NewTaskContainer, PriorityInputs, Desc, Importance, Urgency, Add} from "./Styles"

import { useEffect, useState } from "react";
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
    // const [allCompleted, setAllCompleted] = useState()
    // useEffect(()=> {
    //     const checkCompletion = (e) => {
            
    //         console.log(updatedTask)

    //         const hasDescription = updatedTask.description.length > 0
    //         const hasImportance = updatedTask.importance !== 0
    //         const hasUrgency = updatedTask.urgency !== 0
            
    //         // console.log("1: ", hasDescription, "2: ", hasImportance, "3: ",hasUrgency )
            
            
    // // ** complete is working, setAllCompleted isn't???
    //         const complete = hasDescription && (hasImportance && hasUrgency)
    //         // complete === true ?   setAllCompleted(true) : setAllCompleted(false)
    //         setAllCompleted(complete)
    //         // console.log("completed? : ", complete, allCompleted)
    //     }
    // }, [updatedTask])
    
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
    const setPriority = () => {
        const priority = newTask.importance+newTask.urgency
        setNewTask({...newTask, priority: priority})
        console.log("pri: ", priority)
    }

    const saveNewTask =() => {
        setPriority()
        console.log(newTask)
    }
//     const saveNewTask = async () => {
        
//         // console.log("save: ", updatedTask)

//         // try{
//         //         const response = await fetch("/todo", {
//         //             method: "POST",
//         //             headers: {"Content-Type": "application/json"},
//         //             // body: JSON.stringify({updatedTask})
//         //         })
    
//         //         if (response.ok) {
//         //         console.log(await response.json())
//         //         addNewTask(newTask)
//         //         } else {
//         //             throw Error
//         //         }
//         //     } catch (error) {
//         //         console.log(error.message)
//         //     }

//         // addNewTask()


//         // try{
//         //     const response = await fetch("/todo", {
//         //         method: "POST",
//         //         headers: {"Content-Type": "application/json"},
//         //         // body: "helloooo"
//         //         body: JSON.stringify({newTask})
//         //     })

//         //     if (response.ok) {
//         //     console.log(await response.json())
//         //     updateTasks(newTask)
//         //     } else {
//         //         throw Error
//         //     }
//         // } catch (error) {
//         //     console.log(error.message)
//         // }


// //         // // reset inputs when save new task res.ok

//     }

    const handleSubmit = (e) => {
        e.preventDefault()
        // saveNewTask(updatedTask)
        console.log("submitted")
        // document.getElementById("newTaskForm").reset()

    }

        return (
            <NewTaskContainer>
                    <PriorityInputs  onSubmit={handleSubmit} id="newTaskForm" onChange={console.log(newTask)}>
                        <Desc type="text" name="Desc"   onChange={handleDesc} required/>
                        <Importance name="importance" onClick={handleImportance} style={{ backgroundColor: `var(--priority${newTask.importance})` }}/>
                    
                        <Urgency name="urgency" onClick={handleUrgency} style={{ backgroundColor: `var(--priority${newTask.urgency})` }}/>
                    </PriorityInputs>
                    <Add type="submit" disabled={false} onClick={saveNewTask}>+</Add>
                
                {/* <button onClick={saveNewTask} disabled={!allCompleted}>+</button> */}
            </NewTaskContainer>
        );
//     };
}

export default NewTask;


