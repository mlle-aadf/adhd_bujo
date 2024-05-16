const mongoConnect = require('./mongoConnect')


const createTaskHandlder = async (req, res) => {
    
    
    if (req?.body) {
        console.log("NEW TASK: ", req.body)
        const newTask = req.body

        try{
            const db = await mongoConnect(true)
            const allTasks = await db.collection('tasks')
        
            const result = await allTasks.insertOne(newTask)
            
            if (!result) {
                // console.log("oops")
                return res.status(500).json({
                        status: 500,
                        message: "failed to save task"
                    })
            }
    
            console.log("task created: ", req)
            return res.status(201).json(
                {
                    status: 201,
                    message: `task #${newTask._id} saved`
                }
            
            )
    
    
        } catch (error) {
            console.log(error.message)
            
        } finally {
            mongoConnect(false)
        }

    }

}

createTaskHandlder()

module.exports = createTaskHandlder