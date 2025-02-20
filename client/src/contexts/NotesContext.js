import { createContext, useEffect, useState } from "react";
export const NotesContext = createContext();


const NotesContextProvider = ({ children }) => {
    
    const [refresh, setRefresh] = useState(false);
    const [notes, setNotes] = useState([])
    const [pinned, setPinned] = useState()
   
    const getNotes = async () => {
        try {
          const res = await fetch("https://adhd-bujo-server.vercel.app/notes");
          const { notes } = await res.json();
          setNotes(notes);
          const pinnedNote = notes.filter((note)=> note.pinned===true )
        //   console.log("pinnedNote: ", pinnedNote[0].text)
          setPinned(pinnedNote[0])
        } catch (err) {
          console.log(err);
        }
      };
    
      useEffect(() => {
        getNotes();
      }, [refresh]);

      // add new note to db
    const addNewNote = async (newNote) => {
        console.log("addNewNote: ", newNote);

        const response = await fetch("https://adhd-bujo-server.vercel.app/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newNote),
        });

        if (response.ok) {
        setRefresh(!refresh);
        // document.getElementById("newEventForm").reset()
        console.log(`ADD NEW NOTE: note saved`);
        } else {
        console.log("add new note failed")
        }


    };
      // update existing note
    const updateNote = async (noteID, newNote) => {
        const updateInfo = {
          noteID: noteID,
          updatedNote: newNote,
        };

        console.log("updateNote Context:", updateInfo)
    
      const response = await fetch("https://adhd-bujo-server.vercel.app/notes", {
          method: "PATCH",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(updateInfo)
        })
    
        if (response.ok) {
          setRefresh(!refresh)
          console.log(`updateNote: NOTE ${noteID} updated`)
        }
    };
    
    // const updatePin = async (noteID) => {
        
        
    // } 
    
      // delete note
    const deleteNote = async (noteID) => {
    
    const deleteNote = {
        noteID: noteID
    }
    
    const response = await fetch("https://adhd-bujo-server.vercel.app/notes", {
        method: "DELETE",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(deleteNote),
    })

    if(response.ok) {
        setRefresh(!refresh)
        console.log(`deleteNote:  ${noteID} deleted`)
    } 
    }

    return(
        <NotesContext.Provider value={{pinned, setPinned, notes, addNewNote, deleteNote, updateNote}}>
            {children}
        </NotesContext.Provider>
    )
}

export default NotesContextProvider