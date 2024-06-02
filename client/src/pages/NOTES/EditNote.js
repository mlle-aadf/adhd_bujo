import styled from "styled-components";
import { useContext, useState } from "react";
import { NotesContext } from "../../contexts/NotesContext";

const EditNote = ({note}) => {
    
    const {_id, text, pinned} = note
    
    const {updateNote}=useContext(NotesContext)

    const [saveVisible, setSaveVisible]=useState(false)
    const [buttonText, setButtonText]=useState("save")
    const [updatedNote, setUpdatedNote]=useState(note)

    const textAreaHandler =(e) => {
        const userInput = e.target.value

        
        // console.log("note, ", note)
        setUpdatedNote({...updatedNote, text: e.target.value})
        // hides "save" if no text input
        userInput.length > 0 ? setSaveVisible(true) : setSaveVisible(false)
        console.log("udpated", updatedNote)
    }

    const resetForm = () => {
        setUpdatedNote({
            text: text,
            pinned: pinned
        })
        // setUpdateNote({
        //     _id: note._id,
        //     text: note.text,
        //     pinned: note.pinned
        // })
        // save button text
        setButtonText("saved!")
        setTimeout(()=> {
            setButtonText("save")
            setSaveVisible(false)
        } , "3000")

        console.log("FORM RESSET")
    }

    const saveNoteHandler = async () => {
        setButtonText("saving...")
        console.log("saveNoteHandler ", updatedNote, _id) 

        await updateNote(_id, updatedNote)

        // resetForm()

    }

    return (
        <EditNoteCont>
           <TextArea id={"textArea"} onChange={(e)=> textAreaHandler(e)} defaultValue={text}/>
            
            <Save onClick={saveNoteHandler} style={{color:`${saveVisible===true? "white" : "transparent"}`}}>{buttonText}</Save>
        </EditNoteCont>
    );
};

export default EditNote;

const EditNoteCont = styled.div`
    background-color: var(--faded);
    margin: 1rem auto;
    width: 60vw;
    padding:1rem 2rem;
    font-family: monospace;
    position: relative;
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
