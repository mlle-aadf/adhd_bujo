import styled from "styled-components";
import { FaPlus } from "react-icons/fa6";
import { FaSave } from "react-icons/fa";

// import Modal from "react-modal"
import { useState, useContext, useEffect } from "react";
import { Collapse } from "react-collapse";
import Datetime from "react-datetime";
import { EventsContext } from "../../contexts/EventsContext";
const { v4: uuidv4 } = require("uuid");

const NewEvent = () => {
  // input content {blank values}

  // input content {clicked event object}

  // const [isOpened, setIsOpened] = useState(false)
  const { addNewEvent } = useContext(EventsContext);
  const [startOpened, setStartOpened] = useState(false);
  const [buttonMessage, setButtonMessage] = useState("save");

  // const [endOpened, setEndOpened] = useState(false)

  const [newEvent, setNewEvent] = useState({
    _id: uuidv4(),
    title: "",
    description: "",
    start: undefined,
    // start: "2024-05-26",
    end: "",
  });

  // disable "save" button if no title or start date
  const [allCompleted, setAllCompleted] = useState(false);

  const checkCompletion = () => {
    const hasTitle = newEvent.title.length > 0;
    const hasStart = newEvent.start !== undefined && newEvent.start !== "" ;
    const complete = hasTitle && hasStart;
    

    setAllCompleted(complete);
    console.log("allCompleted? : ", complete, allCompleted);
    
    (()=> complete===true ? true : false)()
  };

  useEffect(() => {
    checkCompletion();
  }, [newEvent]);



  const setStartHandler = (e) => {
    // console.log("start: ",e.target.value)
    setNewEvent({ ...newEvent, start: e.target.value });
  };

  const setEndHandler = (e) => {
    // console.log("start: ",e.target.value)
    setNewEvent({ ...newEvent, start: e.target.value });
  };


  const saveEventHandler = () => {
    setButtonMessage("saving...")
    addNewEvent(newEvent);
    console.log("saveEventHandler: ", newEvent);
  };

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
  
        {/* SETS newEvent STATE TO USER INPUT*/}
   
        <EventTitle
          type="text"
          placeholder={"title"}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
          required
        />
        {/* <EventTitle type="text" placeholder="title" onChange={handleTitle} required/> */}
        <EventDesc
          type="text"
          placeholder="description"
          onChange={(e) =>
            setNewEvent({ ...newEvent, description: e.target.value })
          }
        />
        {/* <EventDesc type="text" placeholder="description" onChange={handleDesc}/> */}
        <StartCont>
          <label onClick={() => setStartOpened(!startOpened)}>start</label>
          <StartDate type="date" required onChange={setStartHandler} />
          <StartTime type="time" onChange={setStartHandler} />
        </StartCont>
        <EndCont>
          <label onClick={() => setStartOpened(!startOpened)}>end</label>
          <EndDate type="date" required onChange={setEndHandler} />
          <EndTime type="time" onChange={setEndHandler} />
          {/* <End
            type="datetime-local"
            onChange={(e) => setNewEvent({ ...newEvent, end: e.target.value })}
            min={new Date(newEvent.start)}
          ></End> */}
        </EndCont>
        {/* if allCompleted = false disable, else enable */}
        <SaveBTNCont>
            <SaveBTN
                disabled={false }
                // disabled={allCompleted === true ? false : true}
                onClick={saveEventHandler}
                style={allCompleted === true ? EnabledStyle : DisabledStyle }
            >
              <SaveIcon>{buttonMessage}</SaveIcon>
            </SaveBTN>
        </SaveBTNCont>
      </NewEventCont>
    </>
  );
};

export default NewEvent;

const NewEventCont = styled.form`
  background-color: transparent;
  border: 1px solid var(--faded);
  /* background-color: var(--faded); */
  margin-top: 0.5rem;
  /* border-radius: 10px; */
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

`;

// const NewBTN = styled(FaPlus)`
//     width: 2rem;
//     font-size: 2rem;
//     border: 2px solid fuchsia;
//     display: flex;
//     align-items: center;
//     justify-content: center;
// `
const EventTitle = styled.input`
  background-color: var(--faded);
  color: white;
  border: none;
  /* border-bottom: 1px solid var(--faded); */
  font-family: "Montserrat";
  /* border-radius: 50px; */
  padding: 0.5rem;
  /* width: 90%; */
  font-size: 1rem;

  &:focus {
    outline: 1px solid white;
  }
`;
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
  &:focus {
    outline: 1px solid white;
  }
`;

const StartCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const StartTime = styled.input`
  background-color: transparent;
  color: white;
  border: none;
  /* border-bottom: 1px solid white; */
  font-family: "Montserrat";
  /* border-radius: 50px; */
  padding: 0.5rem;
  /* width: 90%; */
  font-size: 0.75rem;
  &:focus {
    outline: 1px solid var(--faded);
  }
`;

const StartDate = styled.input`
  background-color: var(--faded);
  width: 30%;
  margin: 0;
  color: white;
  border: none;
`;


const EndCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  `;

const EndDate = styled.input`
  background-color: var(--faded);
  width: 30%;
  margin: 0;
  color: white;
  border: none;
`;

const EndTime = styled.input`
  background-color: transparent;
  color: white;
  border: none;
  /* border-bottom: 1px solid white; */
  font-family: "Montserrat";
  /* border-radius: 50px; */
  padding: 0.5rem;
  /* width: 90%; */
  font-size: 0.75rem;
  &:focus {
    outline: 1px solid var(--faded);
  }
`;

const SaveBTNCont = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
`

const SaveBTN = styled.button`
  width: fit-content;
  height: 2rem;
  border-radius: 5px;
  border: none;
  margin:0.5rem 1rem 1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: right;
  /* outline: 1px solid var(--faded); */
  background-color: transparent;
`;

const DisabledStyle = {
    color:"var(--faded)",
    backgroundColor: "transparent",
    // cursor: "not-allowed"
}

const EnabledStyle = {
    color:"var(--mint)",
    cursor: "pointer"

}

const ErrorStyle = {
    border:"1px solid var(--priority3)"
}



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
  
  /* &:hover {
    color: var(--mint);
    background-color: var(--faded);
    cursor: pointer;
    scale: 115%;
  } */
`;

// const AddIcon = styled(FaPlus)`
//   font-size: 1rem;
//   padding: 0.25rem 0.1rem;
// `;
