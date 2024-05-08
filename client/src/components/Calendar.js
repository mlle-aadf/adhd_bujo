// import { Component } from "react";

// // set start time to a day after current date
// const eventStartTime = new Date()
// eventStartTime.setDate(eventStartTime.getDay()+2)

// // set end time to a day and 45min after current date & time
// const eventEndTime = new Date()
// eventEndTime.setDate(eventEndTime.getDay() +2)
// eventEndTime.setMinutes(eventEndTime.getMinutes() +45)

// // create event
// const event ={
//     summary : 'Meeting with Mr.Krabs',
//     // location : 'Krusty Krab',
//     description : 'Plan surprise party for Squidward',
//     start : {
//         dateTime: eventStartTime,
//         timeZone: 'America/Montreal'
//     },
//     end: {
//         dateTime: eventEndTime,
//         timeZone: 'America/Montreal'
//     },
//     colorId: 1 // - 11 > https://github.com/CamSkiTheDev/Google-Calendar-NodeJS-App
// }
import { useContext } from "react";
import { DayContext } from "../contexts/DayContext";


const Calendar = () => {
        
    const {thisDayNum, thisDayStr, thisMonth, thisYear} = useContext(DayContext)

    return (
    <>
        <p>{thisDayNum} | {thisDayStr}<br/>{thisMonth} {thisYear}</p>
        {/* <button id="authorize_button" onclick="handleAuthClick()">HELLO</button>
        <button id="signout_button" onclick={handleSignoutClick}>Sign Out</button> */}
        <pre id="content" style={{whiteSpace: "pre-wrap"}}></pre>
    </>        

        
        // <SimpleReactCalendar 
        //     activeMonth={new Date()}
        // />

        // <div style={{display:"flex", alignItems:"center", justifyContent:"center", height:"100vh"}}>
        //     <iframe src="https://calendar.google.com/calendar/embed?src=mlle.twiggy%40gmail.com&ctz=America%2FToronto" style={CalStyle}></iframe>
        // </div>
        
    );
};

export default Calendar;

// const CalStyle = {
//     border: "0",
//     width:"95vw",
//     height:"75vh",
//     frameborder:"0"
// }