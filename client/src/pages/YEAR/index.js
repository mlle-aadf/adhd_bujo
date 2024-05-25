import NavBarMobile from "../../components/NavBarMobile"
import YearCal from "./YearCal";
import HomeLink from "../../components/HomeLink";

const Year = () => {
    
    // const monthsKeys =  [
    //     {str:"JANUARY", date:"2024-01"},
    //     {str:"FEBRUARY", date:"2024-02"},
    //     {str:"MARCH", date:"2024-03"},
    //     {str:"APRIL", date:"2024-04"},
    //     {str:"MAY", date:"2024-05"},
    //     {str:"JUNE", date:"2024-06"},
    //     {str:"JULY", date:"2024-07"},
    //     {str:"AUGUST", date:"2024-08"},
    //     {str:"SEPTEMBER", date:"2024-09"},
    //     {str:"OCTOBER", date:"2024-10"},
    //     {str:"NOVEMBER", date:"2024-11"},
    //     {str:"DECEMBER", date:"2024-12"},
    // ]
    
    return (
        <>
            <NavBarMobile/>
            <YearCal/>
            <HomeLink/>
        </>
            
    );
};

export default Year;