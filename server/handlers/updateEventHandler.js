const mongoConnect = require('./mongoConnect')


const updateEventHandlder = async (req, res) => {
    
    
    if (req?.body) {
        const {eventID, updatedEvent} = req.body
        console.log("REQBODY: ", req.body)
        console.log(`updateEventHandlder eventID: ${eventID}, ${updatedEvent}`)

        try{
            const db = await mongoConnect(true)
            const allEvents = await db.collection('events')
        
            const result = await allEvents.updateOne(
                {_id: eventID},
                {$set: updatedEvent})
            
            if (!result) {
                return res.status(500).json({
                        status: 500,
                        message: "failed to update event"
                    })
            }
            

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