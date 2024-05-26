const mongoConnect = require('./mongoConnect')

const getEventsHandler = async (req, res) => {

    try {
        const db = await mongoConnect(true)

        const allEvents = await db
            .collection('events')
    // return all tasks in database not marked "completed" or "deleted"
            .aggregate([
                // {$match :  {$and: [{completed : false}, {deleted : false}] }},
                {$sort : {start: -1}}
            ], {
                collation: {
                    locale: "en_US",
                },
            })
            .toArray()

        if (!allEvents || allEvents.length === 0) {
            return res.status(404).send("No events found")
        } else {
            console.log("allEvents: ", allEvents)
            return res.status(200).json({
            status: 200,
            events: allEvents,
            });}
    } catch (error) {
        console.log(error.message);
    } finally {
        await mongoConnect(false)
    }
}

// getEventsHandler()

module.exports = getEventsHandler