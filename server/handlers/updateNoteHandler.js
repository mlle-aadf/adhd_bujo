const mongoConnect = require('./mongoConnect')


const updateNoteHandlder = async (req, res) => {
    // const {noteID, updatedNote} = req.body

    // console.log(`updateNoteHandlder noteID: ${noteID}, ${updatedNote}`)

    if (req?.body) {
        const {noteID, updatedNote} = req.body

        console.log(`updateNoteHandlder noteID: ${noteID}, ${updatedNote}`)

        try{
            const db = await mongoConnect(true)
            const allNotes = await db.collection('notes')
        
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