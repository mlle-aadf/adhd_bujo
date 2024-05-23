import { createContext, useState } from "react";

export const DayContext = createContext();

const DayContextProvider = ({ children }) => {
    const months =  ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"]
    const days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];

    const currentDate = new Date()

    const thisDayNum = currentDate.getDate()
    const thisDayStr = days[currentDate.getDay()]
    const thisMonth = months[currentDate.getMonth()];
    const thisYear = currentDate.getFullYear();

  return (
    <DayContext.Provider value={{thisDayNum, thisDayStr, thisMonth, thisYear, months}}>
      {children}
    </DayContext.Provider>
  );
};

export default DayContextProvider
;
