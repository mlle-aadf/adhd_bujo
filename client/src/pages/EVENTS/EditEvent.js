import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import { EventsContext } from "../../contexts/EventsContext";

const EditEvent = ({event, isOpened, setIsOpened}) => {
  
    const {updateEvent} = useContext(EventsContext)

    const {_id, title, description, start, end} = event

    const [buttonText, setButtonText]=useState("save")

       const [eventUpdate, setEventUpdate] = useState({
        _id: _id,
        title: title,
        description: description,
        start: start,
        end: end
    })

    const [allCompleted, setAllCompleted] = useState(false)
    const checkCompletion = () => {
        const hasTitle = eventUpdate.title.length > 0
        const hasStart = eventUpdate.start.length !== 0 || eventUpdate.start === undefined
        const complete = hasTitle && hasStart
        setAllCompleted(complete)
    }

    useEffect(()=> {
      checkCompletion()
    }, [eventUpdate])

    const [startValue, setStartValue]=useState(eventUpdate.start)
    const [endValue, setEndValue]=useState(eventUpdate.end)

    const setTimeHandler = (e, opt) => {
        if (opt === "start") {
            setStartValue(e.target.value)
            setEventUpdate({...eventUpdate, start: e.target.value})
            // if (e.target.value==="") {
            //     setAllCompleted(false)
            // }
        } else if (opt === "end"){
            setEndValue(e.target.value)
            setEventUpdate({...eventUpdate, end: e.target.value})
        }
        checkCompletion()
        console.log("allCompleted: ", allCompleted)
        // console.log("eventUpdate.start: ",eventUpdate.start)
    }

    const saveEventHandler = async (e) => {
        e.preventDefault()
        await checkCompletion()
        setButtonText("saving...")
        await updateEvent(eventUpdate._id, eventUpdate)
        document.getElementById("editTitle").value=""
        document.getElementById("editDesc").value=""
        setButtonText("save")
        setIsOpened(!isOpened)
    }

    return (
    <EditEventCont>

      <EventTitle id="editTitle" type="text" placeholder={`${title}`} required onChange={(e)=>setEventUpdate({...eventUpdate, title: e.target.value})}/>

      <EventDesc  id="editDesc" type="text" placeholder={`${description}`} required onChange={(e)=>setEventUpdate({...eventUpdate, description: e.target.value})}/>
 
      <StartCont>

        <label>start</label>
        <Start 
            id={"startInput"}
            value={startValue}
            type="datetime-local"
            required
            onChange={(e) => setTimeHandler(e, "start")}
        />
      </StartCont>
      <EndCont>
        <label>end</label>
        <End
          type="datetime-local"
          value={endValue}
          onChange={(e) => setTimeHandler(e, "end")}
        ></End>
      </EndCont>
      <SaveBTN onClick={saveEventHandler}>
        <SaveIcon disabled={!allCompleted} style={allCompleted ? EnabledStyle : DisabledStyle}>{buttonText}</SaveIcon>
      </SaveBTN>
    </EditEventCont>
  );
};

export default EditEvent;

const EditEventCont = styled.div`
  background-color: transparent;
  border: 1px solid var(--faded);
  margin-top: 0.5rem;
  width: 100%;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

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
  &:focus {
    outline: 1px solid var(--faded);
  }
`;
const EndCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

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
  &:focus {
    outline: 1px solid var(--faded);
  }
`;

const SaveBTN = styled.button`
  width: 90%;
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
`;

const SaveIcon = styled.button`
    font-size: 1.25rem;
    margin: 0.25rem 0 0.5rem 0;
    border: none;
    background-color: transparent;
`
const DisabledStyle = {
    backgroundColor: "transparent",
    color:"var(--faded)",
    cursor: "not-allowed",
}

const EnabledStyle = {
    color:"var(--mint)",
    cursor: "pointer"
}