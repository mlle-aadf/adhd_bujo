import { NavContainer, DayLink, NavMonthYearCont, DayStr, MonthLink, YearLink  } from "./Styles";
import { useContext } from "react";
import { DayContext } from "../contexts/DayContext";

const NavBarMobile = () => {
    
    const {thisDayNum, thisDayStr, thisMonth, thisYear} = useContext(DayContext)
        
    return (
        <NavContainer>
            <DayLink to={'/day'}>{thisDayNum}</DayLink>
            <DayStr>{thisDayStr}</DayStr>

            <NavMonthYearCont>
                <MonthLink to={'/month'}>{thisMonth}</MonthLink>
                <YearLink to={'/year'}>{thisYear}</YearLink>
            </NavMonthYearCont>

        </NavContainer>
    );
};




export default NavBarMobile;