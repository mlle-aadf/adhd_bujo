import { FaAngleRight } from "react-icons/fa6";
import styled from "styled-components";

import { useContext, useState } from "react";
import { Collapse } from "react-collapse";
import { EventsContext } from "../../contexts/EventsContext";
import DayList from "./DayList";
// import NewEvent from "./NewEvent";


const Schedule = () => {
    const [isOpened, setIsOpened] = useState(false)
    const {events} = useContext(EventsContext)
    
    return (
        <ScheduleContainer onClick={()=>setIsOpened(!isOpened)}>
            <ScheduleTitleCont>
                <SchedIcon style={isOpened ? ClickedStyled : UnClickedStyled}/>
                <ScheduleTitle>SCHEDULE</ScheduleTitle>
            </ScheduleTitleCont>
            {/* <NewEvent/> */}
            <Collapse isOpened={isOpened}>
              <DayList eventList={events}/>
            </Collapse>
        </ScheduleContainer>
    );
};

export default Schedule;


const ClickedStyled = {
    color:"var(--priority3)",
    transform: "rotate(90deg)"
}

const UnClickedStyled = {
    color:"white", 
}

const ScheduleContainer = styled.div`
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    width: 75vw;
  }
`;

const ScheduleTitleCont = styled.div`
  @media (max-width: 500px) {
    display: flex;
    width: 75vw;
    align-items: center;
    font-size: 2rem;
  }
`;

const SchedIcon = styled(FaAngleRight)`
  margin-right: 1rem;
  font-size: 2rem;
`;

const ScheduleTitle = styled.h3`
  color: white;

  @media (max-width: 500px) {
    font-size: 2rem;
  }
`;

