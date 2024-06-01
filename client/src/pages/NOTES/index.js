
import {NoteCont, NoteTitleCont, NoteIcon, NoteTitle, Pinned, PinIcon} from "./Styles"

import NavBarMobile from "../HOME/NavBarMobile";
import NewNote from "./NewNote";

import { HomeLink } from "../HOME/Styles";

const Notes = () => {
    
    

    return (
        <NoteCont>
            <NavBarMobile/>
                <NoteTitleCont>
                    <NoteIcon/>
                    <NoteTitle>NOTES</NoteTitle>
                </NoteTitleCont>

                <NewNote/>

            <Pinned>
                <PinIcon/>
                <p>The rotation of Earth really makes my day.</p> 
            </Pinned>

            <HomeLink to="/">٩(◕‿◕)۶-</HomeLink>
        </NoteCont>
    );
};

export default Notes;