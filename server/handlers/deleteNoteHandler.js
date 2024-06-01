const mongoConnect = require('./mongoConnect')

const deleteNoteHandler = async (req, res) => {
        console.log("REQBODY: ", req.body)
    
    if (req?.body) {
        const {noteID} = req.body
        console.log(`deleteEventHandler eventID: ${noteID}`)

        try{
            const db = await mongoConnect(true)
            const allNotes = await db.collection('events')
        
            const result = await allNotes.deleteOne({_id: `${noteID}`})
            // console.log("RESULT: ", result)
            
            if (!result) {
                return res.status(500).json({
                        status: 500,
                        message: "failed to delete note"
                    })
            }
            

            return res.status(201).json({
                    status: 201,
                    message: `note ${noteID} deleted`
                })
        } catch (error) {
            console.log(error.message)
            
        } finally {
            mongoConnect(false)
        }
    }
}


module.exports = deleteNoteHandler