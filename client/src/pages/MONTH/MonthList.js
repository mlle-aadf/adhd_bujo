import styled from "styled-components";
import FullCalendar from "@fullcalendar/react";
import listPlugin from '@fullcalendar/list'

import { useContext, useState } from "react";
import { EventsContext } from "../../contexts/EventsContext";

const MonthList = ({eventList}) => {
    
    const {events} = useContext(EventsContext)
    console.log("events: ", events)



    // const clickHandler = () => {
    //     console.log("event added!")
    // }

    // const events = [{
    //     title: 'Event1',
    //     start: '2024-05-22 09:30:00',
    //     end: '2024-05-22 10:30:00'
    //   },
    //   {
    //     title: 'Event2',
    //     start: '2024-05-24 12:30:00',
    //     end: '2024-05-24 13:30',
    //   }]

    return (
        <MonthListContainer>
          {/* <FullCalendar
            plugins={[listPlugin]}
            initialView="listMonth"
            headerToolbar={{
              left:"title",
              center:"",
              right:""
            }}
            titleFormat={{month:"2-digit"}}
            ref={calendarRef}
          >

          </FullCalendar> */}

        {/* {eventList.map((event)=> <p>{event.title}</p>)} */}
        </MonthListContainer>
    )       
}

export default MonthList

const MonthListContainer = styled.div`
  background-color: var(--faded);
  border-radius: 10px;
  padding: 0.1rem 0.75rem;
  margin-top: 1rem;
`