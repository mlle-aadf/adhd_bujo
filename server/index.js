// "use strict";

const express = require("express");
const morgan = require("morgan");

// require('dotenv').config()


const PORT = 4000;

// //require the handlers

const createTaskHandlder = require("./handlers/createTaskHandler")
const getTasksHandler = require("./handlers/getTasksHandler")
const updateTaskHandler = require("./handlers/updateTaskHandler")
// const getCompletedHandler = require("./handlers/getCompletedHandler")

const createEventHandlder = require("./handlers/createEventHandlder")
const getEventHandler = require("./handlers/getEventHandler")
const getEventsHandler = require("./handlers/getEventsHandler")
const updateEventHandlder = require("./handlers/updateEventHandler")


express()
  .use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Methods",
      "OPTIONS, HEAD, GET, PUT, POST, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(express.static("./server/assets"))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))



  // get tasks from DB
  // .get("/todo", getTasksHandler)
  

  // DON'T NEED?? // get completed tasks from DB
  // .get("/todo", getCompletedHandler)

  // adds new task object to DB
  .post("/todo", createTaskHandlder)
  
  // updates a task object from DB
  .patch("/todo", updateTaskHandler)
  
  
  // deletes all tasks marked "deleted"
  // .. deleteMany
  
  
  // get single event from DB
  .get("/event", getEventHandler)

  // get all events from DB
  .get("/schedule", getEventsHandler)
  
  // adds new event object to DB
  .post("/schedule", createEventHandlder)
  
  // updates an event object from DB
  .patch("/schedule", updateEventHandlder)


  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
