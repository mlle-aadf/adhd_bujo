import styled from "styled-components";

import {Collapse} from 'react-collapse';
// import { useCollapse } from 'react-collapsed';
// import { DayContext } from "../../contexts/DayContext";
import { useContext, useState } from "react";
import { EventsContext } from "../../contexts/EventsContext"

import MonthCal from "../MONTH/MonthCal";

const YearCal = () => {
    
    const {monthsKeys, events}=useContext(EventsContext)
    // console.log("monthkeys: ", events)

    
    // const {months} = useContext(DayContext)
    // console.log("months: ", months)


    const [monthExpanded, setMonthExpanded] = useState([false, false, false, false, false, false, false, false, false, false, false, false])

    const collapseHandler = (i) => {
        const updated = monthExpanded.map((bool, index) => i === index ? !bool : bool )
        setMonthExpanded(updated)
    }

    return (
        


        <>
        <p style={{color:"black"}}>~</p>
        {monthsKeys.map((month, i) => 
        <MonthContainer>
            <MonthTitle onClick={()=> collapseHandler(i)}>{month.str}</MonthTitle>
            <Collapse isOpened={monthExpanded[i]} initialStyle={{height:"0px"}}>
                <MonthCal localMonth={month.date} eventList={events} />
            </Collapse>
        </MonthContainer>
        )}
        </>
    )
};

export default YearCal;

const MonthContainer = styled.div`
    margin: -0.5rem 0;
`
const MonthTitle = styled.h3`
    margin-bottom: -0.25rem; 
`