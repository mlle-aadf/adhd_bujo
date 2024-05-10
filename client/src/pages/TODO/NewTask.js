import styled from "styled-components";

import { useState } from "react";
const { v4: uuidv4 } = require('uuid');

const NewTask = ({updateTasks}) => {
    

    const [taskDescription , setTaskDescription] = useState()
    const [importance , setImportance] = useState(0)
    const [urgency , setUrgency] = useState(0)
    // const [priority, setPriority] = useState(importance+urgency)

    const handleChange =(e) => {
        setTaskDescription(e.target.value)
    }

    const handleImportance = (e) => {
            console.log(`importance set to ${e.target.value}`)
            setImportance(parseInt(e.target.value))
            // setPriority(importance+urgency)
        }
        
        const handleUrgency = (e) => {
            console.log(`urgency set to ${e.target.value}`)
            setUrgency(parseInt(e.target.value))
            // setPriority(importance+urgency)
        }
        
        // const saveNewTask = async () => {
        //     // setPriority(importance+urgency)
            
        //     // create new task
        //     const newTask = Object.create(
        //         {
        //         _id: uuidv4(),
        //         description: taskDescription,
        //         importance: importance,
        //         urgency: urgency,
        //         // priority: (importance.parseInt()+urgency.parseInt()),
        //         completed: false,
        //         deleted: false
        //     }
        // )
        
        // console.log("new: ",newTask)

        // try{
        //     const response = await fetch("./todo", {
        //         method: "POST",
        //         headers: {"Content-Type": "application/json"},
        //         body: JSON.stringify({newTask})
        //     })

        //     console.log("RES: ",await response)
        //     // if (response.ok) {
        //     // console.log(response.json())
        //     // setTasks([...tasks, newTask])
        //     // } else {
        //     //     throw Error
        //     // }
        // } catch (error) {
        //     console.log(error.message)
        // }

        // }
    
        const saveNewTask = () => {
            // create new task
            const newTask = Object.create(
                {
                _id: uuidv4(),
                description: taskDescription,
                importance: importance,
                urgency: urgency,
                // priority: (importance.parseInt()+urgency.parseInt()),
                completed: false,
                deleted: false
            }
        )
        // updateTasks(newTask)
        console.log("new: ",newTask)
        }

    return (
        <NewTaskContainer>
            <NewInputs>
                <TaskInput type="text" name="newTask" placeholder="new task" onChange={handleChange}></TaskInput>
                
                <Importance name="importance" onChange={handleImportance}>
                    <option value={0}></option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                </Importance>
                
                <Urgency name="urgency" onChange={handleUrgency}>
                    <option value={0}></option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                </Urgency>
            </NewInputs>
            


            <button onClick={saveNewTask}>+</button>
        </NewTaskContainer>
    );
};


export default NewTask;

const NewTaskContainer = styled.div`
    width: 50vw;
    margin: 0 auto 1rem auto;
    display: grid;
    grid-template-columns: 7fr 1fr;
    gap: 0.5rem;
    
    /* border: 2px solid fuchsia; */
    `
const TaskInput = styled.input`
    background-color: transparent;
    color: white;
    border: none;
    width: 80%;
    height: 100%;
    padding: 0.25rem 0.5rem;
    
    `
const NewInputs = styled.div`
    background-color: var(--faded);
    color: white;
    border: none;
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 20px;
    `

const Importance = styled.select`
    background-color: white;
    color: black;
    border: none;
    width: 10%;
    height: 100%;
    margin: 0 0.25rem;
    border-radius: 20px;
    `
const Urgency = styled.select`
    background-color: white;
    color: black;
    border: none;
    width: 10%;
    height: 100%;
    border-radius: 20px;
`
