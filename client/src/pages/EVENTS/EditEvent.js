import { useEffect, useState } from "react";
import styled from "styled-components";
import Moment from 'react-moment'

const EditEvent = ({updatedEvent, setUpdatedEvent}) => {
  
    console.log("editEvent updatedEvent:", updatedEvent)

    const {title, description, start, end} = updatedEvent

    console.log(title, description, start, end)

    return (
    <EditEventCont>
      {/* <Modal
                    isOpen={modalIsOpen}
                    style={ModalStyle}
                    // onAfterOpen={afterOpenModal}
                    // onRequestClose={closeModal}
                    <NewBTN onClick={()=>setIsOpen(!modalIsOpen)}>+</NewBTN>
                > */}
      {/* <NewBTN onClick={()=>setIsOpened(!isOpened)}>+</NewBTN> */}
      {/* <Collapse isOpened={isOpened}> */}
      <EventTitle type="text" value={title} required />
      {/* <EventTitle type="text" placeholder="title" onChange={handleTitle} required/> */}
      <EventDesc type="text" value={description} />
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
        <label onClick={() => console.log("start label")}>start</label>
        <Start 
            id={"startInput"}
          value="2024-05-29 10:00"
          type="datetime-local"
          required
          onChange={(e) => console.log("start time: ", e.target.value)}
        />
        {/* <StartTime type="time"/> */}
      </StartCont>
      <EndCont>
        <label onClick={() => console.log("end label")}>end</label>
        <End
          type="datetime-local"
          onChange={(e) => console.log("end time: ", e.target.value)}
          
        ></End>
      </EndCont>
      {/* <div>
                        <label onClick={()=> setEndOpened(!endOpened)} >end</label>
                        <Collapse isOpened={endOpened}>
                            <Datetime dateFormat={"YYYY-MM-DD"}/>
                        </Collapse>
                    </div> */}
      <SaveBTN onClick={() => console.log("edit event save button")}>
        <SaveIcon>save</SaveIcon>
      </SaveBTN>
    </EditEventCont>
  );
};

export default EditEvent;

const EditEventCont = styled.div`
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

const SaveBTN = styled.div`
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
