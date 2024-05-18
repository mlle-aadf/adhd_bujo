import { createContext, useState, useEffect } from "react";
// const { v4: uuidv4 } = require('uuid');

export const TaskContext = createContext();


const TaskContexttProvider = ({ children }) => {

  const [tasks, setTasks] = useState([])
  const [completed, setCompleted] = useState([])
  const [deleted, setDeleted] = useState([])
  const [priorities, setPriorities] = useState()

  const [refresh, setRefresh] = useState(false)

// retrieve active tasks from db
const getTasks = async () => {
  
  
  try{
    const res = await fetch("/todo")
    const {tasks} = await res.json()
    
    // triage tasks ->

    // filter() task.complete !== true && task.delete !== true
    const activeTasks = tasks.filter((task) => 
        task.completed !== true && task.deleted !== true
      )


    // filter() task.complete === true
    const completeFiltered = tasks.filter((task) => 
        task.completed === true
      )

      // console.log("completed: ", completeFiltered)
    // filter() task.delete === true

    setTasks(activeTasks)
    setCompleted(completeFiltered)



  } catch (err) {
    console.log(err)
  }
}  

// const getCompleted = async () => {
//   try{
//     const res = await fetch("/todo")
//     const {completed} = await res.json()
    
//     console.log("context getCompleted: ", completed)
//     setCompleted(completed)
//   } catch (err) {
//     console.log(err)
  
//   }
// }


useEffect(()=> {
    getTasks()
  }, [refresh])

// add new task to list
  const addNewTask = async (newTask) => {
    console.log("addNew: ", newTask)

    const response = await fetch("/todo", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newTask)
      })
      
      if (response.ok) {
      setRefresh(!refresh)
      // getTasks()
    }
  }
  
  
  // update existing task 
  const updateTask = async (opt, taskId) => {
    
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
console.log("TASK con 105: ", response)
      setRefresh(refresh)
      // getTasks()
    }
  }


  // empty DELETED bin

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
    <TaskContext.Provider value={{tasks, completed, addNewTask, updateTask}}>
      {children}
    </TaskContext.Provider>
  );
}
export default TaskContexttProvider