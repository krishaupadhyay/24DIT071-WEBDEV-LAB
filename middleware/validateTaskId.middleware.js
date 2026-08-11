const validateTaskId = (req, res, next) => {

    const id = req.params.id;

    if (!/^\d+$/.test(id)) {
        return res.status(400).json({
            error: "Task ID must be a number"
        });
    }

    next();
};

module.exports = validateTaskId;