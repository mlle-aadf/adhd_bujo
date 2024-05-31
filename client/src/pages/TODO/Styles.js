import { Link } from "react-router-dom";
import { FiDelete } from "react-icons/fi";
import { MdOutlineCheckBoxOutlineBlank, MdDelete } from "react-icons/md";

import {
  FaStar,
  FaCheck,
  FaCircleCheck,
  FaCircleXmark,
  FaExclamation,
  FaRegClock,
  FaPlus,
} from "react-icons/fa6";
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
  }
`;

const CompletedTitleCont = styled.div`
  @media (max-width: 500px) {
    display: flex;
    width: 100%;
    align-items: center;
    margin: 2rem 0 1rem 0;
    height: 2rem;
  }
`

const CheckMark = styled(FaCheck)`
  margin-right: 1rem;
  font-size: 2rem;
`;

const CompletedDeleteBTN = styled(FiDelete)`
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  
  &:active{
        color: var(--priority3);
    }
`;

// Deleted.js
const DeletedContainer = styled.div`
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    width: 75vw;
  }
`

const DeletedTitleCont = styled.div`
  @media (max-width: 500px) {
    display: flex;
    width: 100%;
    align-items: center;
    margin: 2rem 0 1rem 0;
    height: 2rem;
  }
`

const BinIcon = styled(MdDelete)`
    margin-right: 1rem;
    font-size: 2rem;
`

const BinDeleteBTN = styled(FiDelete)`
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  
  &:active{
        color: var(--priority3);
    }
`;

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
    font-size: 2rem;
  }
`;

const CheckBoxIcon = styled(MdOutlineCheckBoxOutlineBlank)`
  margin-right: 1rem;
  font-size: 2rem;
`;

const TodoTitle = styled(Link)`
  text-decoration: none;
  color: white;

  font-size: 2rem;
  @media (max-width: 500px) {
  }
`;

// NewTask.js
const NewTaskContainer = styled.form`
  margin-bottom: 1rem;
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
  height: 8vw;
  width: 8vw;
  margin: 0 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImportanceIcon = styled(FaExclamation)`
  color: black;
  padding: 0.5rem;
`;

const Urgency = styled.div`
  background-color: white;
  border: none;
  height: 8vw;
  width: 8vw;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UrgencyIcon = styled(FaRegClock)`
  color: black;
  padding: 0.5rem;
`;

const Add = styled.button`
  color: white;
  height: fit-content;
  border: none;
  border-radius: 50%;
  margin-left: 1rem;
  height: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const AddIcon = styled(FaPlus)`
  font-size: 1rem;
  padding: 0.25rem 0.1rem;
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
  AddIcon,
  CheckMenuContainer,
  CompleteBTN,
  DeleteBTN,
  CheckMark,
  CompletedTitleCont,
  CompletedContainer,
  CompletedDeleteBTN,
  DeletedContainer,
  DeletedTitleCont,
  BinIcon,
  BinDeleteBTN,
  ImportanceIcon,
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
  UrgencyIcon,
};
