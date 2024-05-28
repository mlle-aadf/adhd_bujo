import styled from "styled-components";

import { useContext } from "react";
import { EventsContext } from "../../contexts/EventsContext";

import FullCalendar from "@fullcalendar/react";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from '@fullcalendar/interaction';

const DayList = () => {
    const {events} = useContext(EventsContext)

    const today = new Date()

    console.log("DAYLIST events: ", events, today)
    
    return (
        <DayListCont>
            <FullCalendar
              plugins={[listPlugin]}
              initialView="listDay"
              initialDate={today}
            
              headerToolbar={false}
            //   contentHeight= "5000" 
            //   ref={calendar2Ref}
              noEventsContent="free :)"
              events={events}
              eventTimeFormat={{hour:"numeric", minute:"numeric", meridiem:false}}
              // selectable={true}
            //   eventClick={eventClickHandler}
              eventStartEditable={true}
            //   allDay={false}
            //   eventDurationEditable={true}
            //   defaultTimedEventDuration={'1:00:00'}
              // eventChange={}
              displayEventEnd={true}
            
            >
        </FullCalendar>

        </DayListCont>
    );
};

export default DayList;

const DayListCont = styled.div`
`