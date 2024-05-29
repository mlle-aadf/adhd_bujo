// import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// import { EventsContext } from "../../contexts/EventsContext";

import FullCalendar from "@fullcalendar/react";
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";

// import Modal from "react-modal" ;
import { Collapse } from "react-collapse";
// import { useCollapse } from 'react-collapsed';
import { createRef, useContext, useState } from "react";
// import MonthList from "./MonthList";
import NewEvent from "../EVENTS/NewEvent";
// import EditEvent from "../EVENTS/EditEvent";

// import { DayContext } from "../../contexts/DayContext";
// import { EventsContext } from "../../contexts/EventsContext";
// import { render } from "@fullcalendar/core/preact.js";



const MonthCal = ({localMonth, eventList, title}) => {
  
  // console.log("eventList: ", eventList)
  // const {addNewEvent} = useContext(EventsContext)
  const navigate = useNavigate()

  const calendarRef = createRef()
  const calendar2Ref = createRef()
  
  const [listOpened, setListOpened] = useState(true)
  // const [newOpened, setNewOpened] = useState(false)

  const listViewHandler = () => {
    setListOpened(true)
    // setNewOpened(false)
    // setEditOpened(false)
    console.log("listed!")
  }
  
  const addViewHandler = () => {
    setListOpened(false)
    // setNewOpened(true)
    // setEditOpened(false)
    console.log("addViewHandler!")
  
  }
  

  const prevHandler = () => {
    setListOpened(true)
    let calendarApi = calendarRef.current.getApi()
    let calendar2Api = calendar2Ref.current.getApi()
    calendarApi.prev()
    calendar2Api.prev()
  }
  const nextHandler = () => {
    setListOpened(true)
    let calendarApi = calendarRef.current.getApi()
    let calendar2Api = calendar2Ref.current.getApi()
    calendarApi.next()
    calendar2Api.next()
  }

  const eventClickHandler = (e) => {
    
    const eventID = e.event._def.extendedProps._id
    navigate(`/events/${eventID}`)

    // console.log("eventClickHandler ", eventID)
  }

  // do something when day is clicked
  // const clickDateHandler = (e) => {
  //   console.log("clickDateHandler: ", e)
  // }



  return (
    <div style={{marginTop:"1rem"}}>
      {/* MONTH CALENDAR VIEW */}
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        ref={calendarRef}
        initialDate={localMonth}
        // headerToolbar={false}
        headerToolbar={title===true? {
          left:"p",
          center:"title",
          right:"n"
        } : false}
        footerToolbar={{left:"listViewButton",right:"addEventButton"}}
        titleFormat={{month:"short", year:"numeric"}}
        customButtons={{
          p:{
            icon:"chevron-left",
            click: prevHandler
          },
          n:{
            icon:"chevron-right",
            click: nextHandler
          },
          listViewButton:{
            text:"EVENTS",
            click: listViewHandler
          },
          addEventButton:{
            text:"+",
            click: addViewHandler
          }
        }}
        dayHeaderFormat={{weekday:'narrow'}}
        fixedWeekCount={false}
        contentHeight={"30vh"}
        // dateClick={clickDateHandler}
      />
      
      
      
      {/* MONTH LIST VIEW */}
        <Collapse isOpened={listOpened}>
        <FullCalendar
              plugins={[listPlugin]}
              initialView="listMonth"
              headerToolbar={false}
              // contentHeight= "5000" 
              ref={calendar2Ref}
              noEventsContent="..."
              events={eventList}
              eventTimeFormat={{day:"2-digit", hour:"numeric", minute:"numeric", meridiem:false}}
              // selectable={true}
              eventClick={eventClickHandler}
              eventStartEditable={true}
              // allDay={false}
              eventDurationEditable={true}
              defaultTimedEventDuration={'1:00:00'}
              // eventChange={}
              displayEventEnd={false}
            
            >
        </FullCalendar>
        </Collapse>   
        
        
        {/* view new event form */}
        <Collapse isOpened={!listOpened}><NewEvent /></Collapse>
        
        {/* view update event form */}
        {/* <Collapse isOpened={true} event={""} ><EditEvent/></Collapse> */}
        
        
        
        {/* <Modal isOpen={false}>

        </Modal> */}
        {/* <MonthList ref={calendarRef}/> */}
        {/* <MonthList>
          {eventList.map((event)=> <p>{event.title}</p>)}
        </MonthList> */}
    </div>
  );
};

export default MonthCal;

// const MonthList = styled.div`
//   background-color: var(--faded);
//   border-radius: 10px;
//   padding: 0.1rem 0.75rem;
//   margin-top: 1rem;
// `