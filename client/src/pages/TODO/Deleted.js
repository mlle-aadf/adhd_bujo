import { DeletedContainer, DeletedTitleCont, BinIcon, BinDeleteBTN } from "./Styles";

import { useContext, useState } from "react";
import { TaskContext } from "../../contexts/TasksContext";
import { Collapse } from "react-collapse";

const Deleted = ({deleted}) => {
    
    const {emptyBin} = useContext(TaskContext)
  
    // toggle DELETED list visibility
    const [isOpened, setIsOpened] = useState(false)
    
    // empty DELETED bin
    const emptyBinHandler = () => {
        emptyBin()
    }

    return (
        <DeletedContainer>
            <DeletedTitleCont>
                <BinIcon onClick={()=> setIsOpened(!isOpened)} style={{color:`${isOpened? "var(--mint)" : "white"}`}}/>
                <h2  onClick={()=> setIsOpened(!isOpened)} style={{width:"80%"}}> DELETED</h2>
                <BinDeleteBTN style={{display:`${isOpened === true ? "block" : "none"}`}} onClick={emptyBinHandler}/>
            </DeletedTitleCont>
            
            <Collapse isOpened={isOpened}>
                {deleted.length===0 ? <p style={{paddingLeft:"0.5rem"}}>YOUR BIN IS EMPTY</p> :
                deleted.map((task) => <li key={task._id} style={{paddingLeft:"0.5rem"}}>{task.description}</li>)
                }
            </Collapse>        
        </DeletedContainer>
    );
};

export default Deleted;