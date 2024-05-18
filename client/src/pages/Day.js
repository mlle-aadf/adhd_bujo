import NavBar from "../components/NavBarMobile";
import Priorities from "../components/Priorities";
import ToDo from "./TODO/ToDo";
import HomeLink from "../components/HomeLink";

const Day = () => {
    return (
        <div>
            <NavBar/>
            <Priorities/>
            <ToDo/>
            <HomeLink/>
        </div>
    );
};



export default Day;