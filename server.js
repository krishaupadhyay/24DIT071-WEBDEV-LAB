const express = require("express");

const app = express();

const taskRoutes = require("./routes/task.routes");
const logger = require("./middleware/logger.middleware");
const validateJson = require("./middleware/validateJson.middleware");

const PORT = 5000;

app.use(express.json());

app.use(logger);

app.use(validateJson);

app.use("/tasks", taskRoutes);


// 404 handler
app.use((req, res) => {
    res.status(404).json({
        error: "Route not found",
        path: req.originalUrl
    });
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});