const mongoConnect = require('./mongoConnect')

const getEventHandler = async (req, res) => {
    
    console.log(req.params)
    
    if (req?.body) {
        const {eventID} = req.body
        console.log("getEventHandler eventID: ", eventID)

        try{
            const db = await mongoConnect(true)
            const allEvents = await db.collection('events')
        
            const result = await allEvents.findOne({_id: eventID})
            
            if (!result) {
                return res.status(500).json({
                        status: 500,
                        message: "failed to fetch event"
                    })
            }
    
            console.log("event created: ", result.title)
            return res.status(201).json(
                {
                    status: 201,
                    message: `event ${eventID} updated`,
                    eventData: result
                }
            )
        } catch (error) {
            console.log(error.message)
            
        } finally {
            mongoConnect(false)
        }
    }
}

// getEventHandler()

module.exports = getEventHandler