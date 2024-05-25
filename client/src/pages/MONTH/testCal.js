import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";

import { useCollapse } from 'react-collapsed';
import { useContext, useEffect, useState } from "react";

import { DayContext } from "../../contexts/DayContext";
import { EventsContext } from "../../contexts/EventsContext";
import { render } from "@fullcalendar/core/preact.js";



const testCal = ({localMonth, title, events}) => {
  
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

  // const monthsKeys =  [
  //     {str:"JANUARY", date:"2024-01"},
  //     {str:"FEBRUARY", date:"2024-02"},
  //     {str:"MARCH", date:"2024-03"},
  //     {str:"APRIL", date:"2024-04"},
  //     {str:"MAY", date:"2024-05"},
  //     {str:"JUNE", date:"2024-06"},
  //     {str:"JULY", date:"2024-07"},
  //     {str:"AUGUST", date:"2024-08"},
  //     {str:"SEPTEMBER", date:"2024-09"},
  //     {str:"OCTOBER", date:"2024-10"},
  //     {str:"NOVEMBER", date:"2024-11"},
  //     {str:"DECEMBER", date:"2024-12"},
  //   ]

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
      {/* <button onClick={()=>{
        
        // if localstorage.getItem(...) === 2024-01, disable prev button
        // if localstorage.getItem(...) === 2024-12, disable next button
      localStorage.setItem("localMonth", `${localStorage.getItem("localMonth")? monthsKeys[monthsKeys.indexOf(localStorage.getItem("localMonth"))-1] : monthsKeys[new Date().getMonth()-1]}`)
        window.location.reload()
       
        }}>previous</button>
      
      <button onClick={()=>{
        localStorage.setItem("localMonth", `${localStorage.getItem("localMonth")? monthsKeys[monthsKeys.indexOf(localStorage.getItem("localMonth"))+1] : monthsKeys[new Date().getMonth()+1]}`)
        window.location.reload()
        // setLocalMonth("2024-12")
        }}>next</button> */}
      {/* <h3>{monthTitle}</h3> */}
      
      {/* view month calendar */}
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        // initialDate={undefined}
        // initialDate={localStorage.getItem("localMonth")?localStorage.getItem("localMonth"): undefined }
        
        // headerToolbar={false}
        headerToolbar={{
          left: "title",
          center: "",
          right: "",
        }}

        dayHeaderFormat={{weekday:'narrow'}}
        titleFormat={{ month: "long" }}
        editable={true}
        selectable={true}
        fixedWeekCount={false}
        contentHeight={"30vh"}
      />
      {/* view month events as list */}
      <div>
        {events.map((event)=> <p>{event.title}</p>)}

      </div>
      
      {/* <FullCalendar
        plugins={[listPlugin]}
        initialView="listMonth"
        initialDate={localStorage.getItem("localMonth")?localStorage.getItem("localMonth"): undefined }

        headerToolbar={false}
        events={events}
        contentHeight={"30vh"}

        /> */}
    
    </>
  );
};

// const MonthList =()=> {
//   const {events}=useContext(EventsContext)

//   <button onClick={()=>{
        
//     // if localstorage.getItem(...) === 2024-01, disable prev button
//     // if localstorage.getItem(...) === 2024-12, disable next button

// localStorage.setItem("localMonth", `${localStorage.getItem("localMonth")? monthsKeys[monthsKeys.indexOf(localStorage.getItem("localMonth"))-1] : monthsKeys[new Date().getMonth()-1]}`)
//     window.location.reload()
//     // setLocalMonth("2024-12")
//     debugger
    
//     }}>previous</button>
  
//   <button onClick={()=>{
    
// localStorage.setItem("localMonth", "2024-11")
//     window.location.reload()
//     // setLocalMonth("2024-12")
//     debugger
    
//     }}>next</button>

//   return(
//     <FullCalendar

//     plugins={[dayGridPlugin]}
//     initialView="dayGridMonth"
//     // initialDate={undefined}
//     initialDate={localStorage.getItem("localMonth")?localStorage.getItem("localMonth"): undefined }
    
//     // headerToolbar={false}
//     headerToolbar={{
//       left: "title",
//       center: "",
//       right: "",
//     }}

//     events={events}

//     dayHeaderFormat={{weekday:'narrow'}}
//     titleFormat={{ month: "long" }}
//     editable={true}
//     selectable={true}
//     fixedWeekCount={false}
//     contentHeight={"30vh"}

//   />
//   )
 
// }

export default testCal