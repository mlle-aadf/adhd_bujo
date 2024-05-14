import { createContext, useState, useEffect } from "react";
const { v4: uuidv4 } = require('uuid');

export const TaskContext = createContext();


const TaskContexttProvider = ({ children }) => {

  const [tasks, setTasks] = useState([])
//   const [task, setTask] = useState(
//     {
//       _id: uuidv4(),
//       description: "",
//       importance: 0,
//       urgency: 0,
//       priority: 0,
//       completed: false,
//       deleted: false,
//    }
// )

// retrieve tasks from db
  useEffect(()=> {
    const getTasks = async () => {
      try{
        const res = await fetch("/todo")
        const {tasks} = await res.json()
        
        console.log("CONTEXT tasks: ", tasks)
        setTasks(tasks)
      } catch (err) {
        console.log(err)
      }
    }
    getTasks()
  }, [])

// add new task to list
const addNewTask = (newTask) => {
  console.log("new: ", newTask)
}
// update existing task 
// delete task from list



 


//   const createNewTask = (task) => {
//     // const newTask = Object.create(
//     //     {
//     //       _id: uuidv4(),
//     //       description: description,
//     //       priority: priority,
//     //       importance: importance,
//     //       urgency: urgency,
//     //       completed: completed,
//     //       deleted: deleted
//     //     }
//     // )

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

  return (
    <TaskContext.Provider value={{tasks, addNewTask}}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContexttProvider;