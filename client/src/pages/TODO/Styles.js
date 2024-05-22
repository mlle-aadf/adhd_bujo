import { Link } from "react-router-dom";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

import { FaStar, FaCheck, FaCircleCheck, FaCircleXmark } from "react-icons/fa6";
import styled from "styled-components";
// TO-DO page styled components

// CheckBoxMenu.js
const CheckMenuContainer = styled.div`
  background-color: var(--faded);
  border-radius: 20px;
  display: ${(props) => (props.active ? "inline-flex" : "none")};
  flex-direction: column;
  padding: 0.25rem;
  `;

const CompleteBTN = styled(FaCircleCheck)`
  background-color: transparent;
  border: none;
  margin-bottom: 0.25rem;
  padding: 0.25rem;
  `;

const DeleteBTN = styled(FaCircleXmark)`
  background-color: transparent;
  border: none;
  margin-bottom: 0.25rem;
  padding: 0.25rem;
  `;

const StarBTN = styled(FaStar)`
  background-color: transparent;
  border: none;
  padding: 0.25rem;
`;

// Completed.js
const CompletedContainer = styled.div`
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    width: 75vw;
    margin: -1rem 0;
  }
`;
const CompletedTitle = styled.h3``;

const CheckMark = styled(FaCheck)`
  margin-right: 1rem;
  font-size: 1.75rem;
`;

// Deleted.js
const DeletedContainer = styled.div`
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    width: 75vw;
    margin: -1rem 0;
  }
`;
const DeletedTitle = styled.h3``;

// ToDo.js
const TodoContainer = styled.div`
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    width: 75vw;
  }
`;

const TitleContainer = styled.div`
  @media (max-width: 500px) {
    display: flex;
    width: 75vw;
    align-items: center;
    margin: 2rem 0 1rem 0;
  }
`;

const CheckBoxIcon = styled(MdOutlineCheckBoxOutlineBlank)`
  margin-right: 1rem;
  font-size: 2.25rem;
`;

const TodoTitle = styled(Link)`
  text-decoration: none;
  color: white;

  @media (max-width: 500px) {
    font-size: 2rem;
  }
`;

// NewTask.js
const NewTaskContainer = styled.div`
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
`;

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
`;

const Desc = styled.input`
  background-color: transparent;
  color: white;
  border: none;
  width: 80%;
  height: 8vw;
  padding: 0 0.5rem;
`;

const Importance = styled.div`
  background-color: white;
  /* height: 100%; */
  height: 8vw;
  width: 8vw;
  margin: 0 0.5rem;
  border-radius: 50%;
`;

const Urgency = styled.div`
  background-color: white;
  border: none;
  height: 8vw;
  width: 8vw;
  border-radius: 50%;
`;

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
`;

// TaskList.js
const TasksContainer = styled.ul`
  list-style-type: none;
  color: white;
  margin: 0;
  padding: 0;
  /* font-size: 1.5rem; */
`;

const Task = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  height: fit-content;
  margin: -0.5rem 0;
`;

const Tick = styled.div`
  align-items: start;
  align-self: center;
  height: 4vw;
  width: 4vw;
  margin-right: 1rem;
  border-radius: 5px;
  cursor: pointer;
`;

//_______________________________________________________________
export {
  CheckMenuContainer,
  CompleteBTN,
  DeleteBTN,
  CheckMark,
  CompletedTitle,
  CompletedContainer,
  DeletedContainer,
  DeletedTitle,
  TodoTitle,
  TitleContainer,
  CheckBoxIcon,
  TodoContainer,
  NewTaskContainer,
  PriorityInputs,
  Desc,
  Importance,
  Urgency,
  Add,
  StarBTN,
  TasksContainer,
  Task,
  Tick,
};
