import express from "express"
import cors from "cors"

import profileRoute from "./routes/profile.route.js"

const app = express()

// Middlewares
app.use(express.json())
app.use(cors())

// routes
app.use("/api", profileRoute)

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Express server is running"
    })
})

export default app;
