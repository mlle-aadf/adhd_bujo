const mongoConnect = require('./mongoConnect')

const deleteEventHandler = async (req, res) => {
    
    if (req?.body) {
        const {eventID} = req.body

        try{
            const db = await mongoConnect(true)
            const allEvents = await db.collection('events')
        
            const result = await allEvents.deleteOne({_id: `${eventID}`})
            
            if (!result) {
                return res.status(500).json({
                        status: 500,
                        message: "failed to delete event"
                    })
            }

            return res.status(201).json(
                {
                    status: 201,
                    message: `event ${eventID} deleted`
                }

            )
        } catch (error) {
            console.log(error.message)
            
        } finally {
            mongoConnect(false)
        }
    }
}

// deleteEventHandler()

module.exports = deleteEventHandler