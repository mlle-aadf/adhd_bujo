import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
// import listPlugin from "@fullcalendar/list";

import { useCollapse } from 'react-collapsed';
import { useContext, useEffect, useState } from "react";

import { DayContext } from "../../contexts/DayContext";
import { EventsContext } from "../../contexts/EventsContext";
import { render } from "@fullcalendar/core/preact.js";

const MonthCal = () => {
  
  // const [selectedMonth, setSelectedMonth] = useState()
  const {thisMonth} = useContext(DayContext)
  
  const {displayMonth, updateMonth} = useContext(EventsContext)
  console.log("displMonth: ", displayMonth)

  // const getMonth = () => {
  //   setSelectedMonth(chosenMonth)
  // }
  // const testClickhandler = (date) => {
  //   updateMonth(date)
  // }

  // useEffect(()=> {

  //   testClickhandler()
  // }, [selectedMonth])

    // console.log("chosenMonth: ", chosenMonth)
    
    // console.log("selectedMonth: ", selectedMonth)
    // switch (chosenMonth) {
    //   case "JANUARY":
    //     setSelectedMonth("2024-01")
    //     console.log("true")
    //   case "FEBRUARY":
    //     setSelectedMonth("2024-02")
    //   case "MARCH":
    //     setSelectedMonth("2024-03")
    //   case "APRIL":
    //     setSelectedMonth("2024-04")
    //   default:
    //     selectedMonth(undefined)
    // }

    
    // const {months} = useContext(DayContext)
    // const {events} = useContext(EventsContext)
    // console.log("events: ", events)

    // const [isExpanded, setExpanded] = useState(false);
    // const { getCollapseProps, getToggleProps} = useCollapse({isExpanded})

    // const clickHandler = () => {
    //     setExpanded((prevExpanded) => !prevExpanded)
    // }

  return (
    <>
      {/* <button onClick={()=>testClickhandler("2024-08")}>click me</button> */}
      <FullCalendar

        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        initialDate={displayMonth}
        
        headerToolbar={false}
        // headerToolbar={{
        //   left: "title",
        //   center: "",
        //   right: "",
        // }}

        dayHeaderFormat={{weekday:'narrow'}}
        titleFormat={{ month: "long" }}
        editable={true}
        selectable={true}
        fixedWeekCount={false}
        contentHeight={"30vh"}

      />
    
    </>
  );
};

export default MonthCal;
