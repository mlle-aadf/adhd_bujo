import { createContext, useState } from "react";
// const { v4: uuidv4 } = require('uuid');

export const TaskContext = createContext();


const TaskContexttProvider = ({ children }) => {

  const [tasks, setTasks] = useState([])

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
    <TaskContext.Provider value={{tasks, setTasks}}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContexttProvider;