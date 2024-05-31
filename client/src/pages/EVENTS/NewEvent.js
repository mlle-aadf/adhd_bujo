import  {
  NewEventCont,
  EventTitle,
  EventDesc,
  StartCont,
  Start,
  End,
  EndCont,
  SaveBTNCont,
  SaveBTN,
  DisabledStyle,
  EnabledStyle,
  SaveIcon,
} from "./Styles"

import { useState, useContext, useEffect } from "react";
import { EventsContext } from "../../contexts/EventsContext";
const { v4: uuidv4 } = require("uuid");


const NewEvent = () => {
  const { addNewEvent } = useContext(EventsContext);
  const [buttonMessage, setButtonMessage] = useState("save");
  const [newEvent, setNewEvent] = useState({
    _id: uuidv4(),
    title: "",
    description: "",
    start: undefined,
    end: ""
  });

  // disable "save" button if no title or start date
  const [allCompleted, setAllCompleted] = useState(false);
  const checkCompletion = () => {
    const hasTitle = newEvent.title.length > 0;
    const hasStart = newEvent.start !== undefined && newEvent.start !== "" ;
    const complete = hasTitle && hasStart;
    setAllCompleted(complete);
  };

  useEffect(() => {
    checkCompletion();
  }, [newEvent]);

  // sets START and END dates/times
  const setDateHandler = (e, input) => {
    input === "start" ? setNewEvent({ ...newEvent, start: e.target.value }) : setNewEvent({ ...newEvent, end: e.target.value });
  };
  
  const resetForm = () => {
    document.getElementById("newEventForm").reset()
    setNewEvent({
      _id: uuidv4(),
      title: "",
      description: "",
      start: undefined,
      end: ""
    })
  }

  // saves event to db
  const saveEventHandler = async (e) => {
    e.preventDefault()
    setButtonMessage("saving...")
    await addNewEvent(newEvent);
    resetForm()
    setButtonMessage("save")
  };


  return (
    <>
{/* FUTURE REFACTORING:
option === "createEvent" > form to create a new event, inputs blank 
option === "updateEvent" > form to update an event, inputs are pre-filled
*/}
      <NewEventCont   id="newEventForm">
        {/* SETS newEvent STATE TO USER INPUT*/}
        <EventTitle
          type="text"
          placeholder={"title"}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
          required
        />

        <EventDesc
          type="text"
          placeholder="description"
          onChange={(e) =>
            setNewEvent({ ...newEvent, description: e.target.value })
          }
        />

        <StartCont>
          <label >start</label>
            <Start
          
            type="datetime-local"
            onChange={(e) => setDateHandler(e, "start")}
            required
          ></Start>
        </StartCont>

        <EndCont>
          <label>end</label>
          <End
            type="datetime-local"
            onChange={(e) => setDateHandler(e, "end")}
            min={newEvent.start}
          ></End>
        </EndCont>
        {/* SAVES newEvent to db  */}
        <SaveBTNCont>
            <SaveBTN
                disabled={allCompleted === true ? false : true}
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