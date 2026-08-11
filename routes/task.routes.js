const express = require("express");
const validateTaskId = require("../middleware/validateTaskId.middleware");
const router = express.Router();

const {
    createTask,
    getAllTasks,
    updateTask,
    deleteTask
} = require("../controllers/task.controller");


// CREATE
router.post("/", createTask);


// READ
router.get("/", getAllTasks);


// UPDATE
router.put("/:id", validateTaskId, updateTask);
//DELETTE
router.delete("/:id", validateTaskId, deleteTask);


module.exports = router;