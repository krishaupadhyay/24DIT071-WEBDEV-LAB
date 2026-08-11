const tasks = require("../data/task.data");

// CREATE TASK
const createTask = (req, res) => {

    const newTask = {
        id: tasks.length + 1,
        title: req.body.title,
        completed: req.body.completed || false
    };

    tasks.push(newTask);

    res.status(201).json({
        message: "Task created successfully",
        task: newTask
    });
};


// READ ALL TASKS
const getAllTasks = (req, res) => {

    res.status(200).json(tasks);

};


// UPDATE TASK
const updateTask = (req, res) => {

    const id = parseInt(req.params.id);

    const task = tasks.find(task => task.id === id);

    if (!task) {
        return res.status(404).json({
            error: "Task not found"
        });
    }

    task.title = req.body.title ?? task.title;
    task.completed = req.body.completed ?? task.completed;

    res.status(200).json({
        message: "Task updated successfully",
        task: task
    });
};


// DELETE TASK
const deleteTask = (req, res) => {

    const id = parseInt(req.params.id);

    const index = tasks.findIndex(task => task.id === id);

    if (index === -1) {
        return res.status(404).json({
            error: "Task not found"
        });
    }

    const deletedTask = tasks.splice(index, 1);

    res.status(200).json({
        message: "Task deleted successfully",
        task: deletedTask[0]
    });
};


module.exports = {
    createTask,
    getAllTasks,
    updateTask,
    deleteTask
};