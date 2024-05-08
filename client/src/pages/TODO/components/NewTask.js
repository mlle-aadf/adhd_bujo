import { useState } from "react";
const { v4: uuidv4 } = require('uuid');

const NewTask = ({tasks,setTasks}) => {
    
    const [taskDescription , setTaskDescription] = useState()
    const [importance , setImportance] = useState(0)
    const [urgency , setUrgency] = useState(0)
    const [priority, setPriority] = useState(importance+urgency)

    const handleChange =(e) => {
        setTaskDescription(e.target.value)
    }

    const handleImportance = (e) => {
            console.log(`importance set to ${e.target.value}`)
            setImportance(e.target.value)
            setPriority(importance+urgency)
        }
        
        const handleUrgency = (e) => {
            console.log(`urgency set to ${e.target.value}`)
            setUrgency(e.target.value)
            setPriority(importance+urgency)
    }

    const saveNewTask = async () => {
        // create new task
        const newTask = Object.create(
            {
                _id: uuidv4(),
                description: taskDescription,
                importance: importance,
                urgency: urgency,
                priority: priority,
                completed: false,
                deleted: false
            }
        )
        
        console.log("new: ",newTask)

        try{
            const response = await fetch("./todo", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(newTask)
              })

              console.log("RES: ",response.json())
            // if (response.ok) {
            // console.log(response.json())
            // setTasks([...tasks, newTask])
            // } else {
            //     throw Error
            // }
        } catch (error) {
            console.log(error.message)
        }

    }
    
    return (
        <div>
            <input type="text" name="newTask" placeholder="new task" onChange={handleChange}></input>
            
            <select name="importance" onChange={handleImportance}>
                <option value={0}></option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
            </select>
            
            <select name="urgency" onChange={handleUrgency}>
                <option value={0}></option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
            </select>
            


            <button onClick={saveNewTask}>+</button>
        </div>
    );
};


export default NewTask;