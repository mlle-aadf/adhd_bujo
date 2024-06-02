import styled from "styled-components";
import {Collapse} from 'react-collapse';
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NotesContext } from "../../contexts/NotesContext";

const NotesList = () => {
    const {notes} = useContext(NotesContext)
    // const [expanded, setExpanded] = useState([])
    const navigate = useNavigate()


    const noteClickHandler = (noteID) => {
        navigate(`/notes/${noteID}`)
    }

    return (
        <div style={{marginBottom:"2rem", marginTop:"1rem"}}>
            {notes.map((note, i)=> 
                <Note onClick={()=> noteClickHandler(note._id)} id={`${note._id}`} >{note.text}</Note>
            )}
        </div>
    );
};

export default NotesList;

const Edits = styled.div`
    border: 1px solid fuchsia;
`

const Note = styled.div`
    /* border-top: 2px solid var(--faded); */
    padding: 0.5rem;
    border-bottom: 1px solid var(--faded);
    /* color: white; */
    font-family: monospace;
    font-size: 1rem;
    line-height: 1;
    height: 2rem;

    overflow: hidden;

    color: #ffffff; background-image: -webkit-linear-gradient(270deg, #ffffff 20%, #858585 65%, #000000 80%); background-clip: text; -webkit-background-clip: text;  -webkit-text-fill-color: transparent;


` 