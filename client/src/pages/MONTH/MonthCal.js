import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
// import { months } from "../data";
// import { DayContext } from "../contexts/DayContext";
// import { useContext } from "react";

const MonthCal = () => {
  
  const events = [{
    title: 'Event1',
    start: '2024-05-22 09:30:00',
    end: '2024-05-22 10:30:00'
  },
  {
    title: 'Event2',
    start: '2024-05-22 12:30:00',
    end: '2024-05-22 13:30',
  }]
    
  return (
    <FullCalendar
      plugins={[dayGridPlugin, listPlugin]}
      initialView="dayGridMonth"
      
      views={{
        dayGridMonth :{buttonText: 'month'}, 
        listMonth : {buttonText: 'list'}}}
      
      // headerToolbar={false}
      headerToolbar={{
        left: "prev",
        center: "title",
        right: "next",
      }}

      dayHeaderFormat={{weekday:'narrow'}}
      titleFormat={{ month: "long" }}
      editable={true}
      selectable={true}
      fixedWeekCount={false}
      contentHeight={"30vh"}

    />
  );
};

export default MonthCal;
