// component styles
import styled from "styled-components";
import { Link } from "react-router-dom"

// NavBarMobile.js
const NavContainer = styled.div`
    @media  (max-width: 500px) {
        height: 6rem;
        display: grid;
        grid-template: 3rem 3rem / auto auto auto auto;
        border-bottom: 2px solid white;
    }
`

const DayLink = styled(Link)`
    text-decoration: none;
    text-align: right;
    color: white;
    font-size: 5rem;
    align-self: center;
    margin: 0 0.5rem 0.75rem 0;
    width: 90%;
    
    @media  (max-width: 500px) {
        grid-column: 1 / span 1;
        grid-row: 1 / span 2;
    } 
`

const DayStr = styled.p`
    color: white;
    font-size: 2rem;
    
    @media  (max-width: 500px) {
        grid-area: 1 / 2 / span 1 / span 3;
        align-self: center;
    }
`

const NavMonthYearCont = styled.div`
    grid-area: 2 / 2 / span 1 / span 3;
    align-self: start;
    justify-content: space-between;
`

const MonthLink = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: 1.5rem;
    `
const YearLink = styled(Link)`

    @media  (max-width: 500px) {
        text-decoration: none;
        color: white;
        font-size: 1.5rem;
        margin-left: 0.5rem;
    
    }
`

export {NavContainer, DayLink, NavMonthYearCont, DayStr, MonthLink, YearLink}