const {mongoConnect} = require('./mongoConnect')


const createTaskHandlder = async (req, res) => {

    const {newTask} = req.body

    try{
        const db = await mongoConnect(true)
        const allTasks = await db.collection('tasks')
    
        const result = await allTasks.insertOne(newTask)
        
        if (result) {
            return res.status(201).json(
                {
                    status: 201,
                    message: `task #${newTask._id} saved`
                }
            )
        } else {
            throw Error
        }

    } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            status: 500,
            message: "failed to save new task"
        })
        
    } finally {
        mongoConnect(false)
    }
}


module.exports = {createTaskHandlder}