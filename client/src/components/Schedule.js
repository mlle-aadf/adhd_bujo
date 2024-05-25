import { FaAngleRight } from "react-icons/fa6";
import styled from "styled-components";

import { useState } from "react";
import { Collapse } from "react-collapse";
import DayList from "./DayList";


const Schedule = () => {
    const [isOpened, setIsOpened] = useState(false)
    
    return (
        <div>
            <ScheduleTitleCont>
                <SchedIcon onClick={()=>setIsOpened(!isOpened)} style={isOpened ? ClickedStyled : UnClickedStyled}/>
                <ScheduleTitle>SCHEDULE</ScheduleTitle>
            </ScheduleTitleCont>
            <Collapse isOpened={isOpened}>
                <ScheduleContainer><DayList/></ScheduleContainer>
            </Collapse>
        </div>
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

const ScheduleTitleCont = styled.div`
  /* text-decoration: none;
  color: white; */

  @media (max-width: 500px) {
    display: flex;
    width: 75vw;
    align-items: center;
    margin: 1rem 0;
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
    margin: 0.5rem 0;
  }
`;

const ScheduleContainer = styled.div`
    background-color: var(--faded);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 0.5rem 1rem;
    /* line-height: 1rem; */
`