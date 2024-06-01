const mongoConnect = require('./mongoConnect')

const getNotesHandler = async (req, res) => {

    try {
        const db = await mongoConnect(true)

        const allNotes = await db.collection('notes').find({}).toArray()

        if (!allNotes || allNotes.length === 0) {
            return res.status(404).send("No notes found")
        } else {
            console.log("got all notes, ", allNotes)
            return res.status(200).json({
            status: 200,
            events: allNotes,
            });}
    } catch (error) {
        console.log(error.message);
    } finally {
        await mongoConnect(false)
    }
}

module.exports = getNotesHandler