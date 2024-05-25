import { DeletedContainer, DeletedTitle } from "./Styles";
import { MdDelete } from "react-icons/md";

import { useState } from "react";
import { Collapse } from "react-collapse";

const Deleted = ({deleted}) => {
    
    // toggle DELETED list visibility
    const [isOpened, setIsOpened] = useState(false)
    const clickHandler = () => {
        setIsOpened(!isOpened)
    }    
    
    return (
        <DeletedContainer>
            <DeletedTitle onClick={clickHandler} style={{display:"flex", alignItems:"center"}}>
                <MdDelete style={{marginRight:"1rem", color:`${isOpened? "var(--mint)" : "white"}`, height:"2rem"}}/> DELETED
            </DeletedTitle>
            <Collapse isOpened={isOpened}>{deleted.map((task) => <li key={task._id}>{task.description}</li>)}</Collapse>
        </DeletedContainer>
    );
};

export default Deleted;