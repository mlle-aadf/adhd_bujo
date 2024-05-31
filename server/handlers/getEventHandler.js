const mongoConnect = require('./mongoConnect')

const getEventHandler = async (req, res) => {
    
    
    const {eventID} = req.params

    // console.log("PARAMS: ",req.params, eventID)
    // console.log("getEventHandler caled")

    
    if (eventID.length >0) {
        // const {eventID} = req.body
        // console.log("getEventHandler$$$eventID: ", eventID)
        try{
            const db = await mongoConnect(true)
            const allEvents = await db.collection('events')
            console.log("mongosearch allEVents: ", allEvents)
            
            const result = await allEvents.findOne({_id: eventID})
//             console.log("MONGOSEARCH ID: ", eventID)
//    debugger
//             console.log("RESULT: ", result)
            
            if (!result) {
                return res.status(500).json({
                        status: 500,
                        message: "failed to fetch event"
                    })
            } else {
                return res.status(201).json(
                    {
                        status: 201,
                        message: `found event ${eventID}`,
                        eventData: result
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

module.exports = getEventHandler