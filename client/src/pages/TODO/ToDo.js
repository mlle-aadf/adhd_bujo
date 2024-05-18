import {TodoTitle, TodoContainer} from "./Styles"
import NewTask from "./NewTask";
import TaskList from "./TaskList";

const ToDo = ({addNewTask, tasks}) => {
    return (
        <TodoContainer>
            <TodoTitle>TO DO</TodoTitle>
            <NewTask addNewTask={addNewTask}/>
            <TaskList tasks={tasks}/>
        </TodoContainer>
    );
};

export default ToDo;