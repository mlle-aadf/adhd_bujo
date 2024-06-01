const mongoConnect = require('./mongoConnect')

const createNoteHandler = async (req, res) => {
    
    if (req?.body) {
        const newNote = req.body

        try{
            const db = await mongoConnect(true)
            const allNotes = await db.collection('notes')
            const result = await allNotes.insertOne(newNote)
            
            if (!result) {
                return res.status(500).json({
                        status: 500,
                        message: "failed to save note"
                    })
            }
    
            return res.status(201).json({
                    status: 201,
                    message: `note saved`
            })
    
        } catch (error) {
            console.log(error.message)
            
        } finally {
            mongoConnect(false)
        }
    }
}



module.exports = createNoteHandler