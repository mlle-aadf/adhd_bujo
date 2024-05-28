const mongoConnect = require('./mongoConnect')


const createEventHandlder = async (req, res) => {
    
    
    if (req?.body) {
        // console.log("NEW TASK: ", req.body)
        const newEvent = req.body

        try{
            const db = await mongoConnect(true)
            const allEvents = await db.collection('events')
        
            const result = await allEvents.insertOne(newEvent)
            
            if (!result) {
                // console.log("oops")
                return res.status(500).json({
                        status: 500,
                        message: "failed to save event"
                    })
            }
    
            console.log("event created: ", req.body.title)
            return res.status(201).json(
                {
                    status: 201,
                    message: `event saved`
                }
            )
    
    
        } catch (error) {
            console.log(error.message)
            
        } finally {
            mongoConnect(false)
        }

    }

}

createEventHandlder()

module.exports = createEventHandlder