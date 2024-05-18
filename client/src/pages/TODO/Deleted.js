import { DeletedContainer, DeletedTitle } from "./Styles";

const Deleted = ({deleted}) => {
    return (
        <DeletedContainer>
            <DeletedTitle>DELETED</DeletedTitle>
            {deleted.map((task) => <li key={task._id}>{task.description}</li>)}
        </DeletedContainer>
    );
};

export default Deleted;