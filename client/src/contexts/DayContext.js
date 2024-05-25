import { createContext, useState } from "react";

export const DayContext = createContext();

const DayContextProvider = ({ children }) => {
    // const months =  [
    //   {str:"JANUARY", date:"2024-01"},
    //   {str:"FEBRUARY", date:"2024-02"},
    //   {str:"MARCH", date:"2024-03"},
    //   {str:"APRIL", date:"2024-04"},
    //   {str:"MAY", date:"2024-05"},
    //   {str:"JUNE", date:"2024-06"},
    //   {str:"JULY", date:"2024-07"},
    //   {str:"AUGUST", date:"2024-08"},
    //   {str:"SEPTEMBER", date:"2024-09"},
    //   {str:"OCTOBER", date:"2024-10"},
    //   {str:"NOVEMBER", date:"2024-11"},
    //   {str:"DECEMBER", date:"2024-12"},
    // ]
    
    const months = ["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER", "NOVEMBER","DECEMBER"]

    const days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];

    const currentDate = new Date()

    const thisDayNum = currentDate.getDate()
    const thisDayStr = days[currentDate.getDay()]
    const thisMonth = months[currentDate.getMonth()];
    const thisMonthNum = currentDate.getMonth();
    const thisYear = currentDate.getFullYear();

  return (
    <DayContext.Provider value={{thisDayNum, thisDayStr, thisMonth, thisMonthNum, thisYear, months}}>
      {children}
    </DayContext.Provider>
  );
};

export default DayContextProvider
;
