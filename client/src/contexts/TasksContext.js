import { createContext, useState, useEffect } from "react";

export const TaskContext = createContext();


const TaskContexttProvider = ({ children }) => {

  const [tasks, setTasks] = useState([])
  const [completed, setCompleted] = useState([])
  const [deleted, setDeleted] = useState([])
  const [priorities, setPriorities] = useState([])

  const [refresh, setRefresh] = useState(false)

// retrieve tasks from db
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

  // filter() task.delete === true
  const deleteFiltered = tasks.filter((task) => 
      task.deleted === true
  )

  // set default priorities  
  // const defaultPriorities = tasks.slice(0,3)

    setTasks(activeTasks)
    setCompleted(completeFiltered)
    setDeleted(deleteFiltered)
    setPriorities(tasks.slice(0,3))

  } catch (err) {
    console.log(err)
  }
}  


useEffect(()=> {
    getTasks()
  }, [refresh])

// add new task to db
  const addNewTask = async (newTask) => {

    const response = await fetch("/todo", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newTask)
      })
      
      if (response.ok) {
      setRefresh(!refresh)
    } else {
      console.log("addEvent failed")
    }
  }
  
  



  // update existing task(s) 
  const updateTask = async (opt, taskIDs) => {
      const updateInfo = {
        option: opt,
        taskIDs: taskIDs
      }
      console.log("updateTask_updateInfo", updateInfo)
  
      const response = await fetch("/todo", {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(updateInfo)
      })
      
      if (response.ok) {
        setRefresh(!refresh)
      }
  }



   // update existing task 
//    const updateTask = async (opt, taskId) => {
//     const updateInfo = {
//       option: opt,
//       taskID: taskId
//     }

//     const response = await fetch("/todo", {
//       method: "PATCH",
//       headers: {"Content-Type": "application/json"},
//       body: JSON.stringify(updateInfo)
//     })
    
//     if (response.ok) {
//       setRefresh(!refresh)
//     }
// }




  // empty DELETED bin
const emptyBin = async () => {
  const response = await fetch("/todo", {
    method: "delete",
    headers: {"Content-Type": "application/json"}
  })
  
  if (response.ok) {
    setRefresh(!refresh)
    console.log("RESPONSE: ", response)
  //   console.log("bin emptied :)")
  }
}

// update priorities
const updatePriorities = ({task}) => {
  console.log("updatePriorities: ", task)
  
  // const updated = priorities.pop().unshift(task)
  
  // console.log("pick me! ")
}

// updatePriorities("top priority")

  return (
    <TaskContext.Provider value={{tasks, completed, deleted, emptyBin, addNewTask, updateTask, priorities, updatePriorities}}>
      {children}
    </TaskContext.Provider>
  );
}
export default TaskContexttProvider