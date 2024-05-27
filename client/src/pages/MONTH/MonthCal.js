import styled from "styled-components";
// import { EventsContext } from "../../contexts/EventsContext";

import FullCalendar from "@fullcalendar/react";
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";

import Modal from "react-modal" ;
import { Collapse } from "react-collapse";
// import { useCollapse } from 'react-collapsed';
import { createRef, useContext, useState } from "react";
import MonthList from "./MonthList";
import NewEvent from "../EVENTS/NewEvent";
import EditEvent from "../EVENTS/EditEvent";

// import { DayContext } from "../../contexts/DayContext";
import { EventsContext } from "../../contexts/EventsContext";
// import { render } from "@fullcalendar/core/preact.js";



const MonthCal = ({localMonth, eventList, title}) => {
  
  // console.log("eventList: ", eventList)
  const {findEvent, updateEvent} = useContext(EventsContext)

  const [updatedEvent,setUpdatedEvent] = useState({
    _id: "",
    title: "title",
    description: "description",
    start:"YYYY-MM-DD HH:MM",
    end:"YYYY-MM-DD HH:MM"
  })

  const calendarRef = createRef()
  const calendar2Ref = createRef()
  
  const [listOpened, setListOpened] = useState(true)
  const [newOpened, setNewOpened] = useState(false)
  // const [createOpened, setCreateOpened] = useState(false)
  const [editOpened, setEditOpened] = useState(false)
  // const [modalOpened, setModalOpened] = useState(false)

  const listViewHandler = () => {
    setListOpened(true)
    setNewOpened(false)
    setEditOpened(false)
    console.log("listed!")
  }
  
  const addEventHandler = () => {
    setListOpened(false)
    setNewOpened(true)
    setEditOpened(false)
    console.log("added!")
  
  }
  

  const prevHandler = () => {
    let calendarApi = calendarRef.current.getApi()
    let calendar2Api = calendar2Ref.current.getApi()
    calendarApi.prev()
    calendar2Api.prev()
  }
  const nextHandler = () => {
    let calendarApi = calendarRef.current.getApi()
    let calendar2Api = calendar2Ref.current.getApi()
    calendarApi.next()
    calendar2Api.next()
  }

  const eventClickHandler = (e) => {
    setNewOpened(false)
    setListOpened(false)
    setEditOpened(true)
    const {_id} = e.event._def.extendedProps
    const {title} = e.event._def
    const {description} = e.event._def.extendedProps
    const {start, end} = e.event
    console.log("event keys: ", _id, title, description, start, end)

    const foundEvent = findEvent(_id)
    

    // setUpdatedEvent({...updatedEvent,
    //   _id: _id,
    //   title: title,
    //   description: description,
    //   start: start,
    //   end: end
    // })
    // debugger
    // let calendar2Api = calendar2Ref.current.getApi()
    
    // const event = calendar2Api.get

    // const eventStart = e.event.start


    // console.log("event: ", event)
    // console.log("updated: ", updatedEvent)
    // console.log(`eventClickHandler: event: ${event}, eventID: ${eventID}, eventTitle: ${eventTitle}, eventDesc: ${eventDesc}`) 

    // setUpdatedEvent({
      // ...updatedEvent, 
      // _id: `${eventID}`,
      // title: `${eventTitle}`,
      // description: `${eventDesc}`,
      // start: `${eventStart}`,

  // })
    // updateEvent(eventID, {updateEvent})
  }

  // const addEventHandler = () => {
  //   console.log("added event :)")
  // }
  // const listViewHandler = () => {
  //   console.log("list view")
  //   setIsOpened(!isOpened)
  // }

  return (
    <div style={{marginTop:"1rem"}}>
      {/* view month calendar */}
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
            click: addEventHandler
          }
        }}
        dayHeaderFormat={{weekday:'narrow'}}
        fixedWeekCount={false}
        contentHeight={"30vh"}
      />
      
      
      
      {/* view month events as list */}
      <Collapse isOpened={listOpened}>
        <FullCalendar
              plugins={[listPlugin]}
              initialView="listMonth"
              headerToolbar={false}
              ref={calendar2Ref}
              events={eventList}
              eventTimeFormat={{day:"2-digit", hour:"numeric", minute:"numeric", meridiem:false}}
              // selectable={true}
              eventClick={eventClickHandler}
              eventStartEditable={true}
              eventDurationEditable={true}
              defaultTimedEventDuration={'1:00:00'}
              // eventChange={}
              displayEventEnd={false}
            >
        </FullCalendar>
        </Collapse>   
        
        
        {/* view new event form */}
        <Collapse isOpened={newOpened}><NewEvent /></Collapse>
        
        {/* view update event form */}
        <Collapse isOpened={editOpened} event={""} ><EditEvent updatedEvent={updatedEvent}setUpdatedEvent={setUpdatedEvent}/></Collapse>
        
        
        
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