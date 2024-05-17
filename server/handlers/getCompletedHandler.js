const mongoConnect = require('./mongoConnect')

const getCompletedHandler = async (req, res) => {

    // console.log("REQ: ", req)
    

    try {
        const db = await mongoConnect(true)

        const allCompleted = await db
            .collection('tasks')
    // return all tasks in database marked "completed"
            .aggregate([
                {$match :  {completed : true}},
                {$sort : {priority: -1}}
            ], {
                collation: {
                    locale: "en_US",
                },
            })
            .toArray()

        if (!allCompleted || allCompleted.length === 0) {
            return res.status(404).send("No tasks found")
        } else {
            console.log("allCompleted: ", allCompleted)
            return res.status(200).json({
            status: 200,
            completed: allCompleted,
            });}
    } catch (error) {
        console.log(error.message);
    } finally {
        await mongoConnect(false)
    }
}

module.exports = getCompletedHandler