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
    margin-top: -1rem;
    padding: 0.25rem 0.5rem;
    border-radius: 10px;
    background-color: var(--faded);
`