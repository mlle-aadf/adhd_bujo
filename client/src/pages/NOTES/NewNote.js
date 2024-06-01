import {NoteCont, NoteTitleCont, NoteIcon, NoteTitle, NewNoteCont, TextArea, Save} from "./Styles"

import NavBarMobile from "../HOME/NavBarMobile";
import { useState } from "react";

const NewNote = () => {
    

    const [newNote, setNewNote]=useState("")
    const [saveVisible, setSaveVisible]=useState(false)
    const [buttonText, setButtonText]=useState("save")
    
    const textAreaHandler =(e) => {
        const userInput = e.target.value// setUserInput(e.target.value)
        setNewNote(userInput)
        // console.log("textAreaHandler: ", text)
        
        userInput.length > 0 ? setSaveVisible(true) : setSaveVisible(false)
        

    }

    const saveNoteHandler = () => {
        setButtonText("saving...")
        
        console.log("saveNoteHandler ", newNote)
        document.getElementById("textArea").value=""
        setButtonText("saved!")


        setTimeout(()=> {
            setButtonText("save")
            setSaveVisible(false)
        } , "3000")
    }

    return (
        <NewNoteCont>
            <TextArea id={"textArea"} onChange={(e)=> textAreaHandler(e)} placeholder="..."/>
            <Save onClick={saveNoteHandler} style={{color:`${saveVisible===true? "white" : "transparent"}`}}>{buttonText}</Save>
        </NewNoteCont>
    );
};

export default NewNote;