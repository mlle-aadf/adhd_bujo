const mongoConnect = require('./mongoConnect')


const updateEventHandlder = async (req, res) => {
    
    
    if (req?.body) {
        // console.log("NEW TASK: ", req.body)
        const {eventID, update} = req.body

        try{
            const db = await mongoConnect(true)
            const allEvents = await db.collection('events')
        
            const result = await allEvents.updateOneOne(
                {_id: eventID},
                {$set: update})
            
            if (!result) {
                return res.status(500).json({
                        status: 500,
                        message: "failed to update event"
                    })
            }
    
            // console.log("event created: ", eventID)
            return res.status(201).json(
                {
                    status: 201,
                    message: `event ${eventID} updated`
                }
            )
        } catch (error) {
            console.log(error.message)
            
        } finally {
            mongoConnect(false)
        }
    }
}

updateEventHandlder()

module.exports = updateEventHandlder