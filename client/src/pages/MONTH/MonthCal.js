import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";

import { useCollapse } from 'react-collapsed';
import { useContext, useEffect, useState } from "react";

import { DayContext } from "../../contexts/DayContext";
import { EventsContext } from "../../contexts/EventsContext";
import { render } from "@fullcalendar/core/preact.js";



const MonthCal = ({localMonth, title, eventList}) => {
  // console.log("events: ", eventList)
  // const [localMonth, setLocalMonth] = useState()

  // const {events}=useContext(EventsContext)

  // const {monthsKeys, displayMonth, setDisplayMonth} = useContext(EventsContext)


  // const title = document.querySelectorAll(`[title="Previous month"]`)
  // // .addEventListener('click', function() {
  // if (title.length) {

  //   debugger
  // }  
    // calendar.prev();
  // });



  // const [monthTitle, setMonthTitle] = useState()
 
  // const {thisMonth} = useContext(DayContext)

  // console.log("displMonth: ", displayMonth)

  // useEffect(()=> {

  // }, [])
  // const getMonth = () => {
  //   setSelectedMonth(chosenMonth)
  // }
  // const testClickhandler = (date) => {
  //   const monthKey = monthsKeys.find((m)=> m.str === date)

  //   console.log("monthKey ",monthKey.date)

  //   updateMonth(monthKey.date)
  //   setMonthTitle(date)
  // }




  return (
    <>

      {/* <h3>{title}</h3> */}
      
      {/* view month calendar */}
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"

        // initialDate={localStorage.getItem("localMonth")?localStorage.getItem("localMonth"): undefined }
        initialDate={localMonth}
        
        headerToolbar={false}
   
        dayHeaderFormat={{weekday:'narrow'}}
        titleFormat={{ month: "long" }}
        editable={true}
        selectable={true}
        fixedWeekCount={false}
        contentHeight={"30vh"}
      />
      {/* view month events as list */}
      <div>
        {/* {events.map((event)=> <p>{event.title}</p>)}  */}
        {eventList.map((event)=> <p>{event.title}</p>)}
      </div>   
    </>
  );
};

export default MonthCal;
