import { createContext, useState, useEffect } from "react";
export const NotesContext = createContext();


const NotesContextProvider = ({ children }) => {
    
    const [refresh, setRefresh] = useState(false);

    const [notes, setNotes] = useState([])
   
    const getNotes = async () => {
        try {
          const res = await fetch("/notes");
          const { notes } = await res.json();
          setNotes(notes);
        } catch (err) {
          console.log(err);
        }
      };
    
      useEffect(() => {
        // getEvent()
        getNotes();
      }, [refresh]);

      // add new note to db
  const addNewNote = async (newNote) => {
    console.log("addNewNote: ", newNote);

    const response = await fetch("/notes", {
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
          eventID: noteID,
          updatedNote: newNote,
        };
    
      const response = await fetch("/notes", {
          method: "PATCH",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(updateInfo)
        })
    
        if (response.ok) {
          setRefresh(!refresh)
          console.log(`updateNote: NOTE ${noteID} updated`)
        }
      };
    
      // delete note
      const deleteNote = async (noteID) => {
        
        const deleteNote = {
            noteID: noteID
        }
        
        const response = await fetch("/notes", {
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
        <NotesContext.Provider value={{notes, addNewNote, deleteNote, updateNote}}>
            {children}
        </NotesContext.Provider>
    )
}

export default NotesContextProvider