const mongoConnect = require('./mongoConnect')

const updateTaskHandler = async (req, res) =>  {
    
    if (req?.body) {
        const {option, taskID} = req.body
        console.log("updateHandler: ", option, taskID)
        
        let mongoSET
        option === "complete" ? mongoSET = {"completed":true} : mongoSET = {"deleted":true} 

        // switch option 
        // case complete : mongoSET = {"completed":true}
        // case delete : mongoSET = {"deleted":true}
        // case pinned : mongoSET = {"pinned":true}

        console.log("MONGOSET: ", mongoSET)

        try{
            const db = await mongoConnect(true)
            const allTasks = await db.collection('tasks')

            const result = await allTasks.updateOne(
                {_id: taskID},
                {$set: mongoSET}
            )
            
            if (!result) {
                return res.status(500).json({
                        status: 500,
                        message: "failed to update task"
                    })
            }
    
            return res.status(201).json(
                {
                    status: 201,
                    message: `task #${taskID} updated`
                }
            )
    
        } catch (error) {
            console.log(error.message)
            
        } finally {
            mongoConnect(false)
        }
    }
}

module.exports = updateTaskHandler