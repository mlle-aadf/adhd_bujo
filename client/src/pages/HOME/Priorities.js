import { useContext, useState } from "react";
import { TaskContext } from "../../contexts/TasksContext";
import {Collapse} from 'react-collapse';
import { PrioriTitleCont, StarIcon, PriorityTitle, PrioritiesContainer, PrioritiesList } from "./Styles";


const Priorities = ({intialExpanded}) => {
    
    const [isOpened, setIsOpened] = useState(intialExpanded)
    const {priorities} = useContext(TaskContext)

    return (
        
        <PrioritiesContainer>
            <PrioriTitleCont onClick={()=> setIsOpened(!isOpened)}>
                <StarIcon style={{color:`${isOpened? "var(--priority1)" : "white"}`}}/>
                <PriorityTitle>PRIORITIES</PriorityTitle>
            </PrioriTitleCont>

            <Collapse isOpened={isOpened}>
                    <PrioritiesList>
                        {priorities.length > 0 ?
                        <div>
                            <p>{`${priorities[0].description}`}</p>
                            <p>{`${priorities[1].description}`}</p>
                            <p>{`${priorities[2].description}`}</p>
                        </div>
                        : <p>...</p>}
                    </PrioritiesList>
            </Collapse>
        </PrioritiesContainer>
    );
};

export default Priorities;