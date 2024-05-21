import { DeletedContainer, DeletedTitle } from "./Styles";
import { MdDelete } from "react-icons/md";

import { useState } from "react";
import {useCollapse} from 'react-collapsed';

const Deleted = ({deleted}) => {
    
        
    const [isExpanded, setExpanded] = useState(false);
    const { getCollapseProps, getToggleProps} = useCollapse({isExpanded})

    const clickHandler = () => {
        setExpanded((prevExpanded) => !prevExpanded)
    }
    
    return (
        <DeletedContainer>
            <DeletedTitle style={{display:"flex", alignItems:"center"}}>
                <MdDelete {...getToggleProps({onClick:clickHandler})} style={{marginRight:"1rem", color:`${isExpanded? "var(--mint)" : "white"}`, height:"2rem"}}/> DELETED
            </DeletedTitle>
            <div {...getCollapseProps()}>{deleted.map((task) => <li key={task._id}>{task.description}</li>)}</div>
        </DeletedContainer>
    );
};

export default Deleted;