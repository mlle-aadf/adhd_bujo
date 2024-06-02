// component styles
import styled from "styled-components";
import { Link } from "react-router-dom"
import { FaRegStar } from "react-icons/fa";


// Home.js
const DayCont = styled.div`
    /* grid-area: 2 / 2 / span 1 / span 2; */
    grid-area: 2 / 2 / span 1 / span 2;
    display: flex;
    flex-direction: column;
    /* align-content: start; */
    justify-content: space-around;
    text-align: right;
    /* padding-right: 0.5rem; */
    padding-bottom: 2rem;
    border: none;
    border-bottom: 1px solid white;
`

const DayBTN = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: 6rem;
    color: white;
    
    &:active{
      color: var(--pink);
    }
    &:hover{
      color: var(--pink);
    }
    /* margin-bottom: -1rem; */
    
    /* text-align: ; */
    /* border: 2px solid fuchsia; */
    /* width: 100vw; */

`

const Date = styled.h2`
    color: white;
    font-size: 2.25rem;
    margin-top: -0.5rem;
    &:active{
      color: var(--blue);
    }
    &:hover{
      color: var(--blue);
    }
` 

const MonthYearCont = styled.div`
    margin-top: -1rem;
    text-align: right;
    /* border: 1px solid lightpink; */

`

const MonthLink = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: 1.5rem;

    &:active{
      color: var(--priority1);
    }
    &:hover{
      color: var(--priority1);
    }
`

const YearLink = styled(Link)`
  color: white;
    @media  (max-width: 500px) {
        text-decoration: none;
        /* color: white; */
        font-size: 1.5rem;
        margin-left: 0.5rem;
    
    }
    &:active{
      color: var(--mint);
    }
    &:hover{
        color: var(--mint);
    }
`

const TasksLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 2rem;

  &:hover{
    color: var(--mint);
  }
  &:active{
    color: var(--mint);
  }
`

const NotesLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 2rem;

  &:hover{
    color: var(--purple);
  }
  &:active{
    color: var(--purple);
  }
`

const Hello = styled.p`
    /* grid-area: 3 / 2 / span 1 / span 2;
    /* border: 2px solid fuchsia; */
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: end; */
    /* padding-bottom: 1rem;  */
    /*flex-direction: row; */
`


// HomeBTN.js
const HomeLink = styled(Link)`
  /* border: 2px solid fuchsia; */

    @media  (max-width: 500px) {
        text-decoration: none;
        background-color: black;
        border-radius: 30px;
        color: white;
        padding: 0.25rem;
        text-align: center;
        margin: 0 auto;
        /* position: fixed; */
        /* width: 100%; */
        bottom: 2%;
        /* right: 40%; */
        &:hover{
            color: var(--blue)
        }
    }
`

const Footer = styled.div`
  width: 100%;
  position: fixed;
  bottom:0%;
  left:0%;
  height: 2rem;
  display: flex;
  align-items: center;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.7) 50%,
    rgba(0, 0, 0, 0.5) 75%,
    rgba(0, 0, 0, 0.2) 90%,
    rgba(0, 0, 0, 0.1) 100%
  );
  /* margin-left: -2.5rem; */
  /* border: 2px solid aqua; */
`

// NavBarMobile.js
const NavContainer = styled.div`
    @media  (max-width: 500px) {
        height: 6rem;
        width: 75vw;
        margin: 2.5rem auto 0.5rem auto;
        display: grid;
        grid-template: 3rem 3rem / auto auto auto auto;
        border-bottom: 2px solid white;

        /* border: 2px solid fuchsia; */
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

    &:hover{
        color: var(--blue);
    }

`

const DayStr = styled.p`
    color: white;
    font-size: 1.75rem;
    
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



// Priorities.js
const PrioritiesContainer = styled.div`
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    width: 75vw;
    height: fit-content;
    /* margin-top: 1rem; */
  }
`;

const PrioriTitleCont = styled.div`

  @media (max-width: 500px) {
    display: flex;
    width: 75vw;
    align-items: center;
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
  }
`;

const PrioritiesList = styled.div`
    background-color: var(--faded);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: start;
    /* margin-top: -1rem; */
    margin: -1rem auto 0.5rem auto;
    padding: 0.5rem 1rem;
    /* line-height: 1rem; */

   
`

// // TodoLink.js
// const TasksLink = styled(Link)`
//   text-decoration: none;
//   color: white;
//   font-size: 2rem;
// `

export {DayCont, DayBTN, Date, MonthYearCont, HomeLink, Footer, NavContainer, DayLink, NavMonthYearCont, DayStr, MonthLink, TasksLink, NotesLink, YearLink, Hello, PrioritiesContainer, PrioriTitleCont, StarIcon, PriorityTitle, PrioritiesList}