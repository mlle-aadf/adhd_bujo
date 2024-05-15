import { useContext } from "react";
import { DayContext } from "../contexts/DayContext";

import { DayBTN } from "./Styles";

const DayLink = () => {
    const {thisDayNum} = useContext(DayContext)

    return (
        <DayBTN to={'/day'}>{thisDayNum}</DayBTN>
    );
};

export default DayLink;