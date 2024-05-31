const mongoConnect = require('./mongoConnect')

const updateTaskHandler = async (req, res) =>  {
    
    if (req?.body) {
        const {option, taskIDs} = req.body
        console.log("updateTaskHandler_option: ", option, "type: ", typeof taskIDs, "taskIDs: ", taskIDs)


        
        // let mongoSET
        // option === "complete" ? mongoSET = {"completed":true} : mongoSET = {"deleted":true} 

        // console.log("MONGOSET: ", mongoSET)


// if typeOftaskIDs

        try{
            const db = await mongoConnect(true)
            const allTasks = await db.collection('tasks')
           
           
            if (option === "deleteCompleted") {

                const result = await allTasks.updateMany(
                    {completed: true},
                    {$set: {"deleted":true, "completed":false}}
                )

                if (!result) {
                    return res.status(500).json({
                        status: 500,
                        message: "failed to delete completed"
                    })
                } 

            } else {
                console.log("UPDATE ONE")
                let mongoSET
                option === "complete" ? mongoSET = {"completed":true} : mongoSET = {"deleted":true} 

                const result = await allTasks.updateOne(
                    {_id: taskIDs},
                    {$set: mongoSET}
                )

                console.log("RESULT: ", result)

                if (!result) {
                    return res.status(500).json({
                        status: 500,
                        message: "failed to update task"
                    })
                } 
            }
            
            return res.status(201).json(
                {
                    status: 201,
                    message: `updateTaskHandler sucess`
                    // message: `task #${taskID} updated`
                }
            )
    
        } catch (error) {
            console.log(error.message)
            
        } finally {
            mongoConnect(false)
        }
    }




    
//__________________________________________________________________
    // if (req?.body) {
    //     const {option, taskID} = req.body
    //     console.log("updateHandler: ", option, taskID)
        
    //     let mongoSET
    //     option === "complete" ? mongoSET = {"completed":true} : mongoSET = {"deleted":true} 

    //     console.log("MONGOSET: ", mongoSET)

    //     try{
    //         const db = await mongoConnect(true)
    //         const allTasks = await db.collection('tasks')

    //         const result = await allTasks.updateOne(
    //             {_id: taskID},
    //             {$set: mongoSET}
    //         )
            
    //         if (!result) {
    //             return res.status(500).json({
    //                     status: 500,
    //                     message: "failed to update task"
    //                 })
    //         }
    
    //         return res.status(201).json(
    //             {
    //                 status: 201,
    //                 message: `task #${taskID} updated`
    //             }
    //         )
    
    //     } catch (error) {
    //         console.log(error.message)
            
    //     } finally {
    //         mongoConnect(false)
    //     }
    // }
}

module.exports = updateTaskHandler