import { createContext, useState, useEffect } from "react";
// const { v4: uuidv4 } = require('uuid');

export const TaskContext = createContext();


const TaskContexttProvider = ({ children }) => {

  const [tasks, setTasks] = useState([])
  const [priorities, setPriorities] = useState()


// retrieve tasks from db
const getTasks = async () => {
      
  let defaultPriorities
  
  try{
    const res = await fetch("/todo")
    const {tasks} = await res.json()
    
    setTasks(tasks)
    // console.log("CONTEXT tasks: ", tasks)

    defaultPriorities = tasks.slice(0, 3)
    console.log("default: ", defaultPriorities)
    
    /// 
    setPriorities(defaultPriorities)
    console.log("priorities: ", priorities)
    
    
  } catch (err) {
    console.log(err)
  }
}  

useEffect(()=> {
    // const getTasks = async () => {
      
    //   let defaultPriorities
      
    //   try{
    //     const res = await fetch("/todo")
    //     const {tasks} = await res.json()
        
    //     setTasks(tasks)
    //     // console.log("CONTEXT tasks: ", tasks)

    //     defaultPriorities = tasks.slice(0, 3)
    //     console.log("default: ", defaultPriorities)
        
    //     /// 
    //     setPriorities(defaultPriorities)
    //     console.log("priorities: ", priorities)
        
        
    //   } catch (err) {
    //     console.log(err)
    //   }
    // }
    getTasks()
  }, [])

// add new task to list
  const addNewTask = async (newTask) => {
    console.log("addNew: ", newTask)

    const response = await fetch("/todo", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newTask)
      })
      
      if (response.ok) {
      
      getTasks()
      }
  }
  
  // update existing task 
  const updateTask = async (opt, taskId) => {

    console.log(`task ${opt}:  ${taskId}`)

    const updateInfo = {
      option: opt,
      taskID: taskId
    }

    const response = await fetch("/todo", {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(updateInfo)
    })

    if (response.ok) {
      //
    }

  }


  // delete task from list

  //     // const response = await fetch("./todo", {
  //     //   method: "POST",
  //     //   headers: {"Content-Type": "application/json"},
  //     //   body: JSON.stringify(newTask)
  //     // })

  //     // if (response.ok) {
  //     //   console.log(response.json())
  //     //   setTasks([...tasks, newTask])

  //     // }

  // } 

// };
  return (
    <TaskContext.Provider value={{tasks, addNewTask, updateTask}}>
      {children}
    </TaskContext.Provider>
  );
}
export default TaskContexttProvider