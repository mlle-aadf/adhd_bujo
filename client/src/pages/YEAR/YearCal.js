import styled from "styled-components";

import {Collapse} from 'react-collapse';
// import { useCollapse } from 'react-collapsed';
import { useContext, useState } from "react";
// import { DayContext } from "../../contexts/DayContext";
import { EventsContext } from "../../contexts/EventsContext"

import MonthCal from "../MONTH/MonthCal";

const YearCal = () => {
    
    const {monthsKeys, events}=useContext(EventsContext)
    // console.log("monthkeys: ", events)

    
    // const {months} = useContext(DayContext)
    // console.log("months: ", months)


    const [monthExpanded, setMonthExpanded] = useState([true, true, true, true, true, true, true, true, true, true, true, true])

    const collapseHandler = (i) => {
        const updated = monthExpanded.map((bool, index) => i === index ? !bool : bool )
        setMonthExpanded(updated)
    }

    return (
        


        <>
          {monthsKeys.map((month, i) => 
            <div>
                <h2 onClick={()=> collapseHandler(i)}>{month.str}</h2>
                <Collapse isOpened={monthExpanded[i]}>
                    <MonthCal localMonth={month.date} title={""} eventList={month.events} />
                </Collapse>
            </div>
          )
          }
            {/* {monthsKeys.map((month, i)=> {
                <div>
                    <h2>{month.str}</h2>
                    <Collapse isOpened={monthExpanded[i]}>
                        <MonthCal localMonth={month.date} title={""} eventList={events} />
                    </Collapse>
                </div>


            })} */}


            {/* <h2>{monthsKeys[0].str}</h2>
            <Collapse isOpened={monthExpanded[0]}>
                <MonthCal localMonth={monthsKeys[0].date} title={monthsKeys[0].str} eventList={events} />
            </Collapse> */}

            {/* <MonthCal localMonth={monthsKeys[4].date} title={monthsKeys[4].str} eventList={events} /> */}
        </>



        
        //    <div>
        //      {months.map((month)=> 
        //         <MonthAll>
        //             <h3 style={{color:"white"}} {...getToggleProps({onClick:clickHandler})}>{month}</h3>
        //             <div {...getCollapseProps()}>
        //                 <MonthCal />
        //             </div>

        //         </MonthAll>
                
        //      )}
        //    </div>



    );
};

export default YearCal;

const MonthAll = styled.div`
`