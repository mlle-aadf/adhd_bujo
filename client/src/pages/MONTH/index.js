import styled from "styled-components";


import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";


import { FaAngleRight, FaAngleLeft, FaBars, FaPlus } from "react-icons/fa6";
import { Collapse } from "react-collapse";

import NavBarMobile from "../../components/NavBarMobile"
import MonthCal from "./MonthCal";
// import MonthList from "./MonthList";
// import NewEvent from "../../components/NewEvent";
import HomeLink from "../../components/HomeLink";

import { useContext, useState } from "react";
import { DayContext } from "../../contexts/DayContext";
import { EventsContext } from "../../contexts/EventsContext"

const Month = () => {

    // let chosenMonth = "2024-01"
    const {thisMonthNum}= useContext(DayContext)
    const {monthsKeys, events} = useContext(EventsContext)

    console.log("month: ",events)


    return(
        <>
            <NavBarMobile/>
            <MonthCal localMonth={monthsKeys[thisMonthNum].date} eventList={events} title={true}/>
            <HomeLink/>
        </>

    )
}

export default Month

// const BTNcont = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: right;
// `

// const NewBTN = styled(FaPlus)`
//     width: 2rem;
//     padding: 0.25rem 0;
//     border-radius: 45%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     `
// const AddBTN = styled(FaBars)`
//     width: 2rem;
//     padding: 0.25rem 0;
//     /* font-size: 2rem; */
//     /* border: 2px solid fuchsia; */
//     border-radius: 45%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
// `

// const HeaderToolBar = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
// `