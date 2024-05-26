import styled from "styled-components";

import FullCalendar from "@fullcalendar/react";
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";

import { Collapse } from "react-collapse";
// import { useCollapse } from 'react-collapsed';
import { createRef, useRef, useState } from "react";
import MonthList from "./MonthList";
import NewEvent from "../../components/NewEvent";

// import { DayContext } from "../../contexts/DayContext";
// import { EventsContext } from "../../contexts/EventsContext";
// import { render } from "@fullcalendar/core/preact.js";



const MonthCal = ({localMonth, eventList, title}) => {
  
  // console.log("eventList: ", eventList)

  const calendarRef = createRef()
  const calendar2Ref = createRef()
  
  const [listOpened, setListOpened] = useState(true)
  const [newOpened, setNewOpened] = useState(false)

  const toggleHandler = () => {
    setListOpened(!listOpened)
    setNewOpened(!newOpened)
  }

  const prevHandler = () => {
    let calendarApi = calendarRef.current.getApi()
    let calendar2Api = calendar2Ref.current.getApi()
    calendarApi.prev()
    calendar2Api.prev()
    console.log("prev")
  }
  const nextHandler = () => {
    let calendarApi = calendarRef.current.getApi()
    let calendar2Api = calendar2Ref.current.getApi()
    calendarApi.next()
    calendar2Api.next()
  }

  const eventClickHandler = (e) => {
    console.log(e.event._def)
    console.log("eventID: ", e.event._def.extendedProps._id)
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
        // footerToolbar={{right:"listMonth"}}
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
            click: toggleHandler
          },
          addEventButton:{
            text:"+",
            click: toggleHandler
          }
        }}

        dayHeaderFormat={{weekday:'narrow'}}
        // editable={true}
        // selectable={true}
        // dateClick={()=>console.log("date cliked")}
        fixedWeekCount={false}
        contentHeight={"30vh"}
        
      />
      {/* view month events as list */}
      <Collapse isOpened={listOpened}>
        <FullCalendar
              plugins={[listPlugin]}
              initialView="listMonth"
              headerToolbar={false}
              // headerToolbar={{
              //   left:"listViewButton",
              //   center:"",
              //   right:"newEvent"
              // }}
              // customButtons={{
              //   addEventButton:{
              //     text:"list",
              //     click: ()=>setIsOpened(!isOpened)
              //   },
              //   addEventButton:{
              //     text:"new"
              //   }
              // }}
              // titleFormat={{month:"2-digit"}}
              ref={calendar2Ref}
              events={eventList}
              eventTimeFormat={{day:"2-digit", hour:"numeric", minute:"numeric", meridiem:false}}
              selectable={true}
              eventClick={eventClickHandler}
              // eventChange={}
              displayEventEnd={false}
            >
        </FullCalendar>
        </Collapse>   
        <Collapse isOpened={newOpened}><NewEvent/></Collapse>
        
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