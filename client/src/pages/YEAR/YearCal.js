import styled from "styled-components";


import { useCollapse } from 'react-collapsed';
import { useContext, useState } from "react";
import { DayContext } from "../../contexts/DayContext";

import MonthCal from "../MONTH/MonthCal";

const YearCal = () => {
    
    const {months} = useContext(DayContext)
    console.log("months: ", months)

    const [isExpanded, setExpanded] = useState(false);
    const { getCollapseProps, getToggleProps} = useCollapse({isExpanded})

    const clickHandler = () => {
        setExpanded((prevExpanded) => !prevExpanded)
    }
    
    return (
        
           <div>
             {months.map((month)=> 
                <MonthAll>
                    <h3 style={{color:"white"}} {...getToggleProps({onClick:clickHandler})}>{month}</h3>
                    <div {...getCollapseProps()}>
                        <MonthCal />
                    </div>

                </MonthAll>
                
             )}
           </div>



    );
};

export default YearCal;

const MonthAll = styled.div`
`