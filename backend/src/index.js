import app from "./app.js"
import connectDB from "./database/connection.js"
import "dotenv/config"

const port = process.env.PORT

// Connect to database
connectDB()

app.listen(port, () => {
    console.log(`Server is running at 🔗 http://localhost:${port}\n\t\t     🌴 http://127.0.0.1:${port}`)
})
