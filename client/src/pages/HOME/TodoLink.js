import { TasksLink } from "../../pages/HOME/Styles";
import { FaRegSquare  } from "react-icons/fa6";

const TodoLink = () => {
    return (
        <TasksLink to={"/todo"}>
            <FaRegSquare />
        </TasksLink>
    );
};

export default TodoLink;