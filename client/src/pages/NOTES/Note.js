import styled from "styled-components";
import { MdModeEditOutline, MdDelete } from "react-icons/md";
// import { TiPinOutline, TiPin } from "react-icons/ti";

import { Collapse } from "react-collapse";

import { useParams, useNavigate, Link } from "react-router-dom";
import NavBarMobile from "../HOME/NavBarMobile";
import EditNote from "./EditNote";
import { useContext, useEffect, useState } from "react";
import { NotesContext } from "../../contexts/NotesContext";
import HomeBtn from "../HOME/HomeBTN";
import { NoteIcon } from "./Styles";

const Note = () => {
    
    const {noteID} = useParams()
    const navigate = useNavigate()
    const {deleteNote, updateNote}=useContext(NotesContext)
    const [note, setNote]= useState({
        _id: noteID,
        text: "",
        pinned: false
    })

    const [isOpened, setIsOpened] = useState(false)
    const [deleteOpened, setDeleteOpened] = useState(false)
    const [textContent, setTextContent]=useState("are you sure?")


    const getNote = async () => {
        try {
        const res = await fetch(`/notes/${noteID}`);
        const {noteData} = await res.json();

        console.log("noteData: ",noteData)

        if (noteData !== undefined) {
            setNote(noteData)
        }         
        } catch (err) {
        console.log(err);
        }
    };

    useEffect(()=>{
        getNote()
    }, [])

    // const pinHandler = async (pinned) => {
    //     if (pinned === true) {
    //         setNote({...note, pinned: false})
    //         console.log("pinHandler True", note)
    //     } else {
    //         setNote({...note, pinned: true})
    //         console.log("pinHandler False", note)
    //     }
   
    //     await updateNote(noteID, note)

    // }

    const yesHandler = async (noteID) => {
        // setDeleteOpened(!deleteOpened)
        setTextContent("deleting note...")
        console.log("NOTEID yesHANDLER ", noteID)
        document.getElementById("yesNoNote").style.display="none"
        await deleteNote(noteID)
        navigate("/notes")
      }
    
    return (
        <div style={{height:"100vh", width:"100vw"}}>
            <NavBarMobile/>
            <NoteCont>
            <Link to={"/notes"} style={{textDecoration:"none", color:"white"}}><NoteIcon style={{position:"absolute", top:"-4%", left:"-2%", fontSize:"1.5rem"}}/></Link>
                {note.text.length? <p>{note.text}</p> : "..."}
                <BTNCont>
                    <Collapse isOpened={!deleteOpened}>
                        {/* {note.pinned === true ? <TiPin  onClick={()=>pinHandler(true)}/> : <TiPinOutline onClick={()=>pinHandler(false)}/> */}
                        
                         {/* <TiPinOutline onClick={()=>pinHandler}/> */}
                          
                        
                        {/* <MdModeEditOutline/> */}
                        
                         <MdDelete onClick={()=>setDeleteOpened(!deleteOpened)} />
                    </Collapse > 
                    
                    <Collapse isOpened={deleteOpened}>
                        <SureCont>
                            <p>{textContent}</p>
                            <div id="yesNoNote" style={{display:"flex", alignItems:"center"}} >
                                <Yes onClick={()=>yesHandler(noteID)}>yes</Yes><p style={{margin:"0 0.5rem"}}>|</p><No onClick={()=>setDeleteOpened(!deleteOpened)}>no</No>
                            </div>
                        </SureCont>
                    </Collapse>
                </BTNCont>
        
            </NoteCont>

            {/* <EditNote note={note}/> */}


            <HomeBtn/>
        </div>
    );
};


export default Note;

const NoteCont = styled.div`
    background-color: var(--faded);
    margin: 2rem auto 1rem auto;
    width: 60vw;
    padding:1rem 2rem;
    
    font-family: monospace;
    position: relative;
`
const BTNCont= styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid white;
    /* border: 2px solid fuchsia; */
    `

const SureCont = styled.div`
    display: flex;
    justify-content: space-around;
    width: 60vw;

    /* border: 2px solid fuchsia; */
    /* margin-Left:1rem; */
    `
const Yes = styled.p`
  cursor: pointer;
  &:hover{
    font-weight: 500;
  }
  &:active{
    color: var(--mint);
  }
  `

const No = styled.p`
  cursor: pointer;
  &:hover{
    font-weight: 500;
  }
  &:active{
    color: var(--mint);
  }
`
// const NotDelete= styled.div``