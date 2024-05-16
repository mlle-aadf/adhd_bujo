const mongoConnect = require('./mongoConnect')

const getTasksHandler = async (req, res) => {

    console.log("REQ: ", req)

    try {
        const db = await mongoConnect(true)

        const allTasks = await db
            .collection('tasks')
            // .find({})
            
            .aggregate([
                {$sort : {priority: -1}}
            ], {
                collation: {
                    locale: "en_US",
                },
            })
            .toArray()

        if (!allTasks || allTasks.length === 0) {
            return res.status(404).send("No tasks found")
        } else {
            console.log("alltasks: ", allTasks)
            return res.status(200).json({
            status: 200,
            tasks: allTasks,
            });}
    } catch (error) {
        console.log(error.message);
    } finally {
        await mongoConnect(false)
    }
}

module.exports = getTasksHandler