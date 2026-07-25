import mongoose from "mongoose";
import "dotenv/config"

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URL);
        console.log(`DB Connection : ✅ Successful\nDB Name : ${connection.connection.host}`)
    } catch (error) {
        if (error instanceof Error) {
            console.log(`DB Connection : ❌ Failed\nError : ${error.message}`)
        } else {
            console.log(`DB Connection : ❌ Failed\nError : ${error}`)
        }
    }
}

export default connectDB
