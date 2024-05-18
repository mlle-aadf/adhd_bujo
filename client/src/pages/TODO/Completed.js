import { CompletedContainer, CompletedTitle } from "./Styles";

const Completed = ({completed}) => {
    
    return (
        <CompletedContainer>
            <CompletedTitle>COMPLETED</CompletedTitle>
            {completed.map((task) => <li key={task._id}>{task.description}</li>)}
        </CompletedContainer>
    );
};

export default Completed;