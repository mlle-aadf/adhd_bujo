import { createContext } from "react";


export const DayContext = createContext();


const DayContextProvider = ({ children }) => {
    const months =  ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    // .toLocaleDateString('en-US', options);  
    const currentDate = new Date()

    const thisDayNum = currentDate.getDate()
    const thisDayStr = days[currentDate.getDate()]
    const thisMonth = months[currentDate.getMonth()];
    const thisYear = currentDate.getFullYear();

    
      // month: currentMonth,
      // year: currentYear
      // }

    // const [today, setToday] = useState(
    //   );



  return (
    <DayContext.Provider value={{thisDayNum, thisDayStr, thisMonth, thisYear}}>
      {children}
    </DayContext.Provider>
  );
};

export default DayContextProvider;
