import {NewNoteCont, TextArea, Save} from "./Styles"
import { NotesContext } from "../../contexts/NotesContext";

// import NavBarMobile from "../HOME/NavBarMobile";
import { useContext, useState } from "react";
const { v4: uuidv4 } = require("uuid");

const NewNote = () => {
    
    const {addNewNote} = useContext(NotesContext)

    const [newNote, setNewNote]=useState({
        _id: uuidv4(),
        text: "...",
        pinned: false
    })

    const [saveVisible, setSaveVisible]=useState(false)
    const [buttonText, setButtonText]=useState("save")
    
    const textAreaHandler =(e) => {
        const userInput = e.target.value
        setNewNote({...newNote, text: userInput})
        // hides "save" if no text input
        userInput.length > 0 ? setSaveVisible(true) : setSaveVisible(false)
    }

    const resetForm = () => {
        setNewNote({
            _id: uuidv4(),
            text: "...",
            pinned: false
        })
        // save button text
        setButtonText("saved!")
        setTimeout(()=> {
            setButtonText("save")
            setSaveVisible(false)
        } , "3000")
    }

    const saveNoteHandler = async () => {
        setButtonText("saving...")
        await addNewNote(newNote)
        resetForm()
        console.log("saveNoteHandler ", newNote) 
        // document.getElementById("textArea").value=""
        // setButtonText("saved!")


        // setTimeout(()=> {
        //     setButtonText("save")
        //     setSaveVisible(false)
        // } , "3000")
    }

    return (
        <NewNoteCont>
            <TextArea id={"textArea"} onChange={(e)=> textAreaHandler(e)} placeholder="..." value={`${newNote.text==="..."?"":newNote.text}`}/>
            
            <Save onClick={saveNoteHandler} style={{color:`${saveVisible===true? "white" : "transparent"}`}}>{buttonText}</Save>
        </NewNoteCont>
    );
};

export default NewNote;