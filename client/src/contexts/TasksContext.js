import { createContext, useState, useEffect } from "react";

export const TaskContext = createContext();


const TaskContexttProvider = ({ children }) => {

  const [tasks, setTasks] = useState([])
  const [completed, setCompleted] = useState([])
  const [deleted, setDeleted] = useState([])
  const [priorities, setPriorities] = useState([])

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

// add new task to list
  const addNewTask = async (newTask) => {
    // console.log("addNew: ", newTask)

    const response = await fetch("/todo", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newTask)
      })
      
      if (response.ok) {
      setRefresh(!refresh)
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
        setRefresh(!refresh)
      }
  }


  // empty DELETED bin


// update priorities
const updatePriorities = ({task}) => {
  
  
  // const updated = priorities.pop().unshift(task)
  
  console.log("pick me! ")
}

updatePriorities("top priority")

  return (
    <TaskContext.Provider value={{tasks, completed, deleted, addNewTask, updateTask, priorities, updatePriorities}}>
      {children}
    </TaskContext.Provider>
  );
}
export default TaskContexttProvider