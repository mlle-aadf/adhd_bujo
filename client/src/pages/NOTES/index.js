import {NoteCont, NoteTitleCont, NoteIcon, NoteTitle, Pinned, PinIcon, PinnedNote } from "./Styles"

import NavBarMobile from "../HOME/NavBarMobile";
import NewNote from "./NewNote";
import NotesList from "./NotesList";
import HomeBtn from "../HOME/HomeBTN";

import { HomeLink } from "../HOME/Styles";
import { useContext } from "react";
import { NotesContext } from "../../contexts/NotesContext";

const Notes = () => {

    const {pinned} = useContext(NotesContext)
    console.log("Notes INDEX: ", pinned)


    return (
        <NoteCont>
            <NavBarMobile/>
                <NoteTitleCont>
                    <NoteIcon/>
                    <NoteTitle>NOTES</NoteTitle>
                </NoteTitleCont>

                <NewNote/>

            {/* <Pinned>
                <PinIcon/>
                {pinned !== undefined ? <PinnedNote>{`${pinned.text}`}</PinnedNote> : <PinnedNote>...</PinnedNote>} 
            </Pinned> */}

            <NotesList/>
            
            <HomeBtn to="/"/>
        </NoteCont>
    );
};

export default Notes;