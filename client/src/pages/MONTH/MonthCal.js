import styled from "styled-components";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";

import { useCollapse } from 'react-collapsed';
import { useContext, useEffect, useState } from "react";

import { DayContext } from "../../contexts/DayContext";
import { EventsContext } from "../../contexts/EventsContext";
import { render } from "@fullcalendar/core/preact.js";



const MonthCal = ({localMonth, eventList}) => {

  return (
    <div style={{marginTop:"1rem"}}>
      {/* view month calendar */}
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"

        // initialDate={localStorage.getItem("localMonth")?localStorage.getItem("localMonth"): undefined }
        initialDate={localMonth}
        headerToolbar={false}
        dayHeaderFormat={{weekday:'narrow'}}
        editable={true}
        selectable={true}
        fixedWeekCount={false}
        contentHeight={"30vh"}
      />
      {/* view month events as list */}
      <MonthList>
        {eventList.map((event)=> <p>{event.title}</p>)}
      </MonthList>   
    </div>
  );
};

export default MonthCal;

const MonthList = styled.div`
  background-color: var(--faded);
  border-radius: 10px;
  padding: 0.1rem 0.75rem
`