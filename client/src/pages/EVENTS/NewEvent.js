import styled from "styled-components";
import { FaPlus } from "react-icons/fa6";
import { FaSave } from "react-icons/fa";

// import Modal from "react-modal"
import { useState, useContext } from "react";
import { Collapse } from "react-collapse";
import Datetime from 'react-datetime';
import { EventsContext } from "../../contexts/EventsContext";
const { v4: uuidv4 } = require('uuid');

const NewEvent = () => {
    
    // const [isOpened, setIsOpened] = useState(false)
    const [startOpened, setStartOpened] = useState(false)


    // const [endOpened, setEndOpened] = useState(false)

    const [newEvent, setNewEvent] = useState({
        _id:"prev id",
        title: "prev title",
        description: "",
        start: "",
        // start: "2024-05-26",
        end:""
    })

    // // set event title
    // const handleTitle =(e) => {
    //     setNewEvent({...newEvent, title: e.target.value})
    //     // console.log("title: ", newEvent)
    // }
    
    // // set event description
    // const handleDesc =(e) => {
    //     setNewEvent({...newEvent, description: e.target.value})
    // }


    const {addNewEvent} = useContext(EventsContext)
    
    const setStartHandler = (e) => {
        // const start = new Date(e.target.value)
        setNewEvent({...newEvent, start: e.target.value})
        console.log("start: ", newEvent.start)
    }

    const saveEventHandler = () => {
        addNewEvent(newEvent)
        // setIsOpen(!modalIsOpen)
        // console.log("saveEventHandler: ", newEvent)
    }

// list event onClick => toggles display NewEventCont option={"createEvent"} /  NewEventCont option={"updateEvent"}
//

    return (
        
        // return form to create a new event
        // inputs are blank
        
        // return form for updating existing event
        // inputs are pre-filled from event
        <>
            {/* {option === "createEvent" ? */}
            <NewEventCont>
                {/* <Modal
                    isOpen={modalIsOpen}
                    style={ModalStyle}
                    // onAfterOpen={afterOpenModal}
                    // onRequestClose={closeModal}
                    <NewBTN onClick={()=>setIsOpen(!modalIsOpen)}>+</NewBTN>
                > */}
                {/* <NewBTN onClick={()=>setIsOpened(!isOpened)}>+</NewBTN> */}
                {/* <Collapse isOpened={isOpened}> */}
                    <EventTitle type="text" placeholder={"title"} onChange={(e)=>setNewEvent({...newEvent, title: e.target.value})} required/>
                    {/* <EventTitle type="text" placeholder="title" onChange={handleTitle} required/> */}
                    <EventDesc type="text" placeholder="description" onChange={(e)=>setNewEvent({...newEvent, description: e.target.value})}/>
                    {/* <EventDesc type="text" placeholder="description" onChange={handleDesc}/> */}
                    <StartCont>
                        {/* <Collapse isOpened={startOpened}> */}
                            {/* <Datetime
                                dateFormat={"YYYY-MM-DD"}
                                closeOnSelect={true}
                                // input={false}
                                timeFormat={false}
                                inputProps={{placeholder:'start'}}
                            /> */}
                        {/* </Collapse> */}
                        <label onClick={()=> setStartOpened(!startOpened)}>start</label>
                        <Start type="datetime-local" required onChange={setStartHandler}/>
                        {/* <StartTime type="time"/> */}
            
                    </StartCont>
                    <EndCont>
                        <label onClick={()=> setStartOpened(!startOpened)}>end</label>
                        <End type="datetime-local" onChange={(e)=>setNewEvent({...newEvent, end: e.target.value})} min={new Date(newEvent.start)}></End>
                    </EndCont>
                    {/* <div>
                        <label onClick={()=> setEndOpened(!endOpened)} >end</label>
                        <Collapse isOpened={endOpened}>
                            <Datetime dateFormat={"YYYY-MM-DD"}/>
                        </Collapse>
                    </div> */}
                    <SaveBTN onClick={saveEventHandler}><SaveIcon>save</SaveIcon></SaveBTN>
                    {/* <SaveBTN onClick={saveEventHandler}><SaveIcon/></SaveBTN> */}
                {/* </Collapse> */}
                {/* </Modal> */}
            </NewEventCont>
            {/* : <p>hello</p>} */}
            {/* <EditEventCont>
                
            </EditEventCont> */}
        </>
    );
};


export default NewEvent;


const NewEventCont = styled.div`
    background-color: transparent;
    border: 1px solid var(--faded);
    /* background-color: var(--faded); */
    margin-top: 0.5rem;
    /* border-radius: 10px; */
    width: 100%;
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
`

// const NewBTN = styled(FaPlus)`
//     width: 2rem;
//     font-size: 2rem;
//     border: 2px solid fuchsia;
//     display: flex;
//     align-items: center;
//     justify-content: center;
// `
const EventTitle = styled.input`
    background-color: transparent;
    color: white;
    border: none;
    border-bottom: 1px solid var(--faded);
    font-family: "Montserrat";
    /* border-radius: 50px; */
    padding: 0.5rem;
    /* width: 90%; */
    font-size: 1rem;

    &:focus{
        outline: 1px solid white;
    }
    
    `
const EventDesc = styled.textarea`
    background-color: transparent;
    color: white;
    border: none;
    font-size: 1rem;
    font-family: "Montserrat";
    /* border-radius: 50px; */
    padding: 0.5rem 1rem;
    /* border: 1px solid var(--faded); */
    /* padding: 0.5rem 0  0.5rem 1rem ; */
    width: 90%;
    min-height: 4rem;
    height: fit-content;
    overflow-wrap: break-word;
    &:focus{
        outline: 1px solid white;
    }
`

const StartCont = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const Start = styled.input`
    background-color: transparent;
    color: white;
    border: none;
    /* border-bottom: 1px solid white; */
    font-family: "Montserrat";
    /* border-radius: 50px; */
    padding: 0.5rem;
    /* width: 90%; */
    font-size: 0.75rem;
    &:focus{
        outline: 1px solid var(--faded);
    }
    `

const StartTime = styled.input`
    background-color: var(--faded);
    color: white;
    border: none;
`
const Time = styled.option`
    background-color: var(--faded);
    color: white;
    border: none;
`

const EndCont = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const End = styled.input`
    background-color: transparent;
    color: white;
    border: none;
    /* border-bottom: 1px solid white; */
    font-family: "Montserrat";
    /* border-radius: 50px; */
    padding: 0.5rem;
    /* width: 90%; */
    font-size: 0.75rem;
    &:focus{
        outline: 1px solid var(--faded);
    }
`
const SaveBTN = styled.div`

width:90%;
border-radius: 5px;
border: none;
color: white;
/* padding: 0.25rem 0.75rem; */
/* margin:0.5rem 1rem 1rem 1rem; */
display: flex;
align-items: center;
justify-content: right;
/* outline: 1px solid var(--faded); */
background-color: transparent;
`

// const SaveIcon = styled(FaSave)`
//     font-size: 1.25rem;
//     margin: 1rem 0;
//     &:hover{
//         color: var(--mint);
//         /* background-color: var(--faded); */
//         cursor: pointer;
//         scale: 115%;
//         }

// `
const SaveIcon = styled.p`
    font-size: 1.25rem;
    margin: 0.5rem 0 1rem 0;
    &:hover{
        color: var(--mint);
        /* background-color: var(--faded); */
        cursor: pointer;
        scale: 115%;
        }

`



// const AddIcon = styled(FaPlus)`
//   font-size: 1rem;
//   padding: 0.25rem 0.1rem;
// `;