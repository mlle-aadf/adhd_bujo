import { createContext, useState } from "react";


export const DayContext = createContext();


const DayContextProvider = ({ children }) => {

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const day = new Date().toLocaleDateString('en-US', options);  

    
    const [today, setToday] = useState(day);



  return (
    <DayContext.Provider value={{today}}>
      {children}
    </DayContext.Provider>
  );
};

export default DayContextProvider;
