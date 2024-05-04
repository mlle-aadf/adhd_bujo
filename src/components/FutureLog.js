import { months } from "../data";
import { DayContext } from "../contexts/DayContext";
import { useContext } from "react";

import Calendar from "./Calendar";


const FutureLog = () => {
    const {today} = useContext(DayContext)

    console.log(today)

    return (
        <>
            <div>
                {months.map((month) => <p>{month}</p>)}
            </div>
            <Calendar />
        </>

    );
};

export default FutureLog;