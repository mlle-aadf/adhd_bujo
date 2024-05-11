const mongoConnect = require('./mongoConnect')


const createTaskHandlder = async (req, res) => {

    // const {body} = req

    // console.log(req.body)

    // console.log(req.params)
    // const {newTask} = req.body
    // const newTask = {
    //     "_id": "8",
    //     "description": "hello",
    //     "importance": 3,
    //     "urgency": 2,
    //     "priority": 5,
    //     "completed": false,
    //     "deleted": false
    // }

    console.log("NEW TASK: ", req)
    try{
        const db = await mongoConnect(true)
        const allTasks = await db.collection('tasks')
    
        const result = await allTasks.insertOne(newTask)
        
        if (!result) {
            console.log("oops")
            // return res.status(500).json({
            //         status: 500,
            //         message: "failed to save task"
            //     })
        }
            // return res.status(201).json(
            //     {
            //         status: 201,
            //         message: `task #${newTask._id} saved`
            //     }
            // )
        // } else {
        //     throw Error
        // }
        console.log("٩(◕‿◕)۶-")

    } catch (error) {
        console.log(error.message)
        // return res.status(500).json({
        //     status: 500,
        //     message: "failed to save new task"
        // })
        
    } finally {
        mongoConnect(false)
    }
}

createTaskHandlder()

module.exports = createTaskHandlder