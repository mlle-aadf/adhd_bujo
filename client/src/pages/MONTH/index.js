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
    const [listOpened, setListOpened] = useState(true)
    const [newOpened, setNewOpened] = useState(false)

    console.log(events)

    const toggleHandler = () => {
            setNewOpened(!newOpened)
            setListOpened(!listOpened)
    }
    // console.log( thisMonthNum, monthsKeys)

    // const [index, setIndex] = useState(thisMonthNum)
    // const defaultMonth = monthsKeys[index]
    // const [selectedMonth, setSelectedMonth] = useState(defaultMonth)
    
    // console.log(selectedMonth)
    


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
                {/* <h3>THIS MONTH</h3> */}
                {/* <MonthCal localMonth={monthsKeys[thisMonthNum].date} eventList={events} title={true}/> */}
                {/* <MonthCal localMonth={monthsKeys[thisMonthNum].date} eventList={monthsKeys[thisMonthNum].events}/> */}
                {/* <BTNcont>
                    <NewBTN onClick={()=>toggleHandler()} style={{backgroundColor:`${newOpened === true ? "var(--faded)" : "transparent"}`}}/>
                    <AddBTN onClick={()=>toggleHandler()} style={{backgroundColor:`${listOpened === true ? "var(--faded)" : "transparent"}`}}/>
                </BTNcont> */}
                <Collapse isOpened={listOpened}>
                    <MonthCal localMonth={monthsKeys[thisMonthNum].date} eventList={events} title={true}/>
                    {/* <MonthList eventList={events}/> */}
                </Collapse>
                {/* <Collapse isOpened={newOpened}><NewEvent/></Collapse> */}
            <HomeLink/>
        </>

    )
}

export default Month

const BTNcont = styled.div`
    display: flex;
    align-items: center;
    justify-content: right;
`

const NewBTN = styled(FaPlus)`
    width: 2rem;
    padding: 0.25rem 0;
    border-radius: 45%;
    display: flex;
    align-items: center;
    justify-content: center;
    `
const AddBTN = styled(FaBars)`
    width: 2rem;
    padding: 0.25rem 0;
    /* font-size: 2rem; */
    /* border: 2px solid fuchsia; */
    border-radius: 45%;
    display: flex;
    align-items: center;
    justify-content: center;
`

// const HeaderToolBar = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
// `