import mongoose, { model } from "mongoose";


const profileSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true
    },
    bio: {
        type: String
    }
})

const profile = mongoose.model("Profile", profileSchema)

export default profile
