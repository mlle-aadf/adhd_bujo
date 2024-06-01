const mongoConnect = require('./mongoConnect')

const deleteTasksHandler = async (req, res) => {

    try {
        const db = await mongoConnect(true)

        db.collection('tasks').deleteMany({"deleted": true})

        return res.status(200).json( {
                status: 200,
                message: `deleteTasksHandler sucess`
            })

    } catch (error) {
        console.log(error.message);
    } finally {
        console.log("bin emptied")
        await mongoConnect(false)
    }
}

module.exports = deleteTasksHandler