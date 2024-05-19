import { DeletedContainer, DeletedTitle } from "./Styles";
import { CgCloseR } from "react-icons/cg";

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
                <CgCloseR {...getToggleProps({onClick:clickHandler})} style={{marginRight:"1rem", color:`${isExpanded? "var(--mint)" : "white"}`, height:"1.75rem"}}/> DELETED
            </DeletedTitle>
            <div {...getCollapseProps()}>{deleted.map((task) => <li key={task._id}>{task.description}</li>)}</div>
        </DeletedContainer>
    );
};

export default Deleted;