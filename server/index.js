// "use strict";

const express = require("express");
const morgan = require("morgan");

// require('dotenv').config()


const PORT = 4000;

// //require the handlers

const createTaskHandlder = require("./handlers/createTaskHandler")
const getTasksHandler = require("./handlers/getTasksHandler")
const deleteTaskHandler = require("./handlers/deleteTaskHandler")


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
  .get("/todo", getTasksHandler)

  // adds new task object to DB
  .post("/todo", createTaskHandlder)
  
  // deletes a task object from DB
  .patch("/todo", deleteTaskHandler)
  
  
  // deletes all tasks marked "deleted"
// .. deleteMany






  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
