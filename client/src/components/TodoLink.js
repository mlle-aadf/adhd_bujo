import { CheckBox } from "./Styles";
import check from "../icons/checkbox.png"

const TodoLink = () => {
    return (
        <CheckBox to={"/todo"}>
            <img src={check}/>
        </CheckBox>
    );
};

export default TodoLink;