const mongoConnect = require('./mongoConnect')


const updateNoteHandlder = async (req, res) => {
    
    
    if (req?.body) {
        const {noteID, updatedNote} = req.body
        console.log("updatedNote: ", req.body)
        // console.log(`updateEventHandlder noteID: ${noteID}, ${updatedEvent}`)

        try{
            const db = await mongoConnect(true)
            const allNotes = await db.collection('events')
        
            const result = await allNotes.updateOne(
                {_id: noteID},
                {$set: updatedNote})
            
            if (!result) {
                return res.status(500).json({
                        status: 500,
                        message: "failed to update note"
                    })
            }
            
            return res.status(201).json({
                    status: 201,
                    message: `note ${noteID} updated`
                })
        } catch (error) {
            console.log(error.message)
        } finally {
            mongoConnect(false)
        }
    }
}


module.exports = updateNoteHandlder