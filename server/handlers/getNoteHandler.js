const mongoConnect = require('./mongoConnect')

const getNoteHandler = async (req, res) => {
    
    
    const {noteID} = req.params

    // console.log("PARAMS: ",req.params, eventID)
    // console.log("getEventHandler caled")

    
    if (noteID.length >0) {
        // const {eventID} = req.body
        // console.log("getEventHandler$$$eventID: ", eventID)
        try{
            const db = await mongoConnect(true)
            const allNotes = await db.collection('notes')
            // console.log("mongosearch allEVents: ", allEvents)
            
            const result = await allNotes.findOne({_id: noteID})
//             console.log("MONGOSEARCH ID: ", eventID)
//    debugger
//             console.log("RESULT: ", result)
            
            if (!result) {
                return res.status(500).json({
                        status: 500,
                        message: "failed to fetch note"
                    })
            } else {
                return res.status(201).json({
                        status: 201,
                        message: `found note ${noteID}`,
                        noteData: result
                    })
            }
    
            // console.log("event created: ", result.title)
            
        } catch (error) {
            console.log(error.message)
            
        } finally {
            mongoConnect(false)
        }
    }
}

// getEventHandler()

module.exports = getNoteHandler