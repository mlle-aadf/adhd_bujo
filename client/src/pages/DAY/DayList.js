import styled from "styled-components";

import { useNavigate } from "react-router-dom";

import FullCalendar from "@fullcalendar/react";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from '@fullcalendar/interaction';

const DayList = ({eventList}) => {
    const navigate = useNavigate()
    const eventClickHandler = (e) => {
    
        const eventID = e.event._def.extendedProps._id
        navigate(`/events/${eventID}`)
   
    }
    
    return (
        <DayListCont>
            <FullCalendar
              plugins={[listPlugin, interactionPlugin]}
              initialView="listDay"
              headerToolbar={false}
              height="auto"
              noEventsContent="free :)"
              events={eventList}
              eventTimeFormat={{hour:"numeric", minute:"numeric", meridiem:false}}
              displayEventEnd={true}
              eventClick={eventClickHandler}
            >
        </FullCalendar>

        </DayListCont>
    );
};

export default DayList;

const DayListCont = styled.div`
    width: 100%;
`