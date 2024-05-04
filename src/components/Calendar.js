// import { Component } from "react";
import SimpleReactCalendar from 'simple-react-calendar'

const Calendar = () => {
    return (
        <SimpleReactCalendar 
            activeMonth={new Date()}
        />
    );
};

export default Calendar;