// To-Do page index
import { useContext } from "react";
import styled from "styled-components";

import NewTask from "./NewTask";
import TaskList from "./TaskList";
import { TaskContext } from "../../contexts/TasksContext";

const Todo = () => {

    const {tasks, addNewTask} = useContext(TaskContext)

    return (
        <TodoContainer>
            <TodoTitle>TO DO</TodoTitle>
            <NewTask addNewTask={addNewTask}/>
            <TaskList tasks={tasks}/>
        </TodoContainer>
    );
};

const TodoTitle = styled.h3`
    
`
const TodoContainer = styled.div`

    width: 50vw;
    margin: 0 auto;
`

export default Todo;