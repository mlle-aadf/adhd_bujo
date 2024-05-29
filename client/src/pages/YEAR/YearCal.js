import styled from "styled-components";

import { FaCalendarDay, FaList, FaChevronUp, FaChevronDown} from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";

import FullCalendar from "@fullcalendar/react";
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
// import multiMonthPlugin from '@fullcalendar/multimonth'

import {Collapse} from 'react-collapse';
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EventsContext } from "../../contexts/EventsContext"


const YearCal = () => {
    
    const {monthsKeys, events}=useContext(EventsContext)
    console.log("monthkeys: ", monthsKeys)

    const [monthExpanded, setMonthExpanded] = useState([false, false, false, false, false, false, false, false, false, false, false, false])
    
    const [listView, setListView] = useState([false, false, false, false, false, false, false, false, false, false, false, false])

    const collapseHandler = (i) => {
        const updated = monthExpanded.map((bool, index) => i === index ? !bool : bool )
        setMonthExpanded(updated)

        if(listView[i]===true) {
            const updatedListView = listView.map((bool, index) => i === index ? !bool : bool )
            setListView(updatedListView)
        }
    }
    

    const displayListHandler = (i) => {
        console.log("toggled")
        const updatedListView = listView.map((bool, index) => i === index ? bool : !bool )
        setListView(updatedListView)
    }

    const navigate = useNavigate()
    const eventClickHandler = (e) => {
        const eventID = e.event._def.extendedProps._id
        navigate(`/events/${eventID}`)
    }

    return (
        


        <>
            <p style={{color:"black", height:"0.25rem", margin:"0.75rem"}}>~</p>

            {monthsKeys.map((month, i)=>
                <MonthContainer>
                    <MonthTitleCont>
                        <MonthTitle onClick={()=> collapseHandler(i)} id={`${month.str}`}>{month.str}</MonthTitle>
                    </MonthTitleCont>
                    <Collapse isOpened={monthExpanded[i]}>
                        <FullCalendar
                            plugins={[dayGridPlugin]}
                            initialView="dayGridMonth"
                            initialDate={month.date}
                            headerToolbar={false}
                            fixedWeekCount={false}
                            dayHeaderFormat={{weekday:'narrow'}}
                            footerToolbar={
                                {left:"", right:"displayList"}
                            }
                            customButtons={{
                                displayList:{
                                  text: `${listView[i]===true ? "..." : "+"}`,
                                  click: (i)=> displayListHandler(i)
                                }
                            }}
                        />
                        <Collapse isOpened={listView[i]}>
                            <FullCalendar
                                plugins={[listPlugin, interactionPlugin]}
                                initialView="listMonth"
                                initialDate={month.date}
                                headerToolbar={false}
                                noEventsContent="No events to display"
                                events={events}
                                eventTimeFormat={{day:"2-digit", hour:"numeric", minute:"numeric", meridiem:false}}
                                eventClick={eventClickHandler}
                                defaultTimedEventDuration={'1:00:00'}
                                displayEventEnd={false}
                            />
                        </Collapse>
                    </Collapse>
                </MonthContainer>
            )}
        </>
    )
};

export default YearCal;

const MonthContainer = styled.div`
    padding-bottom: 0.25rem;
`
const MonthTitleCont = styled.div`
    width: 75vw;
    padding-left: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem; 
    height: 2rem;
    font-size: 1.75rem;
`
const MonthTitle = styled.h2`
    font-size: 1.75rem;
`