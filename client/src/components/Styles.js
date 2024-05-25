// component styles
import styled from "styled-components";
import { Link } from "react-router-dom"
import { FaRegStar } from "react-icons/fa";


// DayLink.js
const DayBTN = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: 5rem;
`

// HomeLink.js
const HomeBTN = styled(Link)`
    @media  (max-width: 500px) {
        text-decoration: none;
        background-color: var(--faded);
        border-radius: 30px;
        color: white;
        padding: 0.25rem;
        text-align: center;
        position: fixed;
        width: 20%;
        bottom: 5%;
        right: 40%
    }
`

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

// Priorities.js
const PrioriTitleCont = styled.div`
  /* text-decoration: none;
  color: white; */

  @media (max-width: 500px) {
    display: flex;
    width: 75vw;
    align-items: center;
    margin: 1.5rem 0 0.5rem 0;
    font-size: 2rem;
  }
`;

const StarIcon = styled(FaRegStar)`
  margin-right: 1rem;
  font-size: 2rem;
`;

const PriorityTitle = styled.h3`
  color: white;

  @media (max-width: 500px) {
    font-size: 2rem;
    margin: 0.5rem 0;
  }
`;

const PrioritiesContainer = styled.div`
    background-color: var(--faded);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 0.5rem 1rem;
    /* line-height: 1rem; */
`

// TodoLink.js
const TasksLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 2rem;
`

export {DayBTN, HomeBTN, NavContainer, DayLink, NavMonthYearCont, DayStr, MonthLink, TasksLink, YearLink, PrioriTitleCont, StarIcon, PriorityTitle, PrioritiesContainer}