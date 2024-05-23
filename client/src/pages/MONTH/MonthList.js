import FullCalendar from "@fullcalendar/react";
import listPlugin from '@fullcalendar/list'

const MonthList = () => {
    
    const clickHandler = () => {
        console.log("event added!")
    }

    const events = [{
        title: 'Event1',
        start: '2024-05-22 09:30:00',
        end: '2024-05-22 10:30:00'
      },
      {
        title: 'Event2',
        start: '2024-05-24 12:30:00',
        end: '2024-05-24 13:30',
      }]

    return (
        <FullCalendar
            plugins={[listPlugin]}
            // datesSet={}
            initialView="listMonth"
            headerToolbar={false}
            // headerToolbar={{left:"", right:"addEventButton"}}
            // customButtons={{
            //     addEventButton:{
            //     text:"+"
            //     },
            //     // click: {clickHandler}
            // }}
            events={events}
            eventTimeFormat={{day:'numeric'}}
            contentHeight={"30vh"}
            noEventsContent={""}
            // listDayFormat={false}
            // listDaySideFormat={false}
            // eventAdd={}
        />
    )       
}

export default MonthList