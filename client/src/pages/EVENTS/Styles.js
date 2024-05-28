import styled from "styled-components";
// EVENTs styled components

// NewEvent.js
const NewEventCont = styled.form`
  background-color: transparent;
  border: 1px solid var(--faded);
  margin-top: 0.5rem;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const EventTitle = styled.input`
  background-color: var(--faded);
  color: white;
  border: none;
  font-family: "Montserrat";
  padding: 0.5rem;
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
  padding: 0.5rem 1rem;
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
  background-color: var(--faded);
  width: fit-content;
  margin: 0.5rem 0 0.5rem -1.5rem;
  color: white;
  border: none;
`;

const End = styled.input`
  background-color: transparent;
  width: fit-content;
  margin: 0.5rem 0 0.5rem -1.5rem;
  color: white;
  border: none;
`;

const EndCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const SaveBTNCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`;

const SaveBTN = styled.button`
  width: fit-content;
  height: 2rem;
  border-radius: 5px;
  border: none;
  margin: 0.5rem 1rem 1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: right;
  background-color: transparent;
`;

const DisabledStyle = {
  color: "var(--faded)",
  backgroundColor: "transparent",
};

const EnabledStyle = {
  color: "var(--mint)",
  cursor: "pointer",
};

const SaveIcon = styled.p`
  font-size: 1.25rem;
  margin: 0.5rem 0 1rem 0;
`;

export {
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
};
