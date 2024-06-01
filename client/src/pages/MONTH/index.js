import NavBarMobile from "../../pages/HOME/NavBarMobile"
import MonthCal from "./MonthCal";
import HomeLink from "../HOME/HomeBTN";

import { useContext } from "react";
import { DayContext } from "../../contexts/DayContext";
import { EventsContext } from "../../contexts/EventsContext"

const Month = () => {

    const {thisMonthNum}= useContext(DayContext)
    const {monthsKeys, events} = useContext(EventsContext)

    return(
        <>
            <NavBarMobile/>
            <MonthCal localMonth={monthsKeys[thisMonthNum].date} eventList={events} title={true}/>
            <HomeLink/>
        </>

    )
}

export default Month