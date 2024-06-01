import styled from "styled-components";
import { FaRegSquare  } from "react-icons/fa6";
import { MdModeEditOutline } from "react-icons/md";

import { DayCont, DayBTN, Date, MonthYearCont, MonthLink, YearLink, TasksLink, NotesLink, Hello } from "./Styles";

import { DayContext } from "../../contexts/DayContext";
import { useContext } from "react";

const Home = () => {
    
    const {thisDayNum, thisDayStr, thisMonth, thisYear} = useContext(DayContext)

    return (
        <HomeCont>

            <DayCont>
                <DayBTN to={"/day"}>{thisDayNum}</DayBTN>
                <Date >{thisDayStr}</Date>
         
                <MonthYearCont>
                    <MonthLink to={'/month'}>{thisMonth}</MonthLink>
                    <YearLink to={'/year'}>{thisYear}</YearLink>
                </MonthYearCont>
            </DayCont>
            
            <Cont>

                <div>
                    <TasksLink style={{paddingRight:"0.5rem"}} to={"/todo"}>
                        <FaRegSquare />
                    </TasksLink>
                    <NotesLink style={{paddingLeft:"0.5rem"}} to={"/notes"}>
                        <MdModeEditOutline />
                    </NotesLink>
                </div>
                

                {/* <TodoLink/> */}
                <Hello>hello ٩(◕‿◕)۶</Hello>


            </Cont>

        </HomeCont>
    );
};

export default Home;

const HomeCont = styled.div`
    @media  (max-width: 500px) {
        height: 100vh;
        width:100vw;
        /* display:flex;
        flex-direction: column; */
        display: grid;
        grid-template: 30% 25% 45% / repeat(4, 1fr)
        /* grid-area: 1 / 2 / span 1 / span 3;
        align-self: center; */
    }
    /* border: 1px solid lightpink; */
`

const Cont = styled.div`
    grid-area: 3 / 2 / span 1 / span 2;
    /* border: 2px solid fuchsia; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
`
