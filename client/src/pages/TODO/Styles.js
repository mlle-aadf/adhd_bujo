import { Link } from "react-router-dom";
import styled from "styled-components";
// TO-DO page styled components


// Completed.js
const CompletedContainer = styled.div`
    @media  (max-width: 500px) {
        display: flex;
        flex-direction: column;
        width: 75vw;
    }
    `
const CompletedTitle = styled.h3`
        
`

// Deleted.js
const DeletedContainer = styled.div`
    @media  (max-width: 500px) {
        display: flex;
        flex-direction: column;
        width: 75vw;
    }
    `
const DeletedTitle = styled.h3`
        
`

// Index.js
const TodoTitle = styled(Link)`
    text-decoration: none;
    color: white;
    
`
const TodoContainer = styled.div`
    @media  (max-width: 500px) {
        display: flex;
        flex-direction: column;
        width: 75vw;
    }
`

// NewTask.js
const NewTaskContainer = styled.div`
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
` 

const PriorityInputs = styled.div`
    width: 90%;
    height: fit-content;
    background-color: var(--faded);
    border: none;
    padding-left: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 50px;
`

const Desc = styled.input`
    background-color: transparent;
    color: white;
    border: none;
    width: 80%;
    height: 8vw;
    padding: 0 0.5rem;
`


const Importance = styled.div`
    background-color: white;
    /* height: 100%; */
    height: 8vw;
    width: 8vw;
    margin: 0 0.5rem;
    border-radius: 50%;
`

const Urgency = styled.div`
    background-color: white;
    border: none;
    height: 8vw;
    width: 8vw;
    border-radius: 50%;
`

const Add = styled.button`
    /* background-color: var(--faded); */
    color: white;
    /* height: 4vw; */
    height: fit-content;
    border: none;
    border-radius: 20px;
    margin-left: 1rem;
    font-size: 1.5rem;
    /* cursor: pointer; */
    display: flex;
    align-items: center;
`

// TaskList.js
const TasksContainer = styled.ul`
    list-style-type: none;
    color: white;
    margin: 0;
    padding: 0;
    /* font-size: 1.5rem; */
    `

const Task = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    height: fit-content;
    margin: -0.5rem 0;
`

const Tick = styled.li`
    align-items: start;
    align-self: center;
    height: 4vw;
    width: 4vw;
    margin-right: 1rem;
    border-radius: 5px;
    cursor: pointer;
`



//_______________________________________________________________
export {CompletedTitle, CompletedContainer, DeletedContainer, DeletedTitle, TodoTitle, TodoContainer, NewTaskContainer, PriorityInputs, Desc, Importance, Urgency, Add, TasksContainer, Task, Tick}