import NavBarMobile from "../../components/NavBarMobile"
import MonthCal from "./MonthCal";
import MonthList from "./MonthList";
import HomeLink from "../../components/HomeLink";

const Month = () => {

    // let chosenMonth = "2024-01"

    return(
        <>
            <NavBarMobile/>
            <MonthCal />
            {/* <MonthList/> */}
            <HomeLink/>
        </>

    )
}

export default Month