import { TasksLink } from "./Styles";
import check from "../icons/checkbox.png"

const TodoLink = () => {
    return (
        <TasksLink to={"/todo"}>
            <img src={check}/>
        </TasksLink>
    );
};

export default TodoLink;