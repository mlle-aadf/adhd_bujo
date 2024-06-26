import styled from "styled-components";
import { MdModeEditOutline } from "react-icons/md";
import { TiPinOutline } from "react-icons/ti";

// NOTES styled components
const NoteCont = styled.div`
    width: 75vw;
`

const NoteTitleCont = styled.div`
    display: flex;
    align-items: center;
    margin: 1.5rem 0 1rem 0;
    width: 100%;
    font-size: 2rem;
    height: 2rem;
`

const NoteIcon = styled(MdModeEditOutline)`
    margin-right: 1rem
`

const NoteTitle = styled.h2`
    
`

const NewNoteCont = styled.div`
  background-color: var(--faded);
  padding-top: 2rem ;
  /* border:none; */
  width: 100%;
  margin: 0 auto;
  position: relative;
  @media (max-width: 500px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 20vh;
      border-radius: 10px;
    }
    `
const TextArea = styled.textarea`
    border:none;
    color: white;
    width: 60vw;
    height: 15vh;
    background-color: transparent;
    &:focus{
        /* border: 1px solid var(--faded); */
        outline: none;
        cursor: text;
        caret-color: white;
        caret-shape: bar;
    }
   
`

const Save = styled.p`
    width: fit-content;
    margin-right: 3rem;
    position: absolute;
    bottom: -1%;
    right: -3%;

    cursor: pointer;
    &:active{
        font-weight: 400;
    }
`

const Pinned = styled.div`
    width: 58vw;
    padding: 1rem 2rem;
    border-radius: 10px;
    background-color: var(--faded); 
    margin-top: 1rem;
    margin: 1.5rem auto 0.5rem auto;
    display: flex;
    align-items: center;
    justify-content: center;
    /* height: 4rem; */
    height: fit-content;
    position: relative;
`

const PinIcon = styled(TiPinOutline)`
    font-size: 1.5rem;
    position: absolute;
    top: -6%;
    right: -3%;
`

const PinnedNote = styled.p`
    font-family: monospace;
`

export {NoteCont, NoteTitleCont, NoteIcon, NoteTitle, NewNoteCont, TextArea, Save, Pinned, PinIcon, PinnedNote}