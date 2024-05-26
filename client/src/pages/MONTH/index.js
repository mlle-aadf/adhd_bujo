import styled from "styled-components";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";

import NavBarMobile from "../../components/NavBarMobile"

import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

import MonthCal from "./MonthCal";
import MonthList from "./MonthList";
import HomeLink from "../../components/HomeLink";

import { useContext, useState } from "react";
import { DayContext } from "../../contexts/DayContext";
import { EventsContext } from "../../contexts/EventsContext"

const Month = () => {

    // let chosenMonth = "2024-01"
    const {thisMonthNum}= useContext(DayContext)
    const {monthsKeys, events} = useContext(EventsContext)

    // console.log( thisMonthNum, monthsKeys)

    // const [index, setIndex] = useState(thisMonthNum)
    // const defaultMonth = monthsKeys[index]
    // const [selectedMonth, setSelectedMonth] = useState(defaultMonth)
    
    // console.log(selectedMonth)
    
    // const navHandler = (opt) => {
        
    //     if (opt === "prev") {
    //         setIndex(index-1)
    //     } else {
    //         setIndex(index+1)
    //     }
        
    //     console.log("navHandler, index: ",index, "default: ", defaultMonth, "selected: ", selectedMonth)
        
    // }

    return(
        <>
            <NavBarMobile/>
            {/* <HeaderToolBar>
                <FaAngleLeft onClick={()=>setIndex(index-1)}/>
                <h3>{monthsKeys[index].str}</h3>
                <FaAngleRight onClick={()=>setIndex(index+1)}/>
            </HeaderToolBar> */}
            {/* <FullCalendar
                plugins={[dayGridPlugin, listPlugin]}
                initialView="dayGridMonth"
                // initialDate={}
                headerToolbar={{
                    left: 'prev, next',
                    center: 'title',
                    // right: 'month,list'
                    // right: 'dayGridMonth,listMonth'
                }}
                eventDisplay="block"
                // views={{
                //     month:{
                //         type: 'dayGridMonth',
                //         eventDisplay:"none"
                //     },
                //     list:{
                //         type: 'dayGridMonth',
                //         eventDisplay:"block"

                //     }
                // }}

                titleFormat={{month:"long"}}
                dayHeaderFormat={{weekday:'narrow'}}
                events={events}
                eventTimeFormat={{ // like '14:30:00'
                    hour: "numeric",
             
                    hour12: false,
                    meridiem: false
                  }}
                editable={true}
                // selectable={true}
                fixedWeekCount={false}
                contentHeight={"50vh"}
            /> */}
            {/* <FaAngleLeft onClick={()=>navHandler("prev")}/>{selectedMonth.str}<FaAngleRight onClick={()=>navHandler("next")}/> */}
                <h3>THIS MONTH</h3>
                <MonthCal localMonth={monthsKeys[thisMonthNum].date} eventList={events}/>
                {/* <MonthCal localMonth={monthsKeys[thisMonthNum].date} eventList={monthsKeys[thisMonthNum].events}/> */}

            {/* <MonthList/> */}
            <HomeLink/>
        </>

    )
}

export default Month

// const HeaderToolBar = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
// `